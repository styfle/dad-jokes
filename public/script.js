async function fetchJokes() {
    const res = await fetch('./jokes.json');
    return res.json();
}

async function main() {
    const jokes = await fetchJokes();
    const i = Math.floor(Math.random() * 100);
    const { lines } = jokes[i];
    const el = document.querySelector('#joke');
    el.innerHTML = lines.map(line => line.replace(/\*\*Q:\*\*/g, '').replace(/\*\*A:\*\*/g, '')).join('<p>');
    document.querySelector('h1').innerText = 'Joke #' + i;
}

main()
