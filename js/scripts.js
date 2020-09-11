const button = document.querySelector('h1');
const body = document.querySelector('body');

button.addEventListener('click', () => {
	if ( body.style.backgroundColor !== 'red' ) {
		body.style.backgroundColor = 'red';
	} else {
		body.style.backgroundColor = 'rgba(235, 235, 235, 0.9)';
	}
})