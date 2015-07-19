/// <reference path="Data.ts" />
/// <reference path="Clock.ts" />
/// <reference path="Utils.ts" />
/// <reference path="typing/jquery.d.ts" />
/// <reference path="ProfileEditor.ts" />
/// <reference path="Menu" />


module Tzork {
	export var theClock: Tzork.Clock;
	export var theRepo: Data.Repository;
	export var theConfig: Data.ConfigProvider;

	export function init(repo: Data.Repository, conf: Data.ConfigProvider) {
		theRepo = repo;
		theConfig = conf;

		theClock = new Tzork.Clock();

		ProfileEditor.init();
		Menu.init();

		Utils.fixTextareaTabKey();
	}
}
