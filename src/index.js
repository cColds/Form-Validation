const email = document.querySelector("#email");
const country = document.querySelector("#country");
const zipcode = document.querySelector("#zipcode");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const showPassword = document.querySelector("#show-password");
const signUpButton = document.querySelector(".sign-up-button");

function styleConfirmPassword() {
	if (password.value === confirmPassword.value && password.validity.valid) {
		confirmPassword.className = "valid";
	} else {
		confirmPassword.className = "invalid";
	}
}

function styleInputValidity(input) {
	if (input.id === "confirm-password") {
		styleConfirmPassword();
		return;
	}

	if (input.validity.valid) {
		input.className = "valid";
	} else {
		input.className = "invalid";
	}
}

function getAllFormInputs() {
	return [email, country, zipcode, password, confirmPassword, country];
}

function checkFormInputsValidity() {
	const allFormInputs = getAllFormInputs();
	const allFormInputsIsValid = allFormInputs.every(
		(input) => input.className === "valid"
	);

	return allFormInputsIsValid;
}

function styleAllInputsValidity() {
	const allFormInputs = getAllFormInputs();

	allFormInputs.forEach((input) => {
		styleInputValidity(input);
	});
}

function togglePasswordVisibility() {
	const newInputType = password.type === "password" ? "text" : "password";
	password.type = confirmPassword.type = newInputType;
}

const getStarted = document.querySelector(".get-started-cta");
getStarted.addEventListener("click", () => email.focus());

email.addEventListener("keyup", () => styleInputValidity(email));
email.addEventListener("focusout", () => styleInputValidity(email));

country.addEventListener("change", () => styleInputValidity(country));
country.addEventListener("focusout", () => styleInputValidity(country));

zipcode.addEventListener("keyup", () => styleInputValidity(zipcode));
zipcode.addEventListener("focusout", () => styleInputValidity(zipcode));

password.addEventListener("keyup", () => {
	styleInputValidity(password);
	if (password.validity.valid) {
		styleInputValidity(confirmPassword);
	}
});
password.addEventListener("focusout", () => {
	styleInputValidity(password);
	if (password.validity.valid) {
		styleInputValidity(confirmPassword);
	}
});

confirmPassword.addEventListener("keyup", () =>
	styleInputValidity(confirmPassword)
);
confirmPassword.addEventListener("focusout", () =>
	styleInputValidity(confirmPassword)
);

showPassword.addEventListener("click", togglePasswordVisibility);

const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".overlay");

signUpButton.addEventListener("click", (e) => {
	e.preventDefault();
	styleAllInputsValidity();

	if (!checkFormInputsValidity()) {
		return;
	}

	modal.classList.add("active");
	modalOverlay.classList.add("active");
});
