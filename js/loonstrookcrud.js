async function getLoonstrookById(id) {
	try {
		let response = await fetch(
			`https://yc2310-match-backend.azurewebsites.net/api/loonstrook/${id}`
		)
		let loonstrook = await response.json()
		displayLoonstrookInfo(loonstrook)
	} catch (error) {
		displayLoonstrookNotFound()
		console.error('Error fetching data:', error)
	}
}

async function postLoonstrook(loonstrook) {
	try {
		await fetch(
			`https://yc2310-match-backend.azurewebsites.net/api/loonstrook`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(loonstrook),
			}
		)
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}

function displayLoonstrookInfo(loonstrook) {
	var loonstrookInfoDiv = document.getElementById('loonstrookInfo')

	loonstrookInfoDiv.innerHTML = `
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">${loonstrook.periode}</h3>
                        <p class="card-text"><strong>Salaris Bedrag:</strong> ${loonstrook.salarisBedrag}</p>
                        <p class="card-text"><strong>Uitbetaald:</strong> ${loonstrook.uitbetaald}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
`

	// Add Bootstrap classes for aesthetics
	loonstrookInfoDiv
		.querySelector('.card')
		.classList.add('bg-light', 'text-dark')
	loonstrookInfoDiv.querySelector('h3').classList.add('text-primary')
	loonstrookInfoDiv.querySelector('.card-title').classList.add('mb-4')
}

function displayLoonstrookNotFound() {
	var loonstrook = document.getElementById('loonstrookInfo')
	loonstrook.innerHTML = '<p>Loonstrook not found.</p>'
}

function dummyLoonstrook() {
	let loonstrook = {
		// placeholder data
		salarisBedrag: 2500,
		periode: '2023-12-31',
		uitbetaald: true,
	}
	return loonstrook
}
