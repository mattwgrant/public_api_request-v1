const gallery = document.getElementById('gallery');
const cards = document.querySelectorAll('.card');
// const cardsArr = Array.from(cards);
// const modal = document.querySelectorAll('.modal');
const url = 'https://randomuser.me/api/?nat=us&results=12';
/*
 * Calls API to pull data from 12 random users
 */
fetch(url)
	.then(res => res.json())
	.then(data => {
		const users = data;
		generateCards(users);
		generateModals(users);
		// console.log(users);
		})
	.catch(error => console.log('There was an error with your request:', error))



/*
 * Creates HTML to display as card for each user
 */
function generateCards(data) {
	const employees = data.results.map(employee => `
		<div class="card">
			<div class="card-img-container">
				<img class="card-img" src="${employee.picture.thumbnail}" alt="profile picture">
			</div>
			<div class=card-info-container>
				<h3 id="name" class="card-name cap">${employee.name.first} ${employee.name.last}</h3>
				<p class="card-text">${employee.email}</p>
				<p class="card-text cap">${employee.location.city}, ${employee.location.state}</p>
			</div>
		</div>
		`).join('')
	gallery.insertAdjacentHTML('beforeend', employees);
}

/* 
 * Generates HTML and content for the modals
 */
function generateModals(data) {

	const users = data.results.map(user => `
		<div class="modal-container">
	        <div class="modal">
	            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
	            <div class="modal-info-container">
	                <img class="modal-img" src="${user.picture.large}" alt="profile picture">
	                <h3 id="name" class="modal-name cap">${user.name.first} ${user.name.last}</h3>
	                <p class="modal-text">${user.email}</p>
	                <p class="modal-text cap">${user.location.city}</p>
	                <hr>
	                <p class="modal-text">${user.cell}</p>
	                <p class="modal-text">${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state} ${user.location.postcode}</p>
	                <p class="modal-text">Birthday: ${user.dob.date.substring(0,10)}</p>
	            </div>
	        </div>
	    </div>
	`).join('')
	gallery.insertAdjacentHTML('beforeend', users)
}


/*
 * Click events to open/close the modal
 */
gallery.addEventListener('click', (e) => {
 	
 	// for ( let i = 0; i < cardsArr.length; i++ ) {
 		if ( e.target && e.target.className !== 'gallery') {
			// generateModals(e.target);
			console.log('hi');
			// using console.log to just test that the click was working
 		} 
 	// }	
 });

document.querySelectorAll('.modal-container').addEventListener('click', (e) => {
 	// const modal = document.querySelectorAll('.modal-container');
 	if ( e.target.nodeName = 'BUTTON' ) {
 		modal.style.display = 'none';
 	}
 });

