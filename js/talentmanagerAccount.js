let talentId = localStorage.getItem("id");

document.addEventListener("DOMContentLoaded", async function () {
	try {
		const talentmanager = await getTalentmanagerById(talentId);
		populateFields(talentmanager);
	} catch (error) {
		console.error("Error fetching opdrachtgever data:", error);
	}
});

function populateFields(talentmanager) {
	// Display opdrachtgever info
	document.getElementById("nameInput").value = talentmanager.naam;
	document.getElementById("emailInput").value = talentmanager.email;
	document.getElementById("telefoonnummerInput").value = talentmanager.telefoon;
	// document.getElementById('omschrijvingInput').value =
	// 	opdrachtgever.omschrijving
	// document.getElementById('woonplaatsInput').value = opdrachtgever.woonplaats
	// document.getElementById('fotoInput').src = opdrachtgever.foto
}

function putTalentmanager() {
	let updatedTalentmanager = {
		naam: document.getElementById("nameInput").value,
		email: document.getElementById("emailInput").value,
		telefoon: document.getElementById("telefoonnummerInput").value,
		foto: document.getElementById("fotoInput").src,
	};

	// Update the trainee
	try {
		updateTalentmanager(talentId, updatedTalentmanager);
	} catch (error) {
		console.error(`Error updating`, error);
	}

	showAlert();
}
