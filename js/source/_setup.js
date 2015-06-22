function openSetupDialog() {
	// Clear error text
	document.getElementById('people_error').textContent = '';

	// Populate the textarea
	//var ta = document.getElementById('people_json');

	var people_clone = JSON.parse(JSON.stringify(people));
	people_clone.forEach(function (obj) {
		delete obj._t;
		delete obj._valid;
		delete obj._tz_cached;
	});

	//ta.value = JSON.stringify(people_clone, null, '\t');

	var modal = document.getElementById('setup_dialog');
	modal.style.display = 'block';

	setTimeout(function () {
		modal.style.opacity = 1;
	}, 1);
}


// called from "onClick"
function submitPeopleEdit(action) {
	switch (action) {
		case 'defaults':
			localStorage['people'] = JSON.stringify(people_orig);
			init();
			hideSetupModal();
			break;

		case 'close':
			hideSetupModal();
			break;

		case 'save':
			try {
				var ta = document.getElementById('people_json');
				var pp = JSON.parse(ta.value);

				pp.forEach(function (obj) {
					if (typeof obj.name == 'undefined') {
						throw new SyntaxError('Missing "name"');
					}

					if (typeof obj.tz == 'undefined') {
						throw new SyntaxError('Missing "tz" for '+obj.name);
					}

					if (typeof obj.color == 'undefined') {
						throw new SyntaxError('Missing "color" for '+obj.name);
					}
				});


				localStorage['people'] = JSON.stringify(pp);
				init();
				hideSetupModal();
			} catch (e) {
				var er = document.getElementById('people_error');

				if (e.message.match(/^Unexpected token [,\]}]/g)) {
					er.textContent = 'Syntax error: trailing comma ?';
				} else if (e.message.match(/^Unexpected string/g)) {
					er.textContent = 'Syntax error: missing comma ?';
				} else {
					er.textContent = 'Syntax error: ' + e.message;
				}

				console.log('Error in user-entered JSON', e);
			}

			break;
	}


}


function hideSetupModal() {
	// Hide modal
	var modal = document.getElementById('setup_dialog');
	modal.style.opacity = 0;
	setTimeout(function () {
		modal.style.display = 'none';
	}, 500);
}
