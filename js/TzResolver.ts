/// <reference path="data_tz_aliases.ts" />
/// <reference path="Data.ts" />
/// <reference path="Ajax.ts" />

/// <reference path="typing/moment.d.ts" />
/// <reference path="typing/moment-timezone.d.ts" />
/// <reference path="typing/googleapis.d.ts" />

module Tzork.TzResolver {
	var people_loading: number = 0;
	var _tzcache: Object = null;


	/** Get timezone from tz cache */
	function _getTzFromCache(tz: string): string {
		// Try to load tz cache from localStorage
		if (_tzcache == null) {
			var hit = localStorage['tz_cache'];
			if (hit) {
				try {
					_tzcache = JSON.parse(hit);
					if (_tzcache === null) {
						_tzcache = {};
					}
				} catch (e) {
					_tzcache = {};
				}
			} else {
				_tzcache = {};
			}
		}

		return Utils.objGet(_tzcache, tz, null);
	}


	/** Add a value to timezone cache & save the cache */
	function _addTzToCache(tz: string, _tz: string) {
		_tzcache[tz] = _tz;
		localStorage['tz_cache'] = JSON.stringify(_tzcache);
	}

	/** Process points and find timezones. Marks nvalid points with _valid = false */
	export function resolvePointTimezones(points: Data.Point[], onDone: ()=>void) {

		// Parse timezones, mark invalid points
		points.forEach(function (obj: Data.Point) {
			obj._valid = true;

			// check if all required fields are present
			var bad = false;
			['name', 'color', 'tz'].forEach(function (e) {
				if (!Utils.keyExists(obj, e)) {
					console.error('Missing "' + e + '" field in point object', obj);
					bad = true;
				}
			});

			if (bad) {
				obj._valid = false; // mark as bad
				return;
			}

			// add missisng "show" attribute
			Utils.setIfMissing(obj, 'show', true);

			// run async
			people_loading++;
			_resolveTimezone(obj);
		});

		(function probe() {
			if (people_loading <= 0) {
				onDone();
				return;
			}

			setTimeout(probe, 5);
		})();
	}


	/** Work out timezone from a name (country name, timezone name etc) */
	function _resolveTimezone(obj: Data.Point) {
		obj._tz = obj.tz;

		// Resolve, if it's alias
		if (obj.tz in tz_aliases) {
			obj._tz = tz_aliases[obj.tz];
			console.log('TZ "' + obj.tz + '" resolved as "' + obj._tz + '"');
		}

		var fromcache = _getTzFromCache(obj.tz);
		if (fromcache) {
			obj._tz = fromcache;
		}

		// Check if it's valid for Moment.js
		if (moment.tz.zone(obj._tz)) {
			people_loading--; // valid
			return;
		}

		// Check if it's on cache

		// Ask Google what it is
		_scheduleGoogleReq(obj);
	}


	var last_google_call_timestamp: number = 0;

	/** Schedule google request, limiting to max allowed request rate */
	function _scheduleGoogleReq(obj: Data.Point) {
		var elapsed = (Date.now() - last_google_call_timestamp);
		var t = Math.max(0, (105 - elapsed)); // max 10/s

		if (t == 0) {
			last_google_call_timestamp = Date.now();
			_getTimezoneFromGoogleAPIs(obj);
			return;
		}

		setTimeout(function () {
			_scheduleGoogleReq(obj);
		}, t);
	}


	function _getTimezoneFromGoogleAPIs(obj: Data.Point) {
		var geoURL = "https://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=" + encodeURIComponent(obj.tz);

		/** Bad result from ajax call */
		function ajaxFail(resp: number) {
			console.log('FAIL: code ' + resp);
			obj._valid = false;
			people_loading--; // final, fail
		}

		/** Good result from Geo API */
		function geoOK(resp) {
			try {
				var rj = <Google.GeoResponse>JSON.parse(resp);
				console.log('Reply from geoAPI:', rj);

				if (rj.status !== 'OK') {
					obj._valid = false;
					people_loading--; // end
					return;
				}

				// we got something
				var results = rj.results;
				if (results.length > 1) {
					console.error('WARNING: Google found multiple matches. Try to be more specific at "' + obj.tz + '"');
				}

				var loc: Google.Loc = results[0].geometry.location;

				var now = Math.floor(Date.now() / 1000);

				// Get TZ for location
				var tzURL = "https://maps.googleapis.com/maps/api/timezone/json?location=" + loc.lat + "," + loc.lng + "&timestamp=" + now + "&sensor=false";
				Ajax.get(tzURL, tzOK, ajaxFail);

			} catch (e) {
				console.log(e);
				obj._valid = false;
				people_loading--; // end
			}
		}

		/** Good result from TZ API */
		function tzOK(resp) {
			try {
				var rj = <Google.TzResponse>JSON.parse(resp);
				console.log('Reply from Google:', rj);

				if (rj.status !== 'OK') {
					obj._valid = false;
					people_loading--; // end
					return;
				}

				console.log('Resolved TZ as ' + rj.timeZoneId);
				obj._tz = rj.timeZoneId;
				_addTzToCache(obj.tz, obj._tz);
				people_loading--; // end

			} catch (e) {
				console.log(e);
				obj._valid = false;
				people_loading--; // end
			}
		}

		Ajax.get(geoURL, geoOK, ajaxFail);
	}


	/** Resolve current time for a person - convert to seconds since midnight */
	export function getTimeForPoint(obj: Data.Point): number {
		// Create a Moment and format it
		var mmt: moment.Moment = moment().tz(obj._tz);

		// Get pieces of time, convert to seconds
		return mmt.hour() * 3600 + mmt.minute() * 60 + mmt.second();
	}
}
