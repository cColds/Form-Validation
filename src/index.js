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
email.addEventListener("focusout", () => checkInputValidityToStyle(email));

country.addEventListener("keyup", () => checkInputValidityToStyle(country));
country.addEventListener("focusout", () => checkInputValidityToStyle(country));

zipcode.addEventListener("keyup", () => checkInputValidityToStyle(zipcode));
zipcode.addEventListener("focusout", () => checkInputValidityToStyle(zipcode));

password.addEventListener("keyup", () => checkInputValidityToStyle(password));
password.addEventListener("focusout", () =>
	checkInputValidityToStyle(password)
);

confirmPassword.addEventListener("keyup", () =>
	checkInputValidityToStyle(confirmPassword)
);
confirmPassword.addEventListener("focusout", () =>
	checkInputValidityToStyle(confirmPassword)
);

signUpButton.addEventListener("click", () =>
	checkInputValidityToStyle(signUpButton)
);

// signUpButton.addEventListener("click", (e) => {
// 	e.preventDefault();
// 	console.log(getValidationInput());
// });
