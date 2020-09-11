const gallery = document.getElementById('gallery');

/*
 * Calls API to pull data from 12 random users
 */
fetch('https://randomuser.me/api/?results=12')
	.then(res => res.json())
	.then(data => {
		const users = data;
		generateCards(users);
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