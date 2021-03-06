const gallery = document.getElementById('gallery');
let userData = [];
const url = 'https://randomuser.me/api/?nat=us&results=12';
let modals = [];
let cards = [];


/*********************
	FETCH CALL
*********************/

/*
 * Calls API to pull data from 12 random users
 */
fetch(url, {mode: 'cors'})
	.then(res => res.json())
	.then(data => {
		const users = data;
		userData.push(users);
		generateCardsModals(users);
		generateModals(users);
		// console.log(users);
		})
	.catch(error => console.log('There was an error with your request:', error))



/*********************
   HELPER FUNCTIONS
*********************/

/*
 * Creates user cards
 */

function generateCardsModals(data) {

	const userInfo = userData[0].results;

	for ( let i = 0; i < userInfo.length; i++ ) {	
		let card = `
		<div class="card">
			<div class="card-img-container">
				<img class="card-img" src="${userInfo[i].picture.thumbnail}" alt="profile picture">
			</div>
			<div class="card-info-container">
				<h3 id="name" class="card-name cap">${userInfo[i].name.first} ${userInfo[i].name.last}</h3>
				<p class="card-text">${userInfo[i].email}</p>
				<p class="card-text cap">${userInfo[i].location.city}, ${userInfo[i].location.state}</p>
			</div>
		</div>
		`
		cards.push(card);
		
		
		gallery.insertAdjacentHTML('beforeend', card);
		
	}
}
	
/*
 * Creates user modals
 */

function generateModals(data) {
	const userInfo = userData[0].results;

	for ( let i = 0; i < userInfo.length; i++ ) {	
		const birthday = userInfo[i].dob.date;
		const day = birthday.slice(8,10);
		const month = birthday.slice(5, 7);
		const year = birthday.slice(0,4);

		let modal = `<div class="modal-container">
	        <div class="modal">
	            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
	            <div class="modal-info-container">
	                <img class="modal-img" src="${userInfo[i].picture.large}" alt="profile picture">
	                <h3 id="name" class="modal-name cap">${userInfo[i].name.first} ${userInfo[i].name.last}</h3>
	                <p class="modal-text">${userInfo[i].email}</p>
	                <p class="modal-text cap">${userInfo[i].location.city}</p>
	                <hr>
	                <p class="modal-text">${userInfo[i].cell.replace('-', ' ')}</p>
	                <p class="modal-text">${userInfo[i].location.street.number} ${userInfo[i].location.street.name}, ${userInfo[i].location.city}, ${userInfo[i].location.state} ${userInfo[i].location.postcode}</p>
	                <p class="modal-text">Birthday: ${month}/${day}/${year}</p>
	            </div>
	        </div>
	    </div>`
	    modals.push(modal);
	 }
}


/*********************
	EVENT LISTENERS
*********************/

/*
 * Click event to open the modals
 */

gallery.addEventListener('click', (e) => {
 	const cards = document.querySelectorAll('.card');

		if ( e.target.className === 'card' || e.target.className === 'card-img-container' || e.target.className === 'card-img' || e.target.className === 'card-info-container' || e.target.className === 'card-name' || e.target.className === 'card-text' || e.target.className === 'card-name cap' || e.target.className === 'card-text cap') {
			let cardIndex = 0;
			for (let i = 0; i < cards.length; i++) {
				if (e.composedPath().includes(cards[i])) {
					cardIndex = i;
				}
			}
			gallery.insertAdjacentHTML('afterbegin', modals[cardIndex]);
		} 
});

/*
 * Click event to close the modals
 */

gallery.addEventListener('click', (e) => {
	const button = document.querySelector('.modal-close-btn');
	const modalContainer = document.querySelector('.modal-container')
	const x = document.querySelector('strong');
 	if (e.target === button) {
 		// const modal = document.querySelector('modal-container');
 		// modal.style.display = 'none';
 		e.target.parentNode.parentNode.parentNode.removeChild(modalContainer);
 	} else if ( e.target === modalContainer) {
 		e.target.parentNode.removeChild(e.target);
 	} else if ( e.target === x ) {
 		e.target.parentNode.parentNode.parentNode.parentNode.removeChild(modalContainer);
 	}
 
 });