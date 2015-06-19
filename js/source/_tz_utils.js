// TimeZone resolving utilities


/** Work out timezone from a name (country name, timezone name etc) */
function resolveTZ(tz) {
	// Resolve, if it's alias
	if (tz in tz_aliases) {
		var old = tz;
		tz = tz_aliases[tz];

		//console.log('TZ "' + old + '" resolved as "' + tz + '"');
	}

	// Check if it's valid for Moment.js
	if (!moment.tz.zone(tz)) {
		return false;
	}
	return tz;
}


/** Get proper timezone name for a person */
function getTimezoneForPerson(obj) {
	// Resolve timezone, cache result in the object.
	var tz = obj._tz_cached;
	if (!tz) {
		tz = obj._tz_cached = resolveTZ(obj.tz);
	}

	if (tz === false) {
		console.error('Invalid timezone for ' + obj.name);
		return false;
	}

	return tz;
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
