let ACCOUNTTYPE;
let ID;

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const resetPasswordButton = document.getElementById("resetPasswordButton");
  const notificationMessage = document.getElementById("notification-message");
  const successMessage = document.getElementById("success-message");
  const errorAlert = document.getElementById("error-alert");
  const signUpForm = document.getElementById("sign-up-form");

  // Handle form submission
  loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    await fetch(`${backendPath}api/persoon`).then((res) => res.json())
      .then((data) => {
        data.forEach((persoon) => {
          if (persoon.email == email && persoon.wachtwoord == password) {
            ACCOUNTTYPE = persoon.accountType
            ID = persoon.id
            localStorage.setItem('ID', ID);
            localStorage.setItem('AccountType', ACCOUNTTYPE);
            successMessage.style.display = "block";
            errorAlert.style.display = "none";
          }
        })
      })

    if (ACCOUNTTYPE == "trainee") {
      window.location.href = '/html/homeTrainees.html';
    } else if (ACCOUNTTYPE == "talentmanager") {
      window.location.href = '/html/homeTalent.html';
    } else if (ACCOUNTTYPE == "opdrachtgever") {
      window.location.href = '/html/homeOpdracht.html';
    } else {
      // Show an error message for incorrect login
      errorAlert.style.display = "block";
      successMessage.style.display = "none";
    }

  });

  // Handle reset password button click
  resetPasswordButton.addEventListener("click", function () {
    // TODO: Implement reset password logic here
    console.log("You clicked the reset password button");
    // Show a notification message
    notificationMessage.style.display = "block";
  });



});
