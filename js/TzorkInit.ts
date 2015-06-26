/// <reference path="TzorkData.ts" />
/// <reference path="TzorkClock.ts" />
/// <reference path="TzorkSetup.ts" />

module Tzork {
    export var theClock: Clock;
    export var theRepo: Repository;
    export var theConfig: ConfigProvider;

    export function init(repo: Repository, conf: ConfigProvider) {
        theRepo = repo;
        theConfig = conf;

        theClock = new Clock();
        theClock.loadActiveProfile();

        document.getElementById('setup_btn').onclick = TzorkSetup.openSetupDialog;
    }
}
