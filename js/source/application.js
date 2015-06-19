var disc;
var mouse_hovering_list; // flag that user is hovering a list -> suppress redraw
// req. global arrays: tz_aliases, people.


/** Initialize the app */
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


/** Build the hour numbers */
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


/** Toggle colon visibility each second (uses sec % 2) */
function changeColon() {
	var s = (new Date()).getSeconds() % 2;

	document.getElementById('loctimecolon').style.opacity = s ? 1 : 0;
}


/** Update people positions & time */
function update() {
	redrawPeople();
	redrawTime();
}


/** Redraw people (actually deletes and re-adds them) */
function redrawPeople() {
	if (mouse_hovering_list) {
		console.log('Mouse over list, not redrawing.');
		return;
	}

	// Delete all old stuff
	var x = document.querySelectorAll('.bullet, .person, .people-list');
	for (var i in x) {
		if (x.hasOwnProperty(i)) {
			var e = x[i];
			if (!e || !e.parentNode) continue;

			e.parentNode.removeChild(e);
		}
	}

	buildPeople();
}


/** Update the local time display */
function redrawTime() {
	// redraw time, wrap colon in span
	var mmt = moment();

	// need zero-padded minutes!
	var parts = mmt.format('H:mm').split(':');
	document.getElementById('localtime').innerHTML = parts[0] + '<span id="loctimecolon">:</span>' + parts[1];

	changeColon();
}


/** Build all people labels */
function buildPeople() {
	var resolved = [];

	// Group people with similar time
	people.forEach(function (obj) {
		var t = getTimeForPerson(obj);
		if (t === false) return; // fail in TZ?

		obj._t = t; // store time in the object for further use

		var placed;
		resolved.some(function (v) {
			// If the time is very close
			// merge
			if (Math.abs(v.t - t) < 60) {
				v.p.push(obj);
				placed = true;
				return true;
			}
		});

		if (!placed) {
			resolved.push({t: t, p: [obj]});
		}
	});

	resolved.forEach(function (x) {
		//console.log('Time ' + x.t + ', people #: ' + x.p.length);
		addPeopleAtTime(x.t, x.p);
	});
}


/** Add a bunch of people at specified time (s) */
function addPeopleAtTime(secs, people) {
	var i;

	var first = people[0];

	// Convert to hours & to degrees
	var t = secs / 3600;
	var angle = hour2angle(t);

	var octant = Math.floor(angle / 45);
	var quadrant = Math.floor(octant / 2);
	var is_up = quadrant < 2;
	var is_left = (quadrant > 0 && quadrant < 3);

	//console.log('angle = ' + angle + ', octant ' + octant + ', quadrant ' + quadrant + ', up ' + is_up + ', left ' + is_left);

	// Create a bullet
	var bu = document.createElement('div');
	bu.className = 'bullet';
	bu.style.backgroundColor = first.color;
	positionAt(bu, angle, 50.2);
	disc.appendChild(bu);

	// Create a label

	// make it a link if it's twitter name
	var list = document.createElement('div');
	list.classList.add('people-list');

	// add location classes
	list.classList.add(is_left ? 'left' : 'right');
	list.classList.add(is_up ? 'up' : 'down');

	list.classList.add('quad' + quadrant);
	list.classList.add('oct' + octant);


	// Determine if this is in prev / next day
	var here = moment();
	var there = moment().tz(getTimezoneForPerson(first));
	i = mmtDayCompare(here, there);
	var clz = (i == -1) ? 'day-prev' : (i == 1) ? 'day-next' : null;

	if (clz !== null) {
		list.classList.add(clz);
		bu.classList.add(clz);
	}

	if (people.length > 1) {
		list.classList.add('multiple');
		list.classList.add('count-' + people.length);
	}

	list.style.color = first.color;

	// add the people
	for (i = 0; i < people.length; i++) {
		var peep = people[i];
		var chld = createPersonLabel(peep);
		chld.title = there.format('H:mm, MMM Do') + '; ' + peep.tz;
		list.appendChild(chld);
	}

	positionAt(list, angle, 53.5, octant); // label distance
	disc.appendChild(list);

	list.addEventListener('mouseover', function (event) {
		mouse_hovering_list = true;
	});

	list.addEventListener('mouseout', function (event) {
		mouse_hovering_list = false;
	})
}


function createPersonLabel(obj) {
	var twi = (obj.name.indexOf('@') === 0);
	var la = document.createElement(twi ? 'a' : 'span');
	la.classList.add('person-label');

	if (twi) {
		la.href = 'https://twitter.com/' + obj.name;
		la.classList.add('twitter-link');
		la.target = '_blank';
	}

	la.style.color = obj.color;
	la.textContent = obj.name;

	return la;
}
