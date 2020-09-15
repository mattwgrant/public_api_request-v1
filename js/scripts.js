const gallery = document.getElementById('gallery');
// const cardDiv = document.querySelectorAll('.card');
let userData = [];
const url = 'https://randomuser.me/api/?nat=us&results=12';
let modals = [];
let cards = [];
// let modalDiv = document.querySelectorAll('.')

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
	const userInfo = userData[0].results;
	for ( let i = 0; i < userInfo.length; i++ ) {	
		let card = `
		<div class="card">
			<div class="card-img-container">
				<img class="card-img" src="${userInfo[i].picture.thumbnail}" alt="profile picture">
			</div>
			<div class=card-info-container>
				<h3 id="name" class="card-name cap">${userInfo[i].name.first} ${userInfo[i].name.last}</h3>
				<p class="card-text">${userInfo[i].email}</p>
				<p class="card-text cap">${userInfo[i].location.city}, ${userInfo[i].location.state}</p>
			</div>
		</div>
		`
		


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

	    // card[i].addEventListener('click', (e) => {
	    // 	gallery.innerHTML = e.target.modal;
	    // })

		gallery.insertAdjacentHTML('beforeend', card);
		cards.push(card);
	    modals.push(modal);

	    card[i].onclick = function() {displaymodals()};

	    function displayModals() {
	    	gallery.innerHTML = modal.indexOf(card[i]);
	    }
	    console.log(card);
	    console.log(modal);
	}
}





/*
 * Click events to create and openthe modals
 */

// gallery.addEventListener('click', (e) => {
 	
// 	if ( e.target && e.target.className !== 'gallery') {
// 		gallery.insertAdjacentHTML('beforeend', modals)
// 	} else {
// 		console.log('Not right!');
// 	}
//  });

// document.querySelector('modals')[11].addEventListener('click', (e) => {
 	
//  	if ( e.target == 'BUTTON' ) {
//  		console.log('It\'s a button!')
//  	} else {
//  		console.log('this sucks')
//  	}
//  });

