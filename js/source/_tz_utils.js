// TimeZone resolving utilities

var people_loading = 0;

function loadPeopleArray(onDone) {
	var localPeople = localStorage['people'];
	if (typeof localPeople != 'undefined') {
		try {
			people = JSON.parse(localPeople);
		} catch (e) {
			console.error('Error when parsing people array from localstorage', e);
		}
	}

	people_loading = 0;

	// Parse timezones, mark invalid people
	people.forEach(function (obj) {
		obj._valid = true;

		// check if person valid
		var bad = false;
		['name', 'color', 'tz'].forEach(function (e) {
			if (typeof(obj[e]) == 'undefined') {
				console.error('Missing "' + e + '" field in person object', obj);
				bad = true;
			}
		});
		if (bad) {
			obj._valid = false; // mark as bad
			return;
		}

		people_loading++;
		resolveTimezone(obj);
	});

	var probe = function () {
		//console.log('probe');

		if (people_loading <= 0) {
			console.log('LOADING DONE');
			onDone();
			return;
		}

		setTimeout(probe, 10);
	};

	// launch probing
	probe();
}

var last_google_call_timestamp = 0;

/** Work out timezone from a name (country name, timezone name etc) */
function resolveTimezone(obj) {
	obj._tz_cached = obj.tz;

	// Resolve, if it's alias
	if (obj.tz in tz_aliases) {
		obj._tz_cached = tz_aliases[obj.tz];
		console.log('TZ "' + obj.tz + '" resolved as "' + obj._tz_cached + '"');
	}

	// Check if it's valid for Moment.js
	if (moment.tz.zone(obj._tz_cached)) {
		people_loading--; // valid
		return;
	}

	// Ask Google what it is
	scheduleGoogleReq(obj);
}

// Must not poll the GEO api faster than 10x per second
function scheduleGoogleReq(obj) {
	var elapsed = (Date.now() - last_google_call_timestamp);
	var t = Math.max(0, (110 - elapsed));

	//console.log('Scheduling Google request in ' + t + 'ms');

	if (t == 0) {
		last_google_call_timestamp = Date.now();
		getTimezoneFromGoogleApis(obj);
		return;
	}

	setTimeout(function () {
		//console.log('GOOGLE REQUEST NOW');
		scheduleGoogleReq(obj);
	}, t);
}


function getTimezoneFromGoogleApis(obj) {
	var url1 = "https://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=" + encodeURIComponent(obj.tz);
	callAjax(url1, function (resp) {
		try {
			var rj = JSON.parse(resp);
			//console.log('Reply from Google:', rj);

			if (rj.status === 'OK') {

				// we got something
				console.log('resp. is OK');

				var results = rj.results;
				console.log(results);

				if (results.length > 1) {
					console.error('WARNING: Google found multiple matches. Try to be more specific at "' + obj.tz + '"');
				}

				var lat = results[0].geometry.location.lat;
				var lon = results[0].geometry.location.lng;

				var timestamp = Math.floor(Date.now() / 1000);

				// Get TZ for location
				var url2 = "https://maps.googleapis.com/maps/api/timezone/json?location=" + lat + "," + lon + "&timestamp=" + timestamp + "&sensor=false";
				callAjax(url2, function (resp) {
					//console.log('Success tzAPI: ' + resp);

					try {
						var rj = JSON.parse(resp);
						//console.log('Reply from Google:', rj);

						if (rj.status === 'OK') {
							console.log('Resolved TZ as ' + rj.timeZoneId);
							obj._tz_cached = rj.timeZoneId;
						} else {
							obj._valid = false;
						}

					} catch (e) {
						console.log(e);
						obj._valid = false;
					}

					people_loading--; // final

				}, function (resp) {
					console.log('FAIL tzAPI: ' + resp);
					obj._valid = false;
					people_loading--; // final, fail
				});

			} else {
				obj._valid = false;
				people_loading--; // final, fail
			}

		} catch (e) {
			console.log(e);
			obj._valid = false;

			people_loading--; // final, fail
		}

	}, function (resp) {
		console.log('FAIL geoAPI: ' + resp);
		obj._valid = false;
		people_loading--; // final, fail
	});
}


/** Get proper timezone name for a person */
function getTimezoneForPerson(obj) {
	// Resolve timezone, cache result in the object.
	return obj._tz_cached;
}


/** Resolve current time for a person - convert to seconds since midnight */
function getTimeForPerson(obj) {
	var tz = getTimezoneForPerson(obj);
	if (tz === false) return false;

	// Create a Moment and format it
	var mmt = moment().tz(tz);

	// Get pieces of time, convert to seconds
	return mmt.hour() * 3600 + mmt.minute() * 60 + mmt.second();
}
