const email = document.querySelector("#email");
const country = document.querySelector("#country");
const zipcode = document.querySelector("#zipcode");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const signUpButton = document.querySelector(".sign-up-button");

function checkInputValidityToStyle(input) {
	if (input.validity.valid) {
		input.className = "valid";
	} else {
		input.className = "invalid";
	}
}

email.addEventListener("keyup", () => checkInputValidityToStyle(email));
country.addEventListener("keyup", () => checkInputValidityToStyle(country));
zipcode.addEventListener("keyup", () => checkInputValidityToStyle(zipcode));
password.addEventListener("keyup", () => checkInputValidityToStyle(password));
confirmPassword.addEventListener("keyup", () =>
	checkInputValidityToStyle(confirmPassword)
);
signUpButton.addEventListener("keyup", () =>
	checkInputValidityToStyle(signUpButton)
);

// signUpButton.addEventListener("click", (e) => {
// 	e.preventDefault();
// 	console.log(getValidationInput());
// });
