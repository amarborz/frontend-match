function showAlert() {
	scroll(0, 0);
	let notification = document.getElementById("notification");
	notification.removeAttribute("hidden");

	setTimeout(() => {
		notification.setAttribute("hidden", true);
	}, "4000");
}
