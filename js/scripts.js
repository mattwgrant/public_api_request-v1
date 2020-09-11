const gallery = document.getElementById('gallery');

fetch('https://randomuser.me/api/?results=12')
	.then(res => res.json())
	.then(data => console.log(data))


function generateCards(data) {
	const employees = data.map(employee => `
		<div class="card-img-container">
			<img class="card-img" src="${employee.result.picture.thumbnail}" alt="profile picture">
		</div>
		<div class=card-info-container>
			<h3 id="name" class="card-name cap">${employee.results.name.first} ${employee.results.name.last}</h3>
			<p class="card-text">${employee.results.email}</p>
			<p class="card-text cap">${employee.results.location.city}, ${employee.results.location.state}</p>
		</div>
		`)
	gallery.appendChild(employee);
}