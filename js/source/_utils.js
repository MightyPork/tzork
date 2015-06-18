
/**
 * Convert hour to angle (deg)
 *
 * @param h hour 0..24
 * @returns {number} angle in degrees
 */
function hour2angle(h) {
	return (18 - h) * 15;
}


/**
 * Position an element using polar coordinates
 *
 * @param element
 * @param angle    degrees
 * @param distance radius (in "unit")
 * @param unit     unit to use
 */
function positionAt(element, angle, distance, unit) {
	if (typeof unit == 'undefined') unit = '%';
	element.style.left = 50 + distance * Math.cos((angle / 180) * Math.PI) + unit;
	element.style.top = 50 - distance * Math.sin((angle / 180) * Math.PI) + unit;
}


/**
 * Determine if person is in prev / next day.
 * Takes moment.js instances as arguments.
 *
 * Returns -1, 0, 1 if "there"-day is before, at, or after "here".
 */
function mmtDayCompare(here, there) {

	// local
	var d0 = here.dayOfYear();
	var y0 = here.year();

	// remote
	var d1 = there.dayOfYear();
	var y1 = there.year();


	// resolve day changes, add class for prev/next day
	var clz = null;

	if (y1 < y0) {
		return -1;
	} else if (y1 > y0) {
		return 1;
	} else {
		if (d1 < d0) {
			return -1;
		} else if (d1 > d0) {
			return 1;
		}
	}

	return 0;
}
