// Add an event listener to the form submission
$(document).ready(function () {
	$("#signupForm").submit(function (e) {
		e.preventDefault(); // Prevent the default form submission

		// Check the selected value from the dropdown
		var selectedValue = $("#persoonDropdown").text();

		// Get the form data
		var formData = {
			email: $("#email").val(),
			password: $("#password").val(),
			voornaam: $("#voornaam").val(),
			achternaam: $("#achternaam").val(),
			telefoonnummer: $("#telefoonnummer").val(),
		};

		var personData = {
			naam: formData.voornaam + " " + formData.achternaam,
			email: formData.email,
			wachtwoord: formData.password,
			telefoon: formData.telefoonnummer,
		};

		// Call the appropriate function based on the selected "Persoon"
		if (selectedValue === "Trainee") {
			postTrainee(personData);
		} else if (selectedValue === "Talent Manager") {
			postTalentmanager(personData);
		} else if (selectedValue === "Opdrachtgever") {
			postOpdrachtgever(personData);
		}

		// Show the Bootstrap alert on succesful sign up
		$(".alert").fadeIn();

		// Redirect to the dashboard.html page after a delay
		setTimeout(function () {
			window.location.href = "login.html";
		}, 2000); // Delay for 2 seconds
	});
});
