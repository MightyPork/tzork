/// <reference path="TzorkData.ts" />
/// <reference path="TzorkClock.ts" />
/// <reference path="TzorkSetup.ts" />
/// <reference path="Utils.ts" />
/// <reference path="typing/jquery.d.ts" />
/// <reference path="TzorkSetupGUI.ts" />


module Tzork {
	export var theClock: Clock;
	export var theRepo: Repository;
	export var theConfig: ConfigProvider;

	function _initMenu() {
		Utils.hoverMenu('#menu-btn-profiles', '#profiles-dropdown');

		document.getElementById('menu-btn-edit').addEventListener('click', () => {
			TzorkSetupGUI.openDialog();
		});

		TzorkSetupGUI.buildProfilesMenu();

		var b = document.getElementById('btn-new-profile');
		b.addEventListener('click', (e) => {
			var name = prompt('New profile name?', 'New Profile');

			if (name == null) {
				// Canceled
				return;
			}

			var prof = createEmptyProfile();
			prof.title = name;

			Tzork.theRepo.profiles.push(prof);

			Tzork.theRepo.parse(()=> {
				Tzork.theRepo.activeProfile = Tzork.theRepo.profiles.length-1;
				Tzork.theClock.loadActiveProfile();
				Tzork.theRepo.store();
				TzorkSetupGUI.buildProfilesMenu();
			})
		});
	}


	function _initClock() {
		theClock = new Clock();
	}


	export function init(repo: Repository, conf: ConfigProvider) {
		theRepo = repo;
		theConfig = conf;

		_initMenu();
		_initClock();
		TzorkSetupGUI.init();

		Utils.fixTextareaTabKey();
	}
}
