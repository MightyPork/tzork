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
	var hhmmss = mmt.format('H:mm:ss');

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


	// Create a label
	var la = document.createElement('div');
	la.classList.add('person');
	la.classList.add((t < 12) ? 'left' : 'right'); // left and right side of the clock
	la.innerText = obj.name;
	la.title = obj.tz + ', ' + hhmmss; // tooltip
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
	setInterval(update, 1000*10);
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
