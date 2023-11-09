async function getTraineeById(traineeId) {
	try {
		let response = await fetch(
			`https://yc2310-match-backend.azurewebsites.net/api/trainee/${traineeId}`
		)
		let trainee = await response.json()
		return trainee
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}

async function updateTrainee(traineeId, updatedData) {
	try {
		const response = await fetch(
			`https://yc2310-match-backend.azurewebsites.net/api/trainee/${traineeId}`,
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

async function postTrainee(trainee) {
	try {
		await fetch(`https://yc2310-match-backend.azurewebsites.net/api/trainee`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(trainee),
		})
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}

async function getDisplayTrainee(traineeId) {
	trainee = await getTraineeById(traineeId)
	displayTraineeInfo(trainee)
}

function displayTraineeInfo(trainee) {
	let traineeInfoDiv = document.getElementById('traineeInfo')
	traineeInfoDiv.innerHTML = `
    <div class="row">
        <div class="col-md-6">
            <h3 class="text-primary">${trainee.naam}</h3>
            <p class="card-text"><strong>E-mail:</strong> ${trainee.email}</p>
            <p class="card-text"><strong>Telefoon:</strong> ${trainee.telefoon}</p>
            <p class="card-text"><strong>Richting:</strong> ${trainee.richting}</p>
            <p class="card-text"><strong>Motivatie:</strong> ${trainee.motivatie}</p>
            <p class="card-text"><strong>Bio:</strong> ${trainee.bio}</p>
        </div>
        <div class="col-md-6">
            <img src="../img/${trainee.foto}" class="img-fluid">
        </div>
    </div>
        `
}

function displayTraineeNotFound() {
	var traineeInfoDiv = document.getElementById('traineeInfo')
	traineeInfoDiv.innerHTML = '<p>Trainee not found.</p>'
}

function dummyTrainee() {
	let trainee = {
		// placeholder data
		naam: 'Amar',
		wachtwoord: 'abc123',
		email: 'Amar@youngcapital.nl',
		foto: 'foto',
		telefoon: '+31612345678',
		richting: 'Dev Ops',
		cv: 'cv',
		motivatie: 'Lorem Ipsum',
		bio: 'Lorem ipsum...',
	}
	return trainee
}
