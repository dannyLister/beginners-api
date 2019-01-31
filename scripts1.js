// start with this to send the initial request for data

// create a request variable and assign a new XMLHttpRequest to it.
let request = new XMLHttpRequest(); // can also use 'FETCH' instead of SMLHttpRequest();
//  which is simpler
// but does not have as much browser support

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuappcom/films', true);

request.onload = function() {
	// begin accessing json data here
};

// send request
request.send();
