async function getOpdrachtgeverById() {
	var opdrachtgeverId = document.getElementById('opdrachtgeverId').value
	try {
		let response = await fetch(
			`https://yc2310-match-backend.azurewebsites.net/api/opdrachtgever/${opdrachtgeverId}`
		)
		let opdrachtgever = await response.json()
		displayOpdrachtgeverInfo(opdrachtgever)
	} catch (error) {
		displayOpdrachtgeverNotFound()
		console.error('Error fetching data:', error)
	}
}

async function postOpdrachtgever(opdrachtgever) {
	try {
		await fetch(
			`https://yc2310-match-backend.azurewebsites.net/api/opdrachtgever`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(opdrachtgever),
			}
		)
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

function displayOpdrachtgeverNotFound() {
	var opdrachtgeverInfoDiv = document.getElementById('opdrachtgeverInfo')
	opdrachtgeverInfoDiv.innerHTML = '<p>Opdrachtgever not found.</p>'
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
