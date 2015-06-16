
var disc;

function positionAt(element, angle, distance, unit) {
	if (unit == undefined) unit = '%';
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

	var pork = mkLabel(name);
	pork.classList.add('person');
	pork.classList.add((t < 12) ? 'left' : 'right');
	pork.children[0].title = 'UTC' + (offset > 0 ? '+' + offset : offset) + ', ' + (Math.floor(t) + ':' + Math.floor(60 * (t - Math.floor(t))));

	var at = (18 - t) * 15;

	positionAt(pork, at, 54);
	disc.appendChild(pork);

	pork.style.color = color;

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

	setInterval(addPeople, 1000 * 5);

	window.onfocus = addPeople;
}


function addPeople() {
	console.log('Redrawing marks');

	var x = document.querySelectorAll('.bullet, .person');
	for (var i in x) {
		if (x.hasOwnProperty(i)) {
			var e = x[i];
			if (!e || !e.parentNode) continue;

			e.parentNode.removeChild(e);
		}
	}

	addPerson('MightyPork', '#EAF425', 2);
	//addPerson('Locercus', '#EAF425', 2);
	//addPerson('CoolSquid', '#EAF425', 2);
	//addPerson('Creeps', '#EAF425', 2);
	//addPerson('AntonvonRaumer', '#00BAFF', 2);
	addPerson('ImReble548', '#69E79E', -4);
	addPerson('Deli73', '#D13278', -5);
}

function getTimeUTC() {
	var x = new Date();
	return x.getUTCHours() * 60 + x.getUTCMinutes();
}
