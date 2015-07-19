/// <reference path="typing/underscore.d.ts" />

module Tzork.Menu {
	export function init() {
		Utils.hoverMenu('#menu-btn-profiles', '#profiles-dropdown');

		document.getElementById('menu-btn-edit').addEventListener('click', () => {
			Tzork.ProfileEditor.openDialog();
		});

		buildProfilesMenu();

		var b = document.getElementById('btn-new-profile');
		b.addEventListener('click', (e) => {
			var name = prompt('New profile name?', 'New Profile');

			if (name == null) {
				// Canceled
				return;
			}

			var prof = Data.createEmptyProfile();
			prof.title = name;

			Tzork.theRepo.profiles.push(prof);

			Tzork.theRepo.parse(()=> {
				Tzork.theRepo.activeProfile = Tzork.theRepo.profiles.length - 1;
				Tzork.theClock.loadActiveProfile();
				Tzork.theRepo.store();
				buildProfilesMenu();
			})
		});
	}

	export function buildProfilesMenu() {
		var pl = document.getElementById('profiles-dropdown-proflist');
		pl.innerHTML = ''; // empty

		var entries = [];
		_.each(Tzork.theRepo.profiles, (profile: Data.Profile, key: number) => {
			entries.push({k: key, n: profile.title});
		});

		entries.sort((a, b)=> {
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
