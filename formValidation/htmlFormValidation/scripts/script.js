document.getElementById("custom-error").addEventListener("input", event => {
	if (event.target && event.target.validity.typeMismatch) {
		event.target.setCustomValidity("I thought I said to type a valid email.");
	} else {
		event.target.setCustomValidity("");
	}
});
