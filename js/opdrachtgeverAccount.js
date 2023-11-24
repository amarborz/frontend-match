let opdrachtgeverId = localStorage.getItem("id");

document.addEventListener("DOMContentLoaded", async function () {
	try {
		const opdrachtgever = await getOpdrachtgeverById(opdrachtgeverId);
		populateFields(opdrachtgever);
	} catch (error) {
		console.error("Error fetching opdrachtgever data:", error);
	}
});

function populateFields(opdrachtgever) {
	// Display opdrachtgever info
	document.getElementById("nameInput").value = opdrachtgever.naam;
	document.getElementById("emailInput").value = opdrachtgever.email;
	document.getElementById("telefoonnummerInput").value = opdrachtgever.telefoon;
	document.getElementById("omschrijvingInput").value =
		opdrachtgever.omschrijving;
	// document.getElementById('woonplaatsInput').value = opdrachtgever.woonplaats
	// document.getElementById('fotoInput').src = opdrachtgever.foto
}

function putTrainee() {
	let updatedOpdrachtgever = {
		naam: document.getElementById("nameInput").value,
		email: document.getElementById("emailInput").value,
		telefoon: document.getElementById("telefoonnummerInput").value,
		omschrijving: document.getElementById("omschrijvingInput").value,
		foto: document.getElementById("fotoInput").src,
	};

	// Update the trainee
	try {
		updateOpdrachtgever(opdrachtgeverId, updatedOpdrachtgever);
	} catch (error) {
		console.error(`Error updating`, error);
	}

	showAlert();
}
