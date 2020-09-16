const gallery = document.getElementById('gallery');
let cardsList = [];
const url = 'https://randomuser.me/api/?nat=us&results=12';
// let userData = [];
const modalsList = [];

/*
 * Calls API to pull data from 12 random users
 */
 // , {mode: 'cors'}
fetch(url)
	.then(status)
	.then(res => res.json())
	.then(data => {
		const users = data;
		// userData.push(users);
		generateCards(users);
		generateModals(users);
		console.log(users);
		})
	.catch(error => console.log('There was an error with your request:', error))


/*********************
	HELPERS
*********************/

/*
 * Checks the status of the promise
 */
function status(response) {
	if (response.ok) {
		return Promise.resolve(response); 
	} else {
		return Promise.reject(new Error(response.statusText));
	}
}

/*
 * Creates HTML to display as card for each user
 */
function generateCards(data) {
	const cards = data.results.map(user => `
		<div class="card">
			<div class="card-img-container">
				<img class="card-img" src="${user.picture.thumbnail}" alt="profile picture">
			</div>
			<div class=card-info-container>
				<h3 id="name" class="card-name cap">${user.name.first} ${user.name.last}</h3>
				<p class="card-text">${user.email}</p>
				<p class="card-text cap">${user.location.city}, ${user.location.state}</p>
			</div>
		</div>
		`).join('')
		cardsList.push(cards);
	gallery.insertAdjacentHTML('beforeend', cards);


}


/* 
 * Generates HTML and content for the modals
 */
function generateModals(data) {
	

	const modals = data.results.map(user => 
		// const birthday = user.results.dob.date;
		// const day = birthday.slice(8, 10);
		// const month = birthday.slice(5, 7);
		// const year = birthday.slice(0, 4);
	
		`<div class="modal-container">
	        <div class="modal">
	            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
	            <div class="modal-info-container">
	                <img class="modal-img" src="${user.picture.large}" alt="profile picture">
	                <h3 id="name" class="modal-name cap">${user.name.first} ${user.name.last}</h3>
	                <p class="modal-text">${user.email}</p>
	                <p class="modal-text cap">${user.location.city}</p>
	                <hr>
	                <p class="modal-text">${user.cell.replace('-', ' ')}</p>
	                <p class="modal-text">${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state} ${user.location.postcode}</p>
	                <p class="modal-text">Birthday: ${user.dob.date.substring(0,10).replace(/'-'/g, '/')}</p>
	            </div>
	        </div>
	    </div>`
	).join('')
	modalsList.push(modals)
	console.log(modals);
}

/*********************
	EVENT LISTENERS
*********************/

 gallery.addEventListener('click', (e) => {
	if ( e.target.className === 'gallery' ) {
		const cards = document.querySelectorAll('.card');
		let cardIndex = 0;
		for (let i = 0, j = cardsList.length; i < j; i++) {
			if (e.path.includes(cards[i])) {
				cardIndex = i;
			}
		}
		gallery.insertAdjacentHTML('afterbegin', modalsList[cardIndex]);
	}
});
