
var disc;

function positionAt(element, angle, distance, unit) {
	if (unit === undefined) unit = '%';
	element.style.left = 50 + distance * Math.cos((angle / 180) * Math.PI) + unit;
	element.style.top = 50 - distance * Math.sin((angle / 180) * Math.PI) + unit;
}

function mkLabel(text) {
	var l = document.createElement('div');
	var inner = document.createElement('div');
	inner.innerText = text;
	l.appendChild(inner);
	return l;
}


function addPerson(name, color, offset) {
	var time = getTimeUTC() / 60; // time in hours

	var t = time + offset;

	var person = mkLabel(name);
	person.classList.add('person');
	person.classList.add((t < 12) ? 'left' : 'right');

	// add title to the inner div
	person.children[0].title = 'UTC' + (offset > 0 ? '+' + offset : offset) + ', ' + (Math.floor(t) + ':' + Math.floor(60 * (t - Math.floor(t))));

	// angle (deg)
	var at = (18 - t) * 15;

	positionAt(person, at, 54);
	disc.appendChild(person);

	person.style.color = color;

	// bullet
	var bu = document.createElement('div');
	bu.classList.add('bullet');
	bu.style.backgroundColor = color;
	positionAt(bu, at, 50.5);
	disc.appendChild(bu);
}

function init() {

	disc = document.getElementById('disc');

	for (var i = 0; i < 24; i++) {
		var mark = mkLabel(i);
		mark.className = 'mark';

		positionAt(mark, (18 - i) * 15, 46);
		disc.appendChild(mark);
	}

	addPeople();

	// refresh the disc every N seconds
	setInterval(addPeople, 1000 * 5);

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


	addPerson('MightyPork (CEST)', '#EAF425', 2);
	//addPerson('Locercus', '#EAF425', 2);
	//addPerson('CoolSquid', '#EAF425', 2);
	//addPerson('Creeps', '#EAF425', 2);
	//addPerson('AntonvonRaumer', '#00BAFF', 2);
	addPerson('ImReble548', '#69E79E', -6);
	//addPerson('Deli73', '#D13278', -5.5);
	addPerson('TheBadFame', '#329AFF', -5);
}

function getTimeUTC() {
	var x = new Date();
	return x.getUTCHours() * 60 + x.getUTCMinutes();
}
