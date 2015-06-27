/// <reference path="TzorkData.ts" />
/// <reference path="TzorkClock.ts" />
/// <reference path="TzorkSetup.ts" />
/// <reference path="Utils.ts" />


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

        Utils.fixTextareaTabKey();

        var resizeClock = function () {

            var w = window.innerWidth;
            var h = window.innerHeight;

            // subtract expected size of labels (?) a guess

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
    }
}
