function LocalRepository() {}

LocalRepository.prototype.load = function() {

	var profiles = localStorage['profiles'];

	if (typeof profiles != 'undefined') {
		try {
			this.profiles = JSON.parse(profiles);
		} catch (e) {
			console.error('Error when parsing profiles array from localstorage', e);
		}
	} else {
		this.profiles = [];
	}

	var config = localStorage['config'];

};
