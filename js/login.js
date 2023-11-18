document.addEventListener("DOMContentLoaded", function () {
	const loginForm = document.getElementById("login-form");
	const resetPasswordButton = document.getElementById("resetPasswordButton");
	const notificationMessage = document.getElementById("notification-message");
	const errorAlert = document.getElementById("error-alert");
	const signUpForm = document.getElementById("sign-up-form");

	// Handle form submission
	loginForm.addEventListener("submit", async function (e) {
		// Prevent the default form submission behavior
		e.preventDefault();

		// Get login information
		const email = document.getElementById("email").value;
		const password = document.getElementById("password").value;

		const loginRequest = {
			email: email,
			wachtwoord: password,
		};

		// Make a POST request to the backend
		fetch(`${backendPath}auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(loginRequest),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.success) {
					// Save token and user details in localStorage
					localStorage.setItem("token", data.token);
					localStorage.setItem("name", data.name);
					localStorage.setItem("role", data.role);
					localStorage.setItem("id", data.id);
					console.log("Opgeslagen in local storage")
					// Redirect
					if (data.role == "ROLE_TRAINEE") {
						window.location.href = "../html/homeTrainees.html";
					} else if (data.role == "ROLE_TALENTMANAGER") {
						window.location.href = "../html/homeTalent.html";
					} else if (data.role == "ROLE_OPDRACHTGEVER") {
						window.location.href = "../html/homeOpdracht.html";
					} else {
						console.log("No role found!");
					}
				} else {
					// Show an error message
					// Show an error message for incorrect login
					errorAlert.style.display = "block";
				}
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	});

	// Handle reset password button click
	resetPasswordButton.addEventListener("click", function () {
		// TODO: Implement reset password logic here
		console.log("You clicked the reset password button");

		// Show a notification message
		notificationMessage.style.display = "block";
	});
});
