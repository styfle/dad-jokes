let jokes = [];
let index = 0;

async function init() {
	const res = await fetch('./jokes.json');
	jokes = await res.json();
	setJoke();
}

function setJoke(i = Math.floor(Math.random() * jokes.length))
	index = i;
	const { lines } = jokes[i];
	const el = document.querySelector('#joke');
	el.innerHTML = lines.map(line => line.replace(/\*\*Q:\*\*/g, '').replace(/\*\*A:\*\*/g, '')).join('<p>');
	document.querySelector('h1').innerText = 'Joke #' + i;
}


document.querySelector('#prev').onclick = () => setJoke(index - 1);
document.querySelector('#random').onclick = () => setJoke();
document.querySelector('#next').onclick = () => setJoke(index + 1);

init();
