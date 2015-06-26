/// <reference path="TzorkData.ts" />
/// <reference path="TzorkInit.ts" />
/// <reference path="TzorkSetup.ts" />


function main(): void {
    var repo = new Tzork.LocalRepository();
    var conf = new Tzork.LocalConfigProvider();

    repo.load(() => {
        Tzork.init(repo, conf);
    });
}

