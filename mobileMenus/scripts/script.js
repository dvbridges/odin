/* Show menu on hover*/
document.getElementById("content").addEventListener("mouseover", event => {
	if (event.target && event.target.matches("button.dropdown-btn")) {
		event.target.nextElementSibling.classList.toggle("show");
	}
});

document.getElementById("content").addEventListener("click", event => {
	if (event.target && event.target.matches("button.menu-btn.dropdown-btn")) {
		event.target.nextElementSibling.classList.toggle("show");
	}

	if (event.target && event.target.matches("a.dropdown-btn-link")) {
		event.target.parentNode.classList.toggle("show");
	}
});
