// response is in json format, needs to be translated into javascript objects,
// so we can work with it

// parse; resolve into component parts

// the below is inserted into scripts1 where it states 'begin accessing json data here'

// the data i requested is json. parse the data received in this response
let data = JSON.parse(this.response);

// show each movie title on the console to prove connection is working
data.forEach((movie) => {
	console.log(movie.title);
});
