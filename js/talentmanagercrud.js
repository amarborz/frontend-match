async function getTalentmanagerById() {
	var talentmanagerId = document.getElementById('talentmanagerId').value
	try {
		let response = await fetch(
			`${backendPath}api/talentmanager/${talentmanagerId}`
		)
		let talentmanager = await response.json()
		displayTalentmanagerInfo(talentmanager)
	} catch (error) {
		displayTalentmanagerNotFound()
		console.error('Error fetching data:', error)
	}
}

async function postTalentmanager(talentmanager) {
	try {
		await fetch(
			`${backendPath}api/talentmanager`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(talentmanager),
			}
		)
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

function displayTalentmanagerNotFound() {
	var talentmanagerInfoDiv = document.getElementById('talentmanagerInfo')
	talentmanagerInfoDiv.innerHTML = '<p>Talentmanager not found.</p>'
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
