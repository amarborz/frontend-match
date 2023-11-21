function loadFooter() {
	// Create a container element for the navigation bar
	const footerContainer = document.createElement('div')

	// Define the HTML code for the navigation bar
	footerContainer.innerHTML = `
    <!-- Footer -->
		<footer class="footer text-center bg-dark text-white py-4 mt-5">
			<p>&copy; 2023 Match</p>
			<p>
				<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank" class="text-white">Privacy Policy</a> |
				<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank" class="text-white">Terms of Service</a>
			</p>
		</footer>
    `

	// Append the navigation bar to the document
	document.body.insertBefore(footerContainer, document.body.lastChild)
}
