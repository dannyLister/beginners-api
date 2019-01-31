const app = document.getElementById('root'); //4

const logo = document.createElement('img'); //4
logo.src = 'logo.png'; //4

const container = document.createElement('div'); //4
container.setAttribute('class', 'container'); //4

app.appendChild(logo); //4
app.appendChild(container); //4

let request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function() {
	let data = JSON.parse(this.response);

	if (request.status >= 200 && request.status < 400) {
		data.forEach((movie) => {
			const card = document.createElement('div'); //4
			card.setAttribute('class', 'card');

			const h1 = document.createElement('h1'); //4
			h1.textContent = movie.title;

			const p = document.createElement('p'); //4
			movie.description = movie.description.substring(0, 300);
			p.textContent = `${movie.description}...`;

			container.appendChild(card);
			card.appendChild(h1);
			card.appendChild(p);
		});
	} else {
		const errorMessage = document.createElement('marquee');
		errorMessage.textContent = 'Gah, Goblins are stealing your API';
		app.appendChild(errorMessage);
	}
};

request.send();
