var disc;

// req. global arrays: tz_aliases, people.

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


function resolveTZ(tz) {

	// Resolve, if it's alias
	if (tz in tz_aliases) {
		var old = tz;
		tz = tz_aliases[tz];

		console.log('TZ "' + old + '" resolved as "' + tz + '"');
	}

	// Check if it's valid for Moment.js
	if (!moment.tz.zone(tz)) {
		return false;
	}

	return tz;
}


/**
 * Add a person to the clock.
 *
 * @param obj object with information about the person
 *            (name, tz, color)
 */
function addPerson(obj) {

	// Resolve timezone, cache result in the object.
	var tz = obj._tz_cached;
	if (!tz) {
		tz = obj._tz_cached = resolveTZ(obj.tz);
	}
	if (tz === false) {
		console.error('Invalid timezone for ' + obj.name);
	}

	// local time
	var here = moment();

	// Create a Moment and format it
	var there = moment().tz(tz);
	var hhmmss = there.format('H:mm, MMM Do YYYY');

	// Get pieces of time, convert to seconds
	var secs = there.hour() * 3600 + there.minute() * 60 + there.second();

	// Convert to hours
	var t = (secs / 3600);

	// Get angle (degrees)
	var angle = hour2angle(t);


	// Create a bullet
	var bu = document.createElement('div');
	bu.className = 'bullet';
	bu.style.backgroundColor = obj.color;
	positionAt(bu, angle, 50.2);
	disc.appendChild(bu);

	// make it a link if it's twitter name
	var twi = (obj.name.indexOf('@') === 0);

	// Create a label
	var la = document.createElement(twi ? 'a' : 'span');

	if (twi) {
		la.href = 'https://twitter.com/' + obj.name;
		la.classList.add('twitter-link');
	}

	la.classList.add('person');
	la.classList.add((t < 12) ? 'left' : 'right'); // left and right side of the clock

	// local
	var d0 = here.dayOfYear();
	var y0 = here.year();

	// remote
	var d1 = there.dayOfYear();
	var y1 = there.year();


	// resolve day changes, add class for prev/next day
	var clz = null;

	if (y1 < y0) {
		clz = 'day-prev';
	} else if (y1 > y0) {
		clz = 'day-next';
	} else {
		if (d1 < d0) {
			clz = 'day-prev';
		} else if (d1 > d0) {
			clz = 'day-next';
		}
	}

	if (clz !== null) {
		la.classList.add(clz);
		bu.classList.add(clz);
	}

	la.textContent = obj.name;
	la.title = hhmmss + ' (' + obj.tz + ')'; // tooltip
	la.style.color = obj.color;

	positionAt(la, angle, 53.5); // label distance
	disc.appendChild(la);
}


/**
 * Build the hour numbers
 */
function buildClockMarks() {
	// The clock marks
	for (var i = 0; i < 24; i++) {
		// mark div
		var mark = document.createElement('div');
		mark.classList.add('mark');
		mark.classList.add('hour-' + i);

		if (i == 0 || i == 6 || i == 12 || i == 18) {
			mark.classList.add('sixth');
		}

		mark.textContent = '' + i;

		var angle = hour2angle(i);
		positionAt(mark, angle, 45);
		disc.appendChild(mark);
	}
}


/**
 * Initialize the app
 */
function init() {

	disc = document.getElementById('disc');
	buildClockMarks();

	update();

	// refresh the disc every N seconds
	setInterval(update, 1000 * 10);
	setInterval(changeColon, 1000);

	// force refresh after tab gets focused
	window.onfocus = update;
}

/**
 * Toggle colon visibility each second (uses sec % 2)
 */
function changeColon() {
	var s = (new Date()).getSeconds() % 2;

	document.getElementById('loctimecolon').style.opacity = s ? 1 : 0;
}


/**
 * Update people positions & time
 */
function update() {
	redrawPeople();

	// redraw time, wrap colon in span
	var mmt = moment();

	// need zero-padded minutes!
	var parts = mmt.format('H:mm').split(':');
	document.getElementById('localtime').innerHTML = parts[0] + '<span id="loctimecolon">:</span>' + parts[1];
	changeColon();
}


/**
 * Redraw people (actually deletes and re-adds them)
 */
function redrawPeople() {
	// Delete all old stuff
	var x = document.querySelectorAll('.bullet, .person');
	for (var i in x) {
		if (x.hasOwnProperty(i)) {
			var e = x[i];
			if (!e || !e.parentNode) continue;

			e.parentNode.removeChild(e);
		}
	}

	people.forEach(addPerson);
}
