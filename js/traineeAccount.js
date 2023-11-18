let traineeId = localStorage.getItem("id");

document.addEventListener("DOMContentLoaded", async function () {
	try {
		const trainee = await getTraineeById(traineeId)
		populateFields(trainee)
	} catch (error) {
		console.error('Error fetching trainee data:', error)
	}
})

function populateFields(trainee) {
	// Display trainee info
	document.getElementById("nameInput").value = trainee.naam;
	document.getElementById("wachtwoordInput").value = trainee.wachtwoord;
	document.getElementById("emailInput").value = trainee.email;
	document.getElementById("telefoonnummerInput").value = trainee.telefoon;
	document.getElementById("uitstroomDropdown").value = trainee.richting;
	document.getElementById("motivatieInput").value = trainee.motivatie;
	document.getElementById("bioInput").value = trainee.bio;
	document.getElementById("woonplaatsInput").value = trainee.woonplaats;
	document.getElementById("fotoInput").src = trainee.foto;
	document.getElementById("cvInput").value = trainee.cv;
}

function putTrainee() {
	let updatedTrainee = {
		naam: document.getElementById("nameInput").value,
		wachtwoord: document.getElementById("wachtwoordInput").value,
		email: document.getElementById("emailInput").value,
		telefoon: document.getElementById("telefoonnummerInput").value,
		richting: document.getElementById("uitstroomDropdown").value,
		motivatie: document.getElementById("motivatieInput").value,
		bio: document.getElementById("bioInput").value,
		woonplaats: document.getElementById("woonplaatsInput").value,
		cv: document.getElementById("cvInput").value,
	};
	// foto: document.getElementById("fotoInput").src

	// Update the trainee
	try {
		updateTrainee(traineeId, updatedTrainee);
	} catch (error) {
		console.error(`Error updating`, error);
	}
}
