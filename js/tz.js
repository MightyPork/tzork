var people = [
	{name: 'MightyPork', tz: 'Europe/Prague', color: '#EAF425'},
	//{name: 'Locercus', tz: 'Europe/Copenhagen', color: '#45F425'},
	{name: 'TheBadFame', tz: 'America/Mexico_City', color: '#329AFF'},
	{name: 'ImReble548', tz: 'America/Denver', color: '#69E79E'},
	{name: 'Deli731234', tz: 'America/Tijuana', color: '#F57126'},
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

	// Create a Moment and format it
	var mmt = moment().tz(obj.tz);
	var hms = mmt.format('H:m:s');
	var hhmmss = mmt.format('HH:mm:ss');

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
	positionAt(bu, angle, 50.5);
	disc.appendChild(bu);


	// Create a label
	var la = document.createElement('div');
	la.classList.add('person');
	la.classList.add((t < 12) ? 'left' : 'right'); // left and right side of the clock

	// Box inside "label"
	var inner = document.createElement('div');
	inner.innerText = obj.name;
	inner.title = obj.tz + ', ' + hhmmss; // tooltip
	inner.style.color = obj.color;

	la.appendChild(inner);

	positionAt(la, angle, 54);
	disc.appendChild(la);
}

function init() {

	disc = document.getElementById('disc');

	for (var i = 0; i < 24; i++) {
		// mark div
		var mark = document.createElement('div');
		mark.classList.add('mark');
		var inner = document.createElement('div');
		inner.innerText = '' + i;
		mark.appendChild(inner);

		var angle = hour2angle(i);
		positionAt(mark, angle, 46);
		disc.appendChild(mark);
	}

	addPeople();

	// refresh the disc every N seconds
	setInterval(addPeople, 1000*5);

	// force refresh after tab gets focused
	window.onfocus = addPeople;
}


function addPeople() {
	console.log('Redrawing marks');

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
