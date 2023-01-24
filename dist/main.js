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

country.addEventListener("keyup", styleCountryValidity);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbWFpbFwiKTtcbmNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50cnlcIik7XG5jb25zdCB6aXBjb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN6aXBjb2RlXCIpO1xuY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3N3b3JkXCIpO1xuY29uc3QgY29uZmlybVBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb25maXJtLXBhc3N3b3JkXCIpO1xuY29uc3Qgc2hvd1Bhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaG93LXBhc3N3b3JkXCIpO1xuY29uc3Qgc2lnblVwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWduLXVwLWJ1dHRvblwiKTtcblxuZnVuY3Rpb24gc3R5bGVJbnB1dFZhbGlkaXR5KGlucHV0KSB7XG5cdGNvbnNvbGUubG9nKGlucHV0LnZhbGlkaXR5LnZhbGlkICYmICFpbnB1dC52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpO1xuXHRpZiAoaW5wdXQudmFsaWRpdHkudmFsaWQgJiYgIWlucHV0LnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCkge1xuXHRcdGlucHV0LmNsYXNzTmFtZSA9IFwidmFsaWRcIjtcblx0fSBlbHNlIHtcblx0XHRpbnB1dC5jbGFzc05hbWUgPSBcImludmFsaWRcIjtcblx0fVxufVxuXG5mdW5jdGlvbiBzdHlsZUNvbmZpcm1QYXNzd29yZFZhbGlkaXR5KCkge1xuXHRpZiAocGFzc3dvcmQudmFsdWUgPT09IGNvbmZpcm1QYXNzd29yZC52YWx1ZSkge1xuXHRcdGNvbmZpcm1QYXNzd29yZC5jbGFzc05hbWUgPSBcInZhbGlkXCI7XG5cdH0gZWxzZSB7XG5cdFx0Y29uZmlybVBhc3N3b3JkLmNsYXNzTmFtZSA9IFwiaW52YWxpZFwiO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHN0eWxlQ291bnRyeVZhbGlkaXR5KCkge1xuXHRjb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudHJ5XCIpO1xuXHRpZiAoY291bnRyeS52YWx1ZSkge1xuXHRcdGNvdW50cnkuY2xhc3NOYW1lID0gXCJ2YWxpZFwiO1xuXHR9IGVsc2Uge1xuXHRcdGNvdW50cnkuY2xhc3NOYW1lID0gXCJpbnZhbGlkXCI7XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0QWxsRm9ybUlucHV0cygpIHtcblx0cmV0dXJuIFtlbWFpbCwgY291bnRyeSwgemlwY29kZSwgcGFzc3dvcmQsIGNvbmZpcm1QYXNzd29yZCwgY291bnRyeV07XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9ybVZhbGlkaXR5KCkge1xuXHRjb25zdCBhbGxGb3JtSW5wdXRzID0gZ2V0QWxsRm9ybUlucHV0cygpO1xuXHRjb25zdCBhbGxGb3JtSW5wdXRzSXNWYWxpZCA9IGFsbEZvcm1JbnB1dHMuZXZlcnkoXG5cdFx0KGlucHV0KSA9PiBpbnB1dC5jbGFzc05hbWUgPT09IFwidmFsaWRcIlxuXHQpO1xuXG5cdHJldHVybiBhbGxGb3JtSW5wdXRzSXNWYWxpZDtcbn1cblxuZnVuY3Rpb24gc3R5bGVBbGxJbnB1dHNWYWxpZGl0eSgpIHtcblx0Y29uc3QgYWxsRm9ybUlucHV0cyA9IGdldEFsbEZvcm1JbnB1dHMoKTtcblxuXHRhbGxGb3JtSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG5cdFx0c3R5bGVJbnB1dFZhbGlkaXR5KGlucHV0KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSgpIHtcblx0Y29uc3QgbmV3SW5wdXRUeXBlID0gcGFzc3dvcmQudHlwZSA9PT0gXCJwYXNzd29yZFwiID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCI7XG5cdHBhc3N3b3JkLnR5cGUgPSBjb25maXJtUGFzc3dvcmQudHlwZSA9IG5ld0lucHV0VHlwZTtcbn1cblxuY29uc3QgZ2V0U3RhcnRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2V0LXN0YXJ0ZWQtY3RhXCIpO1xuZ2V0U3RhcnRlZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZW1haWwuZm9jdXMoKSk7XG5cbmVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiBzdHlsZUlucHV0VmFsaWRpdHkoZW1haWwpKTtcbmVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiBzdHlsZUlucHV0VmFsaWRpdHkoZW1haWwpKTtcblxuY291bnRyeS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgc3R5bGVDb3VudHJ5VmFsaWRpdHkpO1xuY291bnRyeS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgc3R5bGVDb3VudHJ5VmFsaWRpdHkpO1xuXG56aXBjb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiBzdHlsZUlucHV0VmFsaWRpdHkoemlwY29kZSkpO1xuemlwY29kZS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4gc3R5bGVJbnB1dFZhbGlkaXR5KHppcGNvZGUpKTtcblxucGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICgpID0+IHN0eWxlSW5wdXRWYWxpZGl0eShwYXNzd29yZCkpO1xucGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHN0eWxlSW5wdXRWYWxpZGl0eShwYXNzd29yZCkpO1xuXG5jb25maXJtUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHN0eWxlQ29uZmlybVBhc3N3b3JkVmFsaWRpdHkpO1xuY29uZmlybVBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBzdHlsZUNvbmZpcm1QYXNzd29yZFZhbGlkaXR5KTtcblxuc2hvd1Bhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkpO1xuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG5jb25zdCBtb2RhbE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG5cbnNpZ25VcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRzdHlsZUFsbElucHV0c1ZhbGlkaXR5KCk7XG5cdHN0eWxlQ291bnRyeVZhbGlkaXR5KCk7XG5cblx0aWYgKCFjaGVja0Zvcm1WYWxpZGl0eSgpKSByZXR1cm47XG5cblx0bW9kYWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0bW9kYWxPdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==