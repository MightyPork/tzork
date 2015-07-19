/// <reference path="Data.ts" />
/// <reference path="TzorkInit.ts" />

module Tzork {
	export function main(): void {
		var repo = new Data.LocalRepository();
		var conf = new Data.LocalConfigProvider();

		repo.load(() => {
			Tzork.init(repo, conf);
		});
	}
}

