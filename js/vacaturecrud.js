async function getVacatureById1(id) {
	try {
		let response = await fetch(`${backendPath}api/vacature/${id}`)
		let vacature = await response.json()
		displayVacatureInfo1(vacature)
	} catch (error) {
		displayVacatureNotFound()
		console.error('Error fetching data:', error)
	}
}

async function getVacatureById2(id) {
	try {
		let response = await fetch(`${backendPath}api/vacature/${id}`)
		let vacature = await response.json()
		displayVacatureInfo2(vacature)
	} catch (error) {
		displayVacatureNotFound()
		console.error('Error fetching data:', error)
	}
}

async function getVacatureById(id) {
	try {
		let response = await fetch(`${backendPath}api/vacature/${id}`)
		let vacature = await response.json()
		displayVacatureInfo(vacature)
	} catch (error) {
		displayVacatureNotFound()
		console.error('Error fetching data:', error)
	}
}

async function getVacatureByIdToEdit(id) {
	try {
		let response = await fetch(`${backendPath}api/vacature/${id}`)
		let vacature = await response.json()
		return vacature
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}

async function postVacature(vacature) {
	let opdrachtgeverId = localStorage.getItem('id')
	try {
		await fetch(`${backendPath}api/vacature/${opdrachtgeverId}`, {
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

async function putVacature(vacature) {
	try {
		console.log(vacature)
		await fetch(`${backendPath}api/vacature/${vacature.id}`, {
			method: 'PUT',
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
		await fetch(`${backendPath}api/vacature/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
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
							<h6 class="card-title">${vacature.opdrachtgeverNaam}</h6>
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
}
function displayVacatureInfo1(vacature) {
	var vacatureInfoDiv = document.getElementById('vacatureCard')
	vacatureInfoDiv.innerHTML = `
			<div class="container">
				<div class="row">
					<div class="col-md-12 offset-md-2">
						<div class="card">
							<div class="card-body">
								<h3 class="card-title">${vacature.titel}</h3>
								<p class="card-text"><strong>Opdrachtgever:</strong> ${vacature.opdrachtgeverNaam}</p>
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

function displayVacatureInfo2(vacature) {
	var vacatureInfoDiv = document.getElementById('vacatureCard')
	console.log("2")
	vacatureInfoDiv.innerHTML = `
			<div class="container">
				<div class="row">
					<div class="col-md-12 offset-md-2">
						<div class="card">
							<div class="card-body">
							<img src="${
								vacature.titel
									.toLowerCase()
									.includes('java') &&
								vacature.titel
									.toLowerCase()
									.includes('junior')
									? '../img/java.jpg'
									: vacature.titel
											.toLowerCase()
											.includes('java')
									? '../img/java2.png'
									: vacature.titel
											.toLowerCase()
											.includes('devops') &&
									  vacature.titel
											.toLowerCase()
											.includes('junior')
									? '../img/devops.png'
									: vacature.titel
											.toLowerCase()
											.includes('devops')
									? '../img/devops2.jpg'
									: vacature.titel
											.toLowerCase()
											.includes('data') &&
									  vacature.titel
											.toLowerCase()
											.includes('junior')
									? '../img/data.jpg'
									: vacature.titel
											.toLowerCase()
											.includes('data')
									? '../img/data2.jpg'
									: vacature.titel
											.toLowerCase()
											.includes('business') &&
									  vacature.titel
											.toLowerCase()
											.includes('junior')
									? '../img/def2.jpg'
									: vacature.titel
											.toLowerCase()
											.includes('business')
									? '../img/business2.png'
									: vacature.titel
											.toLowerCase()
											.includes('power')
									? '../img/power2.png'
									: vacature.titel
											.toLowerCase()
											.includes('outsystems')
									? '../img/low.png'
									: '../img/def.png'
							}" class="card-img-top" alt="...">
								<h3 class="card-title">${vacature.titel}</h3>
								<p class="card-text"><strong>Opdrachtgever:</strong> ${vacature.opdrachtgeverNaam}</p>
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
