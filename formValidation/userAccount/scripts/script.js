var form = document.getElementsByTagName("form")[0];
var email = document.getElementById("mail");
var error = document.getElementsByClassName("emailError")[0];
var duplicateError = document.getElementsByClassName("emailError")[1];
var duplicateEmail = document.getElementById("duplicateMail");
var passWord = document.getElementById("pass");
var checkPassWord = document.getElementById("checkPass");
var passError = document.getElementsByClassName("passError")[0];
var postcode = document.getElementById("postcode");
var postcodeError = document.getElementsByClassName("postcodeError")[0];

const checkValid = (comp, evt, errorComp, errorClass, msg) => {
	comp.addEventListener(evt, () => {
		if (!comp.validity.valid) {
			errorComp.innerHTML = msg;
			errorComp.className = errorClass;
			event.preventDefault();
		} else {
			errorComp.innerHTML = "";
			errorComp.className = "error";
		}
	}),
		false;
};

const checkMatch = (comp1, comp2, evt, errorComp, errorClass, msg) => {
	comp1.addEventListener(evt, () => {
		if (!(comp1.value == comp2.value)) {
			errorComp.innerHTML = msg;
			errorComp.className = errorClass;
		} else {
			errorComp.innerHTML = "";
			errorComp.className = "error";
		}
	}),
		false;
};

const checkValidText = (comp, regex, evt, errorComp, errorClass, msg) => {
	comp.addEventListener(evt, () => {
		if (!regex.test(comp.value)) {
			errorComp.innerHTML = msg;
			errorComp.className = errorClass;
		} else {
			errorComp.innerHTML = "";
			errorComp.className = "error";
		}
	}),
		false;
};

checkValid(
	email,
	"blur",
	error,
	"error active",
	"Please provide a valid email."
);

checkMatch(
	duplicateEmail,
	email,
	"blur",
	duplicateError,
	"error active",
	"Your email does not match."
);

checkMatch(
	checkPassWord,
	passWord,
	"blur",
	passError,
	"error active",
	"Your password does not match."
);

var postcodeRegEx = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;
checkValidText(
	postcode,
	postcodeRegEx,
	"blur",
	postcodeError,
	"error active",
	"Please enter a valid postcode"
);

form.addEventListener("submit", () => {
	if (
		!email.validity.valid ||
		!duplicateEmail.validity.valid ||
		!(checkPassWord.value === passWord.value)
	) {
		event.preventDefault();
	}
});
