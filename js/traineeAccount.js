let traineeId = localStorage.getItem("id");

document.addEventListener("DOMContentLoaded", async function () {
	try {
		const trainee = await getTraineeById(traineeId);
		populateFields(trainee);
	} catch (error) {
		console.error("Error fetching trainee data:", error);
	}
});

function populateFields(trainee) {
	// Display trainee info
	document.getElementById("nameInput").value = trainee.naam;
	document.getElementById("emailInput").value = trainee.email;
	document.getElementById("telefoonnummerInput").value = trainee.telefoon;

	// Check if trainee.richting is empty
	if (!trainee.richting == "") {
		// If not empty, set the dropdown to the trainee.richting value
		document.getElementById("uitstroomDropdown").value = trainee.richting;
	}

	document.getElementById("motivatieInput").value = trainee.motivatie;
	document.getElementById("bioInput").value = trainee.bio;
	document.getElementById("woonplaatsInput").value = trainee.woonplaats;
	document.getElementById("fotoInput").src = trainee.foto;
	document.getElementById("cvInput").value = trainee.cv;

	if (!!trainee.foto) {
		document.getElementById("fotoInput").onclick = function() {
			document.getElementById("show-profile-image").src = trainee.foto;
		}
	}

	if (!!trainee.talentmanagerDTO) {
		document.getElementById("profile-talentmanager-found").classList.remove('d-none');
		document.getElementById("profile-talentmanager-none").classList.add('d-none');

		document.getElementById("profile-talentmanager-name").innerText = trainee.talentmanagerDTO.naam;
		document.getElementById("profile-talentmanager-email").innerText = trainee.talentmanagerDTO.email;
		document.getElementById("profile-talentmanager-telephone").innerText = trainee.talentmanagerDTO.telefoon;

		if (!!trainee.talentmanagerDTO.foto) {
			document.getElementById("profile-talentmanager-photo").src = trainee.talentmanagerDTO.foto;
			document.getElementById("profile-talentmanager-photo").classList.remove('d-none')

			document.getElementById("profile-talentmanager-photo").onclick = function() {
				document.getElementById("show-profile-image").src = trainee.talentmanagerDTO.foto;
			}
		} else {
			document.getElementById("profile-talentmanager-photo").src = null;
			document.getElementById("profile-talentmanager-photo").classList.add('d-none')

			document.getElementById("profile-talentmanager-photo").click = function() {}
		}
	} else {
		document.getElementById("profile-talentmanager-found").classList.add('d-none');
		document.getElementById("profile-talentmanager-none").classList.remove('d-none');
	}
}

function putTrainee() {
	let updatedTrainee = {
		naam: document.getElementById("nameInput").value,
		email: document.getElementById("emailInput").value,
		telefoon: document.getElementById("telefoonnummerInput").value,
		richting: document.getElementById("uitstroomDropdown").value,
		motivatie: document.getElementById("motivatieInput").value,
		bio: document.getElementById("bioInput").value,
		woonplaats: document.getElementById("woonplaatsInput").value,
		cv: document.getElementById("cvInput").value,
		foto: document.getElementById("fotoInput").src,
	};

	// Update the trainee
	try {
		updateTrainee(traineeId, updatedTrainee);
	} catch (error) {
		console.error(`Error updating`, error);
	}
}
