const fs = require('fs');
const readme = fs.readFileSync('./readme.md', 'utf8');

const data = readme
	.split('---')
	.map(block => (
	  {
		  lines: block.split('\n').filter(Boolean)
	  }
	));

const json = JSON.stringify(data);
fs.writeFileSync('./public/jokes.json', json);

