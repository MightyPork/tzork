/// <reference path="TzorkData.ts" />
/// <reference path="TzorkClock.ts" />
/// <reference path="TzorkSetup.ts" />
/// <reference path="Utils.ts" />
/// <reference path="typing/jquery.d.ts" />


module Tzork {
	export var theClock: Clock;
	export var theRepo: Repository;
	export var theConfig: ConfigProvider;

	function _initMenu() {
		Utils.hoverMenu('#menu-btn-profiles', '#profiles-dropdown');

		document.getElementById('menu-btn-edit').addEventListener('click', () => {
			TzorkSetup.openSetupDialog();
		});

		TzorkSetup.buildProfilesMenu();
	}


	function _initClock() {
		theClock = new Clock();

		var resizeClock = function () {
			var w = window.innerWidth;
			var h = window.innerHeight;

			// subtract expected size of labels (?) (a guess)

			if (w < 450) {
				w -= 135 * 2;
				h -= 30 * 2;
			} else if (w < 750) {
				w -= 160 * 2;
				h -= 40 * 2;
			} else {
				w -= 180 * 2;
				h -= 60 * 2;
			}

			var s = Math.min(w, h);
			Tzork.theClock.setDiskSize(s);
		};

		window.onresize = resizeClock;
		resizeClock();

		theClock.loadActiveProfile();
	}


	export function init(repo: Repository, conf: ConfigProvider) {
		theRepo = repo;
		theConfig = conf;

		_initMenu();
		_initClock();

		Utils.fixTextareaTabKey();
	}
}
