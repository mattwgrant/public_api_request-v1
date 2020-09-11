const gallery = document.getElementById('gallery');

/*
 * Calls API to pull data from 12 random users
 */
fetch('https://randomuser.me/api/?results=12')
	.then(res => res.json())
	.then(data => {
		const users = data;
		generateCards(users);
		// generateModals(users);
		})
	// .then(data => console.log(data))



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
	gallery.innerHTML = employees;
}

/* 
 * Generates HTML and content for the modals
 */
// function generateModals(data) {
// 	const users = data.results.map(user => `
// 		<div class="modal-container">
// 	        <div class="modal">
// 	            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
// 	            <div class="modal-info-container">
// 	                <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
// 	                <h3 id="name" class="modal-name cap">${user.name.first} ${user.name.last}</h3>
// 	                <p class="modal-text">${user.email}</p>
// 	                <p class="modal-text cap">${user.location.city}</p>
// 	                <hr>
// 	                <p class="modal-text">(555) 555-5555</p>
// 	                <p class="modal-text">${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state} ${user.location.postcode}</p>
// 	                <p class="modal-text">Birthday: ${user.dob.date}.substring('T')</p>
// 	            </div>
// 	        </div>
// 	    </div>
// 	`)

// }


/*
 * Click events to open/close the modal
 */

