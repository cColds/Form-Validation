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

function styleInputValidity(input) {
	console.log(input.validity.valid && !input.validity.patternMismatch);
	if (input.validity.valid && !input.validity.patternMismatch) {
		input.className = "valid";
	} else {
		input.className = "invalid";
	}
}

function styleConfirmPasswordValidity() {
	if (password.value === confirmPassword.value) {
		confirmPassword.className = "valid";
	} else {
		confirmPassword.className = "invalid";
	}
}

function styleCountryValidity() {
	const country = document.querySelector("#country");
	if (country.value) {
		country.className = "valid";
	} else {
		country.className = "invalid";
	}
}

function getAllFormInputs() {
	return [email, country, zipcode, password, confirmPassword, country];
}

function checkFormValidity() {
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

country.addEventListener("change", styleCountryValidity);
country.addEventListener("focusout", styleCountryValidity);

zipcode.addEventListener("keyup", () => styleInputValidity(zipcode));
zipcode.addEventListener("focusout", () => styleInputValidity(zipcode));

password.addEventListener("keyup", () => styleInputValidity(password));
password.addEventListener("focusout", () => styleInputValidity(password));

confirmPassword.addEventListener("keyup", styleConfirmPasswordValidity);
confirmPassword.addEventListener("focusout", styleConfirmPasswordValidity);

showPassword.addEventListener("click", togglePasswordVisibility);

const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".overlay");

signUpButton.addEventListener("click", (e) => {
	e.preventDefault();
	styleAllInputsValidity();
	styleCountryValidity();

	if (!checkFormValidity()) return;

	modal.classList.add("active");
	modalOverlay.classList.add("active");
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbWFpbFwiKTtcbmNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50cnlcIik7XG5jb25zdCB6aXBjb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN6aXBjb2RlXCIpO1xuY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3N3b3JkXCIpO1xuY29uc3QgY29uZmlybVBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb25maXJtLXBhc3N3b3JkXCIpO1xuY29uc3Qgc2hvd1Bhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaG93LXBhc3N3b3JkXCIpO1xuY29uc3Qgc2lnblVwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWduLXVwLWJ1dHRvblwiKTtcblxuZnVuY3Rpb24gc3R5bGVJbnB1dFZhbGlkaXR5KGlucHV0KSB7XG5cdGNvbnNvbGUubG9nKGlucHV0LnZhbGlkaXR5LnZhbGlkICYmICFpbnB1dC52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpO1xuXHRpZiAoaW5wdXQudmFsaWRpdHkudmFsaWQgJiYgIWlucHV0LnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCkge1xuXHRcdGlucHV0LmNsYXNzTmFtZSA9IFwidmFsaWRcIjtcblx0fSBlbHNlIHtcblx0XHRpbnB1dC5jbGFzc05hbWUgPSBcImludmFsaWRcIjtcblx0fVxufVxuXG5mdW5jdGlvbiBzdHlsZUNvbmZpcm1QYXNzd29yZFZhbGlkaXR5KCkge1xuXHRpZiAocGFzc3dvcmQudmFsdWUgPT09IGNvbmZpcm1QYXNzd29yZC52YWx1ZSkge1xuXHRcdGNvbmZpcm1QYXNzd29yZC5jbGFzc05hbWUgPSBcInZhbGlkXCI7XG5cdH0gZWxzZSB7XG5cdFx0Y29uZmlybVBhc3N3b3JkLmNsYXNzTmFtZSA9IFwiaW52YWxpZFwiO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHN0eWxlQ291bnRyeVZhbGlkaXR5KCkge1xuXHRjb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudHJ5XCIpO1xuXHRpZiAoY291bnRyeS52YWx1ZSkge1xuXHRcdGNvdW50cnkuY2xhc3NOYW1lID0gXCJ2YWxpZFwiO1xuXHR9IGVsc2Uge1xuXHRcdGNvdW50cnkuY2xhc3NOYW1lID0gXCJpbnZhbGlkXCI7XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0QWxsRm9ybUlucHV0cygpIHtcblx0cmV0dXJuIFtlbWFpbCwgY291bnRyeSwgemlwY29kZSwgcGFzc3dvcmQsIGNvbmZpcm1QYXNzd29yZCwgY291bnRyeV07XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9ybVZhbGlkaXR5KCkge1xuXHRjb25zdCBhbGxGb3JtSW5wdXRzID0gZ2V0QWxsRm9ybUlucHV0cygpO1xuXHRjb25zdCBhbGxGb3JtSW5wdXRzSXNWYWxpZCA9IGFsbEZvcm1JbnB1dHMuZXZlcnkoXG5cdFx0KGlucHV0KSA9PiBpbnB1dC5jbGFzc05hbWUgPT09IFwidmFsaWRcIlxuXHQpO1xuXG5cdHJldHVybiBhbGxGb3JtSW5wdXRzSXNWYWxpZDtcbn1cblxuZnVuY3Rpb24gc3R5bGVBbGxJbnB1dHNWYWxpZGl0eSgpIHtcblx0Y29uc3QgYWxsRm9ybUlucHV0cyA9IGdldEFsbEZvcm1JbnB1dHMoKTtcblxuXHRhbGxGb3JtSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG5cdFx0c3R5bGVJbnB1dFZhbGlkaXR5KGlucHV0KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSgpIHtcblx0Y29uc3QgbmV3SW5wdXRUeXBlID0gcGFzc3dvcmQudHlwZSA9PT0gXCJwYXNzd29yZFwiID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCI7XG5cdHBhc3N3b3JkLnR5cGUgPSBjb25maXJtUGFzc3dvcmQudHlwZSA9IG5ld0lucHV0VHlwZTtcbn1cblxuY29uc3QgZ2V0U3RhcnRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2V0LXN0YXJ0ZWQtY3RhXCIpO1xuZ2V0U3RhcnRlZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZW1haWwuZm9jdXMoKSk7XG5cbmVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiBzdHlsZUlucHV0VmFsaWRpdHkoZW1haWwpKTtcbmVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiBzdHlsZUlucHV0VmFsaWRpdHkoZW1haWwpKTtcblxuY291bnRyeS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHN0eWxlQ291bnRyeVZhbGlkaXR5KTtcbmNvdW50cnkuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIHN0eWxlQ291bnRyeVZhbGlkaXR5KTtcblxuemlwY29kZS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4gc3R5bGVJbnB1dFZhbGlkaXR5KHppcGNvZGUpKTtcbnppcGNvZGUuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHN0eWxlSW5wdXRWYWxpZGl0eSh6aXBjb2RlKSk7XG5cbnBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiBzdHlsZUlucHV0VmFsaWRpdHkocGFzc3dvcmQpKTtcbnBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiBzdHlsZUlucHV0VmFsaWRpdHkocGFzc3dvcmQpKTtcblxuY29uZmlybVBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBzdHlsZUNvbmZpcm1QYXNzd29yZFZhbGlkaXR5KTtcbmNvbmZpcm1QYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgc3R5bGVDb25maXJtUGFzc3dvcmRWYWxpZGl0eSk7XG5cbnNob3dQYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5KTtcblxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuY29uc3QgbW9kYWxPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuXG5zaWduVXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0c3R5bGVBbGxJbnB1dHNWYWxpZGl0eSgpO1xuXHRzdHlsZUNvdW50cnlWYWxpZGl0eSgpO1xuXG5cdGlmICghY2hlY2tGb3JtVmFsaWRpdHkoKSkgcmV0dXJuO1xuXG5cdG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdG1vZGFsT3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=