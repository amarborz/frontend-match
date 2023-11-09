async function getOpdrachtById() {
	var opdrachtId = document.getElementById('opdrachtId').value
	try {
		let response = await fetch(
			`https://yc2310-match-backend.azurewebsites.net/api/opdracht/${opdrachtId}`
		)
		let opdracht = await response.json()
		displayOpdrachtInfo(opdracht)
		return opdracht
	} catch (error) {
		displayOpdrachtNotFound()
		console.error('Error fetching data:', error)
	}
}

async function postOpdracht(opdracht) {
	try {
		await fetch(`https://yc2310-match-backend.azurewebsites.net/api/opdracht`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(opdracht),
		})
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}

function displayOpdrachtInfo(opdracht) {
	var opdrachtInfoDiv = document.getElementById('opdrachtInfo')
	opdrachtInfoDiv.innerHTML = `
        <p><strong>Status:</strong> ${opdracht.status}</p>
        <p><strong>StartDatum:</strong> ${opdracht.startDatum}</p>
        <p><strong>EindDatum:</strong> ${opdracht.eindDatum}</p>
    `
}

function displayOpdrachtNotFound() {
	var opdrachtInfoDiv = document.getElementById('opdrachtInfo')
	opdrachtInfoDiv.innerHTML = '<p>Opdracht not found.</p>'
}

function dummyOpdracht() {
	let opdracht = {
		// placeholder data
		status: 'niet-gevuld',
		startDatum: '2023-12-31',
		eindDatum: '2023-12-31',
	}
	return opdracht
}
