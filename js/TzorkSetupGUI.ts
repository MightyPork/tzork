/// <reference path="TzorkData.ts" />
/// <reference path="typing/underscore.d.ts" />

module TzorkSetupGUI {
	var editedProfileJSON;
	var jsonSubmitBtnsEnabled: boolean;

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
		});

		$('#field_title').on('change paste keypress keyup keydown', function () {
			setTimeout(()=> {
				editedProfileJSON.title = $(this).val();
				updateJsonDisplay();
			}, 1);
		});

		$('#profile_json').on('change paste keypress keyup keydown', function () {
			enableJsonSubmitButtons(true);
		});
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
		editedProfileJSON = Tzork.stripProfile(Tzork.theRepo.getActiveProfile());
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


	function applyRepoChangesAndCloseModal() {
		Tzork.theRepo.parse(()=> {
			Tzork.theClock.loadActiveProfile();
			Tzork.theRepo.store();
			buildProfilesMenu();
			closeDialog();
		})
	}


	/** called from "onClick" */
	export function submitProfileEdit(action) {
		switch (action) {
			case 'delete':
				if (confirm('Delete current profile?')) {
					Tzork.theRepo.profiles.splice(Tzork.theRepo.activeProfile, 1);
					applyRepoChangesAndCloseModal();
				}
				break;

			case 'close':
				closeDialog();
				break;

			case 'save':
				Tzork.theRepo.profiles[Tzork.theRepo.activeProfile] = editedProfileJSON;
				applyRepoChangesAndCloseModal();
				break;
		}
	}


	export function revertJsonEdit() {
		if (!jsonSubmitBtnsEnabled) return;
		updateJsonDisplay();
		enableJsonSubmitButtons(false);
	}


	export function submitJsonEdit() {
		if (!jsonSubmitBtnsEnabled) return;

		try {
			editedProfileJSON = JSON.parse($('#profile_json').val());
			enableJsonSubmitButtons(false);
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
		}
	}


	export function buildProfilesMenu() {
		var pl = document.getElementById('profiles-dropdown-proflist');
		pl.innerHTML = ''; // empty

		var entries = [];
		_.each(Tzork.theRepo.profiles, (profile: Tzork.Profile, key: number) => {
			entries.push({k: key, n: profile.title});
		});

		entries.sort((a, b)=> {
			return a.n.localeCompare(b.n);
		});

		_.each(entries, (e) => {
			var el = document.createElement('a');
			el.textContent = e.n;
			el.dataset['index'] = e.k;
			el.classList.add('icon-profile');

			el.addEventListener('click', function () {
				Tzork.theRepo.activeProfile = this.dataset['index'];
				Tzork.theRepo.store();
				Tzork.theClock.loadActiveProfile();
			});

			pl.appendChild(el);
		});
	}
}
