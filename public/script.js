async function main() {
	const res = await fetch('./jokes.json');
	const jokes = await res.json();
	const i = Math.floor(Math.random() * jokes.length);
	const { lines } = jokes[i];
	const el = document.querySelector('#joke');
	el.innerHTML = lines.map(line => line.replace(/\*\*Q:\*\*/g, '').replace(/\*\*A:\*\*/g, '')).join('<p>');
	document.querySelector('h1').innerText = 'Joke #' + i;
}

main();

