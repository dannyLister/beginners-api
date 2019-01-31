// add to scripts 2 to handle an error, if it happens on your json data.

let data = JSON.parse(this.response);

if (request.status >= 200 && request.status < 400) {
	//!=200 would be better
	data.forEach((movie) => {
		console.log(movie.title);
	});
} else {
	console.log('error');
}
