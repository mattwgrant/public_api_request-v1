<h3 id="name" class="modal-name cap">${userInfo[i].name.first} ${userInfo[i].name.last}</h3>
	                <p class="modal-text">${userInfo[i].email}</p>
	                <p class="modal-text cap">${userInfo[i].location.city}</p>
	                <hr>
	                <p class="modal-text">${userInfo[i].cell}</p>
	                <p class="modal-text">${userInfo[i].location.street.number} ${userInfo[i].location.street.name}, ${userInfo[i].location.city}, ${userInfo[i].location.state} ${userInfo[i].location.postcode}</p>
	                <p class="modal-text">Birthday: ${userInfo[i].dob.date.substring(0,10)}</p>


	                (/(\d{4})(\d{2})(\d{2})/, '$2$3$1')
	                (/-/g, '')




