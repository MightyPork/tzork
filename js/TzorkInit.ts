/// <reference path="TzorkData.ts" />
/// <reference path="TzorkClock.ts" />
/// <reference path="TzorkSetup.ts" />

module Tzork {
    export var theClock: Clock;
    export var theRepo: Repository;

    export function init(repo: Repository) {
        theRepo = repo;

        theClock = new Clock();
        theClock.loadActiveProfile();

        document.getElementById('setup_btn').onclick = TzorkSetup.openSetupDialog;
    }
}
