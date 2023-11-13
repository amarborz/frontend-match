const backendPath = 'https://yc2310-match-backend.azurewebsites.net/'
// const backendPath = 'http://localhost:8080/'

const showProfile = (item) => {
	console.log(item)
	document.getElementById('dropdownMenu1').innerHTML = item.innerHTML
}

const getProfile = () => {
	const profile = document.getElementById('dropdownMenu1').innerHTML
	console.log(profile)
	localStorage.setItem('profile', profile)
}

const profile = localStorage.getItem('profile') || 'Opdrachtgever'
console.log(profile)

const loadNavBar = () => {
	const navbarContainer = document.createElement('nav')

	navbarContainer.classList.add(
		'navbar',
		'navbar-expand-lg',
		'navbar-light',
		'bg-primary',
		'fixed-top'
	)

	// Define the HTML code for the navigation bar

	if (profile === 'Opdrachtgever') {
		console.log('Opdrachtgever')
		navbarContainer.innerHTML = `
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
      <a class="navbar-brand" href="homeOpdracht.html">
        <img
          src="../icons/logo.png"
          width="100"
          height="30"
          class="d-inline-block align-top mx-3"
          alt="Your Logo"
        />
      </a>
      <div class="dropdown mx-3">
        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ${profile}
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
          <button class="dropdown-item" type="button" onclick="showProfile(this); getProfile()">Opdrachtgever</button>
          <button class="dropdown-item" type="button" onclick="showProfile(this); getProfile()">Talent Manager</button>
          <button class="dropdown-item" type="button" onclick="showProfile(this); getProfile()">Trainee</button>
        </div>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link text-white" href="account.html">Mijn Account</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="homeOpdracht.html">Vacatures</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="homeOpdracht.html">Matches</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="homeOpdracht.html">Opdrachten</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="loonstrook.html">Loonstroken</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="berichten.html">Berichten</a>
          </li>
        </ul>
      </div>
    </nav>
  
    <style>
      .navbar-nav .nav-item:hover {
        background-color: #6d6d6d; /* Change the background color on hover */
      }
    </style>
    `
	} else if (profile === 'Trainee') {
		console.log('Trainee')
		navbarContainer.innerHTML = `
  <!-- Navigation Bar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
    <a class="navbar-brand" href="homeTrainees.html">
      <img
        src="../icons/logo.png"
        width="100"
        height="30"
        class="d-inline-block align-top mx-3"
        alt="Your Logo"
      />
    </a>
    <div class="dropdown mx-3">
      <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        ${profile}
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
        <button class="dropdown-item" type="button" onclick="showProfile(this); getProfile()">Opdrachtgever</button>
        <button class="dropdown-item" type="button" onclick="showProfile(this); getProfile()">Talent Manager</button>
        <button class="dropdown-item" type="button" onclick="showProfile(this); getProfile()">Trainee</button>
      </div>
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link text-white" href="account.html">Mijn Account</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="profiel.html">Profiel</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="homeTrainees.html"
            >Vacatures</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="homeTrainees.html">Mijn Opdracht</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="loonstrook.html">Loonstroken</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="berichten.html">Berichten</a>
        </li>
      </ul>
    </div>
  </nav>

  <style>
    .navbar-nav .nav-item:hover {
      background-color: #6d6d6d; /* Change the background color on hover */
    }
  </style>
  `
	} else {
		console.log('Talent')
		navbarContainer.innerHTML = `
  <!-- Navigation Bar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
    <a class="navbar-brand" href="homeTalent.html">
      <img
        src="../icons/logo.png"
        width="100"
        height="30"
        class="d-inline-block align-top mx-3"
        alt="Your Logo"
      />
    </a>
    <div class="dropdown mx-3">
      <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        ${profile}
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
        <button class="dropdown-item" type="button" onclick="showProfile(this); getProfile()">Opdrachtgever</button>
        <button class="dropdown-item" type="button" onclick="showProfile(this); getProfile()">Talent Manager</button>
        <button class="dropdown-item" type="button" onclick="showProfile(this); getProfile()">Trainee</button>
      </div>
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link text-white" href="account.html">Mijn Account</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="homeOpdracht.html">Vacatures</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="homeTalent.html">Trainees</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="homeTrainees.html"
            >Matches</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="berichten.html">Berichten</a>
        </li>
      </ul>
    </div>
  </nav>

  <style>
    .navbar-nav .nav-item:hover {
      background-color: #6d6d6d; /* Change the background color on hover */
    }
  </style>
  `
	}

	// Append the navigation bar to the document
	document.body.insertBefore(navbarContainer, document.body.firstChild)
}
