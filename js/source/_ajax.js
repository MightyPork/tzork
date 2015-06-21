function callAjax(url, success, failure) {
	var request = new XMLHttpRequest();
	request.open('GET', url, true);

	request.onreadystatechange = function () {
		if (request.readyState == 4) {
			if (request.status >= 200 && request.status < 400) {
				if (typeof success == 'function')
					success(request.responseText);
			} else {
				// We reached our target server, but it returned an error
				if (typeof failure == 'function')
					failure(xhr.status)
			}
		}
	};

	request.onError = function () {
		// There was a connection error of some sort
		if (typeof failure == 'function')
			failure(-1);
	};

	console.log('request sent');

	request.send();
}
