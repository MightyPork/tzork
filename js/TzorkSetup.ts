/// <reference path="TzorkData.ts" />
/// <reference path="typing/underscore.d.ts" />


module TzorkSetup {

	export function openSetupDialog() {
		// Clear error text
		document.getElementById('people_error').textContent = '';

		// Populate the textarea
		var ta = <HTMLTextAreaElement> document.getElementById('people_json');

		ta.value = JSON.stringify(Tzork.stripProfile(Tzork.theRepo.getActiveProfile()), null, '\t');

		var modal = document.getElementById('setup_dialog');
		modal.style.display = 'block';

		setTimeout(function () {
			modal.style.opacity = "1";
		}, 1);
	}

	export function applyRepoChangesAndCloseModal() {
		Tzork.theRepo.parse(()=> {
			Tzork.theClock.loadActiveProfile();
			Tzork.theRepo.store();
			buildProfilesMenu();
			hideSetupModal();
		})
	}


	/** called from "onClick" */
	export function submitPeopleEdit(action) {
		switch (action) {
			case 'delete':
				if (confirm('Delete current profile?')) {
					Tzork.theRepo.profiles.splice(Tzork.theRepo.activeProfile, 1);
					applyRepoChangesAndCloseModal();
				}
			    break;

			case 'close':
				hideSetupModal();
				break;

			case 'save':
				try {
					var ta = <HTMLTextAreaElement> document.getElementById('people_json');
					var pp = JSON.parse(ta.value);

					// TODO check validity...

					//pp.forEach(function (obj) {
					//    if (typeof obj.name == 'undefined') {
					//        throw new SyntaxError('Missing "name"');
					//    }
					//
					//    if (typeof obj.tz == 'undefined') {
					//        throw new SyntaxError('Missing "tz" for ' + obj.name);
					//    }
					//
					//    if (typeof obj.color == 'undefined') {
					//        throw new SyntaxError('Missing "color" for ' + obj.name);
					//    }
					//});

					Tzork.theRepo.profiles[Tzork.theRepo.activeProfile] = pp;

					applyRepoChangesAndCloseModal();
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


	export function hideSetupModal() {
		// Hide modal
		var modal = document.getElementById('setup_dialog');
		modal.style.opacity = "0";
		setTimeout(function () {
			modal.style.display = 'none';
		}, 500);
	}


	export function buildProfilesMenu() {
		var pl = document.getElementById('profiles-dropdown-proflist');
		pl.innerHTML = ''; // empty

		var entries = [];
		_.each(Tzork.theRepo.profiles, (profile: Tzork.Profile, key: number) => {
			entries.push({k: key, n: profile.title});
		});

		entries.sort((a, b)=>{
			return a.n.localeCompare(b.n);
		});

		_.each(entries, (e) => {
			var el = document.createElement('a');
			el.textContent = e.n;
			el.dataset['index'] = e.k;
			el.classList.add('icon-profile');

			el.addEventListener('click', function () {
				Tzork.theRepo.activeProfile = this.dataset['index'];
				Tzork.theRepo.store();
				Tzork.theClock.loadActiveProfile();
			});

			pl.appendChild(el);
		});
	}
}
