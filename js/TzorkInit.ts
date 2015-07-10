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
	}


	export function init(repo: Repository, conf: ConfigProvider) {
		theRepo = repo;
		theConfig = conf;

		_initMenu();
		_initClock();

		Utils.fixTextareaTabKey();
	}
}
