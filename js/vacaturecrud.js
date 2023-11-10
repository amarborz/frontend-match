async function getVacatureById(id) {
	try {
		let response = await fetch(
			`https://yc2310-match-backend.azurewebsites.net/api/vacature/${id}`
		)
		let vacature = await response.json()
		displayVacatureInfo(vacature)
	} catch (error) {
		displayVacatureNotFound()
		console.error('Error fetching data:', error)
	}
}

async function postVacature(vacature) {
	try {
		await fetch(`https://yc2310-match-backend.azurewebsites.net/api/vacature`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(vacature),
		})
		console.log('success')
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}

async function deleteVacature(id) {
	try {
		await fetch(
			`https://yc2310-match-backend.azurewebsites.net/api/vacature/${id}`,
			{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)
	} catch (error) {
		console.error('Error deleting data:', error)
	}
}

function displayVacatureInfo(vacature) {
	var vacatureInfoDiv = document.getElementById('vacatureInfo')
	vacatureInfoDiv.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">${vacature.titel}</h3>
                            <p class="card-text"><strong>Plaats:</strong> ${vacature.plaats}</p>
                            <p class="card-text"><strong>Adres:</strong> ${vacature.adres}</p>
                            <p class="card-text"><strong>Omschrijving:</strong> ${vacature.omschrijving}</p>
                            <p class="card-text"><strong>Vereisten:</strong> ${vacature.vereisten}</p>
                            <p class="card-text"><strong>Uren:</strong> ${vacature.uren}</p>
                            <p class="card-text"><strong>Duur:</strong> ${vacature.duur}</p>
                            <p class="card-text"><strong>Publicatie Datum:</strong> ${vacature.publicatieDatum}</p>
                            <p class="card-text"><strong>Start Datum:</strong> ${vacature.startDatum}</p>
                            <p class="card-text"><strong>Eind Datum:</strong> ${vacature.eindDatum}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `

	// Add Bootstrap classes for aesthetics
	vacatureInfoDiv.querySelector('.card').classList.add('bg-light', 'text-dark')
	vacatureInfoDiv.querySelector('h3').classList.add('text-primary')
	vacatureInfoDiv.querySelector('.card-title').classList.add('mb-4')
}

function displayVacatureNotFound() {
	var vacatureInfoDiv = document.getElementById('vacatureInfo')
	vacatureInfoDiv.innerHTML = '<p>Vacature not found.</p>'
}

function dummyVacature() {
	let vacature = {
		// placeholder data
		standplaats: 'Amsterdam',
		omschrijving: 'Lorem Ipsum...',
		vereisten: 'Java certificaat',
		uren: 40,
		duur: '5',
		titel: 'Java',
		publicatieDatum: '2023-12-31',
		startDatum: '2023-12-31',
		eindDatum: '2023-12-31',
	}
	return vacature
}
