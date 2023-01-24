/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1haWxcIik7XG5jb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudHJ5XCIpO1xuY29uc3QgemlwY29kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjemlwY29kZVwiKTtcbmNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXNzd29yZFwiKTtcbmNvbnN0IGNvbmZpcm1QYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybS1wYXNzd29yZFwiKTtcbmNvbnN0IHNob3dQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hvdy1wYXNzd29yZFwiKTtcbmNvbnN0IHNpZ25VcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbi11cC1idXR0b25cIik7XG5cbmZ1bmN0aW9uIHN0eWxlQ29uZmlybVBhc3N3b3JkKCkge1xuXHRpZiAocGFzc3dvcmQudmFsdWUgPT09IGNvbmZpcm1QYXNzd29yZC52YWx1ZSAmJiBwYXNzd29yZC52YWxpZGl0eS52YWxpZCkge1xuXHRcdGNvbmZpcm1QYXNzd29yZC5jbGFzc05hbWUgPSBcInZhbGlkXCI7XG5cdH0gZWxzZSB7XG5cdFx0Y29uZmlybVBhc3N3b3JkLmNsYXNzTmFtZSA9IFwiaW52YWxpZFwiO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHN0eWxlSW5wdXRWYWxpZGl0eShpbnB1dCkge1xuXHRpZiAoaW5wdXQuaWQgPT09IFwiY29uZmlybS1wYXNzd29yZFwiKSB7XG5cdFx0c3R5bGVDb25maXJtUGFzc3dvcmQoKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoaW5wdXQudmFsaWRpdHkudmFsaWQpIHtcblx0XHRpbnB1dC5jbGFzc05hbWUgPSBcInZhbGlkXCI7XG5cdH0gZWxzZSB7XG5cdFx0aW5wdXQuY2xhc3NOYW1lID0gXCJpbnZhbGlkXCI7XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0QWxsRm9ybUlucHV0cygpIHtcblx0cmV0dXJuIFtlbWFpbCwgY291bnRyeSwgemlwY29kZSwgcGFzc3dvcmQsIGNvbmZpcm1QYXNzd29yZCwgY291bnRyeV07XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9ybUlucHV0c1ZhbGlkaXR5KCkge1xuXHRjb25zdCBhbGxGb3JtSW5wdXRzID0gZ2V0QWxsRm9ybUlucHV0cygpO1xuXHRjb25zdCBhbGxGb3JtSW5wdXRzSXNWYWxpZCA9IGFsbEZvcm1JbnB1dHMuZXZlcnkoXG5cdFx0KGlucHV0KSA9PiBpbnB1dC5jbGFzc05hbWUgPT09IFwidmFsaWRcIlxuXHQpO1xuXG5cdHJldHVybiBhbGxGb3JtSW5wdXRzSXNWYWxpZDtcbn1cblxuZnVuY3Rpb24gc3R5bGVBbGxJbnB1dHNWYWxpZGl0eSgpIHtcblx0Y29uc3QgYWxsRm9ybUlucHV0cyA9IGdldEFsbEZvcm1JbnB1dHMoKTtcblxuXHRhbGxGb3JtSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG5cdFx0c3R5bGVJbnB1dFZhbGlkaXR5KGlucHV0KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSgpIHtcblx0Y29uc3QgbmV3SW5wdXRUeXBlID0gcGFzc3dvcmQudHlwZSA9PT0gXCJwYXNzd29yZFwiID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCI7XG5cdHBhc3N3b3JkLnR5cGUgPSBjb25maXJtUGFzc3dvcmQudHlwZSA9IG5ld0lucHV0VHlwZTtcbn1cblxuY29uc3QgZ2V0U3RhcnRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2V0LXN0YXJ0ZWQtY3RhXCIpO1xuZ2V0U3RhcnRlZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZW1haWwuZm9jdXMoKSk7XG5cbmVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiBzdHlsZUlucHV0VmFsaWRpdHkoZW1haWwpKTtcbmVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiBzdHlsZUlucHV0VmFsaWRpdHkoZW1haWwpKTtcblxuY291bnRyeS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHN0eWxlSW5wdXRWYWxpZGl0eShjb3VudHJ5KSk7XG5jb3VudHJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiBzdHlsZUlucHV0VmFsaWRpdHkoY291bnRyeSkpO1xuXG56aXBjb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiBzdHlsZUlucHV0VmFsaWRpdHkoemlwY29kZSkpO1xuemlwY29kZS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4gc3R5bGVJbnB1dFZhbGlkaXR5KHppcGNvZGUpKTtcblxucGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICgpID0+IHtcblx0c3R5bGVJbnB1dFZhbGlkaXR5KHBhc3N3b3JkKTtcblx0aWYgKHBhc3N3b3JkLnZhbGlkaXR5LnZhbGlkKSB7XG5cdFx0c3R5bGVJbnB1dFZhbGlkaXR5KGNvbmZpcm1QYXNzd29yZCk7XG5cdH1cbn0pO1xucGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcblx0c3R5bGVJbnB1dFZhbGlkaXR5KHBhc3N3b3JkKTtcblx0aWYgKHBhc3N3b3JkLnZhbGlkaXR5LnZhbGlkKSB7XG5cdFx0c3R5bGVJbnB1dFZhbGlkaXR5KGNvbmZpcm1QYXNzd29yZCk7XG5cdH1cbn0pO1xuXG5jb25maXJtUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICgpID0+XG5cdHN0eWxlSW5wdXRWYWxpZGl0eShjb25maXJtUGFzc3dvcmQpXG4pO1xuY29uZmlybVBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PlxuXHRzdHlsZUlucHV0VmFsaWRpdHkoY29uZmlybVBhc3N3b3JkKVxuKTtcblxuc2hvd1Bhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkpO1xuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG5jb25zdCBtb2RhbE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG5cbnNpZ25VcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRzdHlsZUFsbElucHV0c1ZhbGlkaXR5KCk7XG5cblx0aWYgKCFjaGVja0Zvcm1JbnB1dHNWYWxpZGl0eSgpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bW9kYWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0bW9kYWxPdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==