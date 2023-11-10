document.addEventListener('DOMContentLoaded', async function () {
	// Set the traineeId to any specific ID you want to retrieve.
	const traineeId = 2

	try {
		const trainee = await getTraineeById(traineeId)
		populateFields(trainee)
	} catch (error) {
		console.error('Error fetching trainee data:', error)
	}
})

function populateFields(trainee) {
	populateField('Name', trainee.naam)
	populateField('Email', trainee.email)
	populateField('Password', '************')
	populateField('Telefoonnummer', trainee.telefoon)
	populateField('Uitstroomrichting', trainee.richting)
	populateDownloadLink('CV', '../docs/cv.pdf', 'Download')
	populateField('Motivatie', trainee.motivatie)
	populateField('Bio', trainee.bio)
	populateImage('Profielfoto', trainee.foto)

	// Setup edit/save listeners for each field
	setupEditSaveListeners('Name', trainee)
	setupEditSaveListeners('Email', trainee)
	setupEditSaveListeners('Password', trainee)
	setupEditSaveListeners('Telefoonnummer', trainee)
	setupEditSaveListeners('Uitstroomrichting', trainee)
	setupEditSaveListeners('CV', trainee)
	setupEditSaveListeners('Motivatie', trainee)
	setupEditSaveListeners('Bio', trainee)
	setupEditSaveListeners('Profielfoto', trainee)
}

function populateField(fieldId, value) {
	const fieldText = $(`#${fieldId}Text`)
	fieldText.text(value)
}

function setupEditSaveListeners(fieldId, trainee) {
	// Remove existing click event listeners to avoid accumulation
	$(`#edit${fieldId}`).off('click')
	$(`#save${fieldId}`).off('click')

	// Toggle the edit/save button
	$(`#edit${fieldId}`).click(function () {
		toggleEditSave(fieldId)
	})

	$(`#save${fieldId}`).click(async function () {
		// Create an object for updated data, initially with all the existing data
		const updatedData = { ...trainee }

		// Handle the field updates
		switch (fieldId) {
			case 'Name':
				updatedData.naam = $(`#NameInput`).val()
				break
			case 'Email':
				updatedData.email = $(`#EmailInput`).val()
				break
			case 'Password':
				// Handle password input if needed
				break
			case 'Telefoonnummer':
				updatedData.telefoon = $(`#TelefoonnummerInput`).val()
				break
			case 'Uitstroomrichting':
				updatedData.richting = $(`#UitstroomrichtingInput`).val()
				break
			case 'CV':
				// Handle CV input if needed
				break
			case 'Motivatie':
				updatedData.motivatie = $(`#MotivatieInput`).val()
				break
			case 'Bio':
				updatedData.bio = $(`#BioInput`).val()
				break
			default:
				console.error(`Field '${fieldId}' is not supported.`)
				return
		}

		// Update the trainee
		try {
			await updateTrainee(trainee.id, updatedData)

			// Reload the trainee's data after the update
			const updatedTrainee = await getTraineeById(trainee.id)
			populateFields(updatedTrainee)
			toggleEditSave(fieldId) // Toggle back to display mode
		} catch (error) {
			console.error(`Error updating ${fieldId}:`, error)
		}
	})
}

function toggleEditSave(fieldId) {
	console.log('Toggle Edit Save')
	$(`#${fieldId}Text, #${fieldId}Input`).toggleClass('d-none')
	$(`#edit${fieldId}, #save${fieldId}`).toggleClass('d-none')
}

function populateImage(fieldId, imageUrl) {
	const imageElement = $(`#${fieldId}`)
	imageElement.html(
		`<img src="${imageUrl}" alt="${fieldId}" width="100" height="100" />`
	)
}

function populateDownloadLink(fieldId, downloadUrl, linkText) {
	const downloadLink = $(`#${fieldId}Text`)
	downloadLink.html(`<a href="${downloadUrl}" download>${linkText}</a>`)
}
