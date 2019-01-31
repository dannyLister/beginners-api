// everything works so far, but is only displayed in the console.
// this portion looks at dislaying the data on the DOM.
// https://www.digitalocean.com/community/tutorials/introduction-to-the-dom

data.forEach((movie) => {
	// create div with a card class
	const card = document.getElementById('div');
	card.setAttribute('class', 'card');

	// create a h1 element and set the context of the text to the films title
	const h1 = document.createElement('h1');
	h1.textContent = movie.title;

	// create a p and set the text content to the films description
	const p = document.createElement('p');
	movie.description = movie.description.substring(0, 300); //limits length of text to something managable
	p.textContent = `${movie.description}...`;

	// Append the cards to the container element
	container.appendChild(card);

	// each card will contain a h1 and p element
	card.appendChild('h1');
	card.appendChild('p');

	// DONT EVER USE MARQUEE IN A REAL APPLICATION ITS AWFUL...
	// otherwise this is an error msg for if there is an error loading the createElements above
	const errorMessage = document.createElement('marquee');
	errorMessage.textContent = 'Gah, its not working!!!';
	app.appendChild(errorMessage);
});
