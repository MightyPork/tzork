var people = [
	{name: '@MightyPork', tz: 'Europe/Prague', color: '#EAF425'},
	{name: '@lastofavari', tz: 'Europe/Minsk', color: '#4ECEFF'},

	//{name: '@Locercus', tz: 'Europe/Copenhagen', color: '#EAF425'},
	//{name: '@Creeper32605', tz: 'Europe/Copenhagen', color: '#EAF425'}, // (city?)
	//{name: '@JesperJacoben', tz: 'Europe/Copenhagen', color: '#EAF425'},
	//{name: '@Jaredlll08', tz: 'Africa/Johannesburg', color: '#EAF425'},

	{name: '@TheBadFame', tz: 'America/Mexico_City', color: '#329AFF'},
	{name: '@ImReble548', tz: 'America/Denver', color: '#69E79E'},
	{name: '@Deli731234', tz: 'America/Tijuana', color: '#F57126'},

	// just to show an Australian account
	{name: '@eevblog', tz: 'Australia/Sydney', color: '#E63E3F'}
];

var disc;


function hour2angle(h) {
	return (18 - h) * 15;
}


function positionAt(element, angle, distance, unit) {
	if (typeof unit == 'undefined') unit = '%';
	element.style.left = 50 + distance * Math.cos((angle / 180) * Math.PI) + unit;
	element.style.top = 50 - distance * Math.sin((angle / 180) * Math.PI) + unit;
}


function addPerson(obj) {
	// Work out the local time
	if (!moment.tz.zone(obj.tz)) {
		console.error('Invalid timezone for ' + obj.name);
		return;
	}

	// local time
	var here = moment();

	// Create a Moment and format it
	var there = moment().tz(obj.tz);
	var hms = there.format('H:m:s');
	var hhmmss = there.format('H:mm, MMM Do YYYY');

	// Get pieces of time, convert to seconds
	var pts = hms.split(':');
	var secs = parseInt(pts[0]) * 3600 + parseInt(pts[1]) * 60 + parseInt(pts[2]);

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
	var twi = obj.name.indexOf('@') === 0;

	// Create a label
	var la = document.createElement(twi ? 'a' : 'span');

	if (twi) {
		la.href = 'https://twitter.com/' + obj.name
		la.classList.add('twitter-link');
	}

	la.classList.add('person');
	la.classList.add((t < 12) ? 'left' : 'right'); // left and right side of the clock

	var d0 = parseInt(here.format('DDD'));
	var d1 = parseInt(there.format('DDD'));
	var y0 = parseInt(here.format('YYYY'));
	var y1 = parseInt(there.format('YYYY'));

	var clz = null;

	// resolve day changes
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

	la.innerText = obj.name;
	la.title = hhmmss + ' (' + obj.tz + ')'; // tooltip
	la.style.color = obj.color;

	positionAt(la, angle, 53.5); // label distance
	disc.appendChild(la);
}

function init() {

	disc = document.getElementById('disc');

	// The clock marks
	for (var i = 0; i < 24; i++) {
		// mark div
		var mark = document.createElement('div');
		mark.classList.add('mark');
		mark.innerText = '' + i;

		var angle = hour2angle(i);
		positionAt(mark, angle, 45);
		disc.appendChild(mark);
	}

	update();

	// refresh the disc every N seconds
	setInterval(update, 1000 * 10);
	setInterval(changeColon, 1000);

	// force refresh after tab gets focused
	window.onfocus = update;
}


function changeColon() {
	var s = (new Date()).getSeconds() % 2;

	document.getElementById('loctimecolon').style.opacity = s ? 1 : 0;
}


function update() {
	redrawPeople();

	// redraw time
	var mmt = moment();

	var parts = mmt.format('H:mm').split(':');

	document.getElementById('localtime').innerHTML = parts[0] + '<span id="loctimecolon">:</span>' + parts[1];
	changeColon();
}


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
