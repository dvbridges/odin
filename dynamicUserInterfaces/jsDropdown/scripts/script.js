/* Show menu on hover*/
document.getElementById("content").addEventListener("mouseover", event => {
	if (event.target && event.target.matches("button.dropdown-btn")) {
		event.target.nextElementSibling.classList.toggle("show");
	}
});

/* Set button content on click*/
document.getElementById("content").addEventListener("click", event => {
	if (event.target && event.target.matches("a.dropdown-btn-link")) {
		event.target.parentNode.previousElementSibling.innerHTML =
			event.target.innerHTML;
		event.target.parentNode.classList.toggle("show");
	}
});
