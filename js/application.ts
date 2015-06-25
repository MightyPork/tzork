/// <reference path="TzorkData.ts" />
/// <reference path="TzorkInit.ts" />

function main(): void {
    var repo = new Tzork.LocalRepository();
    repo.load(function () {
        Tzork.init(repo)
    });
}

