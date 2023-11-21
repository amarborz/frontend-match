async function getOpdrachtgeverById(opdrachtgeverId) {
	try {
		let response = await fetch(
			`${backendPath}api/opdrachtgever/${opdrachtgeverId}`
		)
		let opdrachtgever = await response.json()
		return opdrachtgever
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}

async function getOpdrachtVanOpdrachtgeverById(opdrachtgeverId, opdrachtId) {
	console.log(opdrachtgeverId)
	try {
		let response = await fetch(
			`${backendPath}api/opdrachtgever/${opdrachtgeverId}/opdrachten`
		)
		let opdrachten = await response.json()
		for (let opdracht of opdrachten) {
			if (opdracht.opdrachtId == opdrachtId) {
				displayOpdrachtVanOpdrachtgeverInfo(opdracht)
			}
		}
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}

async function postOpdrachtgever(opdrachtgever) {
	try {
		await fetch(`${backendPath}api/opdrachtgever`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(opdrachtgever),
		})
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}

function displayOpdrachtgeverInfo(opdrachtgever) {
	var opdrachtgeverInfoDiv = document.getElementById('opdrachtgeverInfo')
	opdrachtgeverInfoDiv.innerHTML = `
        <h3>${opdrachtgever.naam}</h3>
        <p><strong>Wachtwoord:</strong> ${opdrachtgever.wachtwoord}</p>
        <p><strong>E-mail:</strong> ${opdrachtgever.email}</p>
        <p><strong>Foto:</strong> ${opdrachtgever.foto}</p>
        <p><strong>Telefoon:</strong> ${opdrachtgever.telefoon}</p>
        <p><strong>Plaats:</strong> ${opdrachtgever.plaats}</p>
        <p><strong>Omschrijving:</strong> ${opdrachtgever.omschrijving}</p>
    `
}

function displayOpdrachtVanOpdrachtgeverInfo(opdracht) {
	let opdrachtVanOpdrachtgeverInfoDiv = document.getElementById(
		'opdrachtVanOpdrachtgeverInfo'
	)
	opdrachtVanOpdrachtgeverInfoDiv.innerHTML = `
    <div class="row">
        <div class="col-md-6">
            <h3 class="text-primary">${opdracht.naam}</h3>
			<p class="card-text"><strong>Titel Vacature:</strong> ${opdracht.titel}</p>
			<p class="card-text"><strong>Richting:</strong> ${opdracht.richting}</p>
            <p class="card-text"><strong>Status:</strong> ${opdracht.status}</p>
            <p class="card-text"><strong>E-mail:</strong> ${opdracht.email}</p>
            <p class="card-text"><strong>Telefoon:</strong> ${opdracht.telefoon}</p>
        </div>
        <div class="col-md-6">
            <img src="${opdracht.foto}" class="img-fluid">
        </div>
    </div>
        `
}

function displayOpdrachtgeverNotFound() {
	var opdrachtgeverInfoDiv = document.getElementById('opdrachtgeverInfo')
	opdrachtgeverInfoDiv.innerHTML = '<p>Opdrachtgever not found.</p>'
}

async function updateOpdrachtgever(opdrachtgeverId, updatedData) {
	try {
		const response = await fetch(
			`${backendPath}api/opdrachtgever/${opdrachtgeverId}`,
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

function dummyOpdrachtgever() {
	let opdrachtgever = {
		// placeholder data
		naam: 'Youngcapital',
		wachtwoord: 'abc123',
		email: 'Youngcapital@youngcapital.nl',
		foto: 'foto',
		telefoon: '+31612345678',
		plaats: 'Hoofddorp',
		omschrijving: 'Lorem Ipsum...',
	}
	return opdrachtgever
}
