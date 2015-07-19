/// <reference path="Data.ts" />
/// <reference path="typing/underscore.d.ts" />
/// <reference path="Menu.ts" />
/// <reference path="typing/jquery.d.ts" />


module Tzork.ProfileEditor {
	var editedProfileJSON;
	var jsonSubmitBtnsEnabled = false;
	var activeTab; // tab name

	export function init() {
		// dialog open button
		$('#menu-btn-edit').on('click', openDialog);

		// Tab switching
		$('.DialogGui .Tab').on('click', function () {
			$('.DialogGui .Pane.content').addClass('gone');
			$('.DialogGui .Tab').removeClass('active');
			var act = $(this).data('action');
			$('#pane_' + act).removeClass('gone');
			$(this).addClass('active');
			activeTab = act;
		});

		// apply changes when title field is edited
		$('#field_title').on('change paste keypress keyup keydown', function () {
			setTimeout(() => {
				editedProfileJSON.title = $(this).val();
				updateJsonDisplay();
			}, 1);
		});

		// show json submit buttons on json edit
		$('#profile_json').on('change paste keypress keyup keydown', function () {
			enableJsonSubmitButtons(true);
		});

		// bind json submit buttons
		$('#setup-json-btn-revert').on('click', revertJsonEdit);
		$('#setup-json-btn-apply').on('click', submitJsonEdit);

		// bind main buttons
		$('#prof-edit-btn-destroy').on('click', () => {submitProfileEdit('delete')});
		$('#prof-edit-btn-close').on('click', () => {submitProfileEdit('close')});
		$('#prof-edit-btn-save').on('click', () => {submitProfileEdit('save')});

		// click outside dialog to close the dialog
		$('.Modal').on('click', () => {
			submitProfileEdit('close');
		});
		$('.DialogGui').on('click', (e) => {
			e.stopImmediatePropagation();
			e.preventDefault();
		});

		// ESC to close the dialog
		$(window).on('keyup', (e) => {
			if(e.which == 27) {
				submitProfileEdit('close');
			}
		});

		openTab('json');
	}


	function openTab(which: string) {
		$('.DialogGui .Pane.content').addClass('gone');
		$('.DialogGui .Tab').removeClass('active');

		$('#pane_' + which).removeClass('gone');
		$('#tab-btn-' + which).addClass('active');
		activeTab = which;
	}


	function enableJsonSubmitButtons(yes: boolean) {
		$('#json_change_buttons').toggleClass('disabled', !yes);
		jsonSubmitBtnsEnabled = yes;
		if (!yes) {
			$('#json_error').empty();
		}
	}


	function updateJsonDisplay() {
		$('#profile_json').val(JSON.stringify(editedProfileJSON, null, '\t'));
		enableJsonSubmitButtons(false);
	}


	function updateFieldsFromJson() {
		$('#field_title').val(editedProfileJSON.title);
	}


	export function openDialog() {
		editedProfileJSON = Data.stripProfile(Tzork.theRepo.getActiveProfile());
		updateJsonDisplay();
		updateFieldsFromJson();

		$('#json_error').empty();

		// fade in
		var modal = document.getElementById('profile_edit_dialog');
		modal.style.display = 'block';
		setTimeout(function () {
			modal.style.opacity = "1";
		}, 1);
	}


	export function closeDialog() {
		// fade out
		var modal = document.getElementById('profile_edit_dialog');
		modal.style.opacity = "0";
		setTimeout(function () {
			modal.style.display = 'none';
		}, 500);
	}


	function reloadProfileAndCloseDialog() {
		Tzork.theRepo.parse(()=> {
			Tzork.theClock.loadActiveProfile();
			Tzork.theRepo.store();
			Menu.buildProfilesMenu();
			closeDialog();
		})
	}


	/** called from "onClick" */
	export function submitProfileEdit(action) {
		switch (action) {
			case 'delete':
				if (confirm('Delete current profile?')) {
					Tzork.theRepo.profiles.splice(Tzork.theRepo.activeProfile, 1);
					reloadProfileAndCloseDialog();
				}
				break;

			case 'close':
				closeDialog();
				break;

			case 'save':
				if (activeTab == 'json' && jsonSubmitBtnsEnabled) {
					if (!submitJsonEdit()) return;
				}

				Tzork.theRepo.profiles[Tzork.theRepo.activeProfile] = editedProfileJSON;
				reloadProfileAndCloseDialog();
				break;
		}
	}


	export function revertJsonEdit() {
		if (!jsonSubmitBtnsEnabled) return;
		updateJsonDisplay();
		enableJsonSubmitButtons(false);
	}


	/**
	 * Try to apply JSON from the textarea
	 *
	 * @returns {boolean} true if applied successfully
	 */
	export function submitJsonEdit() {
		if (!jsonSubmitBtnsEnabled) return;

		try {
			editedProfileJSON = JSON.parse($('#profile_json').val());
			enableJsonSubmitButtons(false);
			return true;
		} catch (e) {
			var er = document.getElementById('json_error');

			if (e.message.match(/^Unexpected token [,\]}]/g)) {
				er.textContent = 'Syntax error: trailing comma ?';
			} else if (e.message.match(/^Unexpected string/g)) {
				er.textContent = 'Syntax error: missing comma ?';
			} else {
				er.textContent = 'Syntax error: ' + e.message;
			}

			console.log('Error in user-entered JSON', e);
			return false;
		}
	}
}
