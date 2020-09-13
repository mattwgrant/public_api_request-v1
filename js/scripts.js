const gallery = document.getElementById('gallery');
const cards = document.querySelectorAll('.card');
const userData = [];
const url = 'https://randomuser.me/api/?nat=us&results=12';
/*
 * Calls API to pull data from 12 random users
 */
fetch(url, {mode: 'cors'})
	.then(res => res.json())
	.then(data => {
		const users = data;
		userData.push(users);
		generateCards(users);
		// generateModals(users);
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

	// const users = data.map(user => 
	const userInfo = userData[0].results;
 	for ( let i = 0; i < userInfo.length; i++ ) {	
		
		const modal = `<div class="modal-container">
	        <div class="modal">
	            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
	            <div class="modal-info-container">
	                <img class="modal-img" src="${userInfo[i].picture.large}" alt="profile picture">
	                <h3 id="name" class="modal-name cap">${userInfo[i].name.first} ${userInfo[i].name.last}</h3>
	                <p class="modal-text">${userInfo[i].email}</p>
	                <p class="modal-text cap">${userInfo[i].location.city}</p>
	                <hr>
	                <p class="modal-text">${userInfo[i].cell}</p>
	                <p class="modal-text">${userInfo[i].location.street.number} ${userInfo[i].location.street.name}, ${userInfo[i].location.city}, ${userInfo[i].location.state} ${userInfo[i].location.postcode}</p>
	                <p class="modal-text">Birthday: ${userInfo[i].dob.date.substring(0,10)}</p>
	            </div>
	        </div>
	    </div>`
	
		console.log(modal)
	}
}


/*
 * Click events to open/close the modal
 */
gallery.addEventListener('click', (e) => {
 	
 		if ( e.target && e.target.className !== 'gallery') {
			// generateModals(userData);
			// console.log('hi');
			// using console.log to just test that the click was working
			// console.log(userData[0].results[i]);
			generateModals(userData)
 		} 
 		
 });

// document.querySelectorAll('.modal-container').addEventListener('click', (e) => {
//  	// const modal = document.querySelectorAll('.modal-container');
//  	if ( e.target.nodeName = 'BUTTON' ) {
//  		modal.style.display = 'none';
//  	}
//  });

