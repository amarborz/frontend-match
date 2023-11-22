async function getTalentmanagerById(talentmanagerId) {
	try {
		let response = await fetch(
			`${backendPath}api/talentmanager/${talentmanagerId}`
		)
		let talentmanager = await response.json()
		return talentmanager
	} catch (error) {
		displayTalentmanagerNotFound()
		console.error('Error fetching data:', error)
	}
}

async function getOpdrachtVanTalentmanagerById(talentmanagerId, opdrachtId) {
	try {
		let response = await fetch(
			`${backendPath}api/talentmanager/${talentmanagerId}/trainee-status`
		)
		let opdrachten = await response.json()
		for (let opdracht of opdrachten) {
			if (opdracht.opdrachtId == opdrachtId) {
				displayOpdrachtVanTalentmanagerInfo(opdracht)
			}
		}
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}

async function postTalentmanager(talentmanager) {
	try {
		await fetch(`${backendPath}api/talentmanager`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(talentmanager),
		})
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}

function displayTalentmanagerInfo(talentmanager) {
	var talentmanagerInfoDiv = document.getElementById('talentmanagerInfo')
	talentmanagerInfoDiv.innerHTML = `
        <h3>${talentmanager.naam}</h3>
        <p><strong>Wachtwoord:</strong> ${talentmanager.wachtwoord}</p>
        <p><strong>E-mail:</strong> ${talentmanager.email}</p>
        <p><strong>Foto:</strong> ${talentmanager.foto}</p>
        <p><strong>Telefoon:</strong> ${talentmanager.telefoon}</p>
    `
}

function displayOpdrachtVanTalentmanagerInfo(opdracht) {
	let opdrachtVanOpdrachtgeverInfoDiv = document.getElementById(
		'opdrachtVanTalentmanagerInfo'
	)
	console.log("opdracht", opdracht)
	console.log("foto", opdracht.foto)
	opdrachtVanOpdrachtgeverInfoDiv.innerHTML = `
    <div class="row">
        <div class="col-md-6">
            <h3 class="text-primary">${opdracht.naam}</h3>
			<p class="card-text"><strong>Titel Vacature:</strong> ${opdracht.titel}</p>
			<p class="card-text"><strong>Werkgever: </strong>${opdracht.opdrachtgeverNaam}</p>
			<p class="card-text"><strong>Richting:</strong> ${opdracht.richting}</p>
            <p class="card-text"><strong>Status:</strong> ${opdracht.status}</p>
            <p class="card-text"><strong>E-mail:</strong> ${opdracht.email}</p>
            <p class="card-text"><strong>Telefoon:</strong> ${opdracht.telefoon}</p>
        </div>
        <div class="col-md-6">
            <img src="../img/${opdracht.foto}" class="img-fluid">
        </div>
    </div>
        `
}


function displayTalentmanagerNotFound() {
	var talentmanagerInfoDiv = document.getElementById('talentmanagerInfo')
	talentmanagerInfoDiv.innerHTML = '<p>Talentmanager not found.</p>'
}

async function updateTalentmanager(talentId, updatedData) {
	try {
		const response = await fetch(
			`${backendPath}api/talentmanager/${talentId}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(updatedData),
			}
		)

		if (response.ok) {
			const updatedTrainee = await response.json()
		} else {
			// Handle errors or display a message if needed
			console.error('Error updating trainee data:', response.status)
		}
	} catch (error) {
		console.error('Error updating trainee data:', error)
	}
}

function dummyTalentmanager() {
	let talentmanager = {
		// placeholder data
		naam: 'Jan',
		wachtwoord: 'abc123',
		email: 'Jan@youngcapital.nl',
		foto: 'foto',
		telefoon: '+31612345678',
	}
	return talentmanager
}
