/// <reference path="TzorkData.ts" />
/// <reference path="typing/underscore.d.ts" />

module TzorkSetupGUI {
	export function init() {
		$('#menu-btn-edit2').on('click', function() {
			openDialog();
		});
	}

	function openDialog() {
		// Clear error text
		//document.getElementById('people_error').textContent = '';

		// Populate the textarea
		//var ta = <HTMLTextAreaElement> document.getElementById('people_json');

		//ta.value = JSON.stringify(Tzork.stripProfile(Tzork.theRepo.getActiveProfile()), null, '\t');

		var modal = document.getElementById('setup_dialog2');
		modal.style.display = 'block';

		setTimeout(function () {
			modal.style.opacity = "1";
		}, 1);
	}

	export function closeDialog() {
		// Hide modal
		var modal = document.getElementById('setup_dialog2');
		modal.style.opacity = "0";
		setTimeout(function () {
			modal.style.display = 'none';
		}, 500);
	}
}
