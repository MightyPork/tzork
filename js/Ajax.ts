module Ajax {
    /** Send a GET request and retrieve string */
    export function get(url:string, success?:(string)=>void, failure?:(number)=>void): void {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 400) {
                    if (typeof success == 'function')
                        success(xhr.responseText);
                } else {
                    // We reached our target server, but it returned an error
                    if (typeof failure == 'function')
                        failure(xhr.status)
                }
            }
        };

        xhr.onerror = function () {
            // There was a connection error of some sort
            if (typeof failure == 'function')
                failure(-1);
        };

        xhr.send();
    }
}

