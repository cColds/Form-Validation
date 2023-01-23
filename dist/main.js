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
	console.log(country.validity.valid);
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

function checkFormValidity() {
	const inputs = document.querySelectorAll("input");
	const country = document.querySelector("#country");
	const allInputs = [...inputs].every((input) => input.className === "valid");

	return allInputs && country.className === "valid";
}

function styleAllInputsValidity() {
	const allInputs = [email, country, zipcode, password, confirmPassword];
	allInputs.forEach((input) => styleInputValidity(input));
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

confirmPassword.addEventListener("keyup", () => {
	if (password.validity.patternMismatch || !password.validity.valid) return;

	styleConfirmPasswordValidity();
});
confirmPassword.addEventListener("focusout", () => {
	if (password.validity.patternMismatch || !password.validity.valid) return;

	styleConfirmPasswordValidity();
});

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

// TODO LIST:
// select option stop focus should change outline without tap twice
// fix get started not responsive (prob use max width)
// fix sign up form not height 100 vh
// maybe add mobile design medias query

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbWFpbFwiKTtcbmNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50cnlcIik7XG5jb25zdCB6aXBjb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN6aXBjb2RlXCIpO1xuY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3N3b3JkXCIpO1xuY29uc3QgY29uZmlybVBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb25maXJtLXBhc3N3b3JkXCIpO1xuY29uc3Qgc2hvd1Bhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaG93LXBhc3N3b3JkXCIpO1xuY29uc3Qgc2lnblVwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWduLXVwLWJ1dHRvblwiKTtcblxuZnVuY3Rpb24gc3R5bGVJbnB1dFZhbGlkaXR5KGlucHV0KSB7XG5cdGNvbnNvbGUubG9nKGNvdW50cnkudmFsaWRpdHkudmFsaWQpO1xuXHRpZiAoaW5wdXQudmFsaWRpdHkudmFsaWQgJiYgIWlucHV0LnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCkge1xuXHRcdGlucHV0LmNsYXNzTmFtZSA9IFwidmFsaWRcIjtcblx0fSBlbHNlIHtcblx0XHRpbnB1dC5jbGFzc05hbWUgPSBcImludmFsaWRcIjtcblx0fVxufVxuXG5mdW5jdGlvbiBzdHlsZUNvbmZpcm1QYXNzd29yZFZhbGlkaXR5KCkge1xuXHRpZiAocGFzc3dvcmQudmFsdWUgPT09IGNvbmZpcm1QYXNzd29yZC52YWx1ZSkge1xuXHRcdGNvbmZpcm1QYXNzd29yZC5jbGFzc05hbWUgPSBcInZhbGlkXCI7XG5cdH0gZWxzZSB7XG5cdFx0Y29uZmlybVBhc3N3b3JkLmNsYXNzTmFtZSA9IFwiaW52YWxpZFwiO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHN0eWxlQ291bnRyeVZhbGlkaXR5KCkge1xuXHRjb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudHJ5XCIpO1xuXHRpZiAoY291bnRyeS52YWx1ZSkge1xuXHRcdGNvdW50cnkuY2xhc3NOYW1lID0gXCJ2YWxpZFwiO1xuXHR9IGVsc2Uge1xuXHRcdGNvdW50cnkuY2xhc3NOYW1lID0gXCJpbnZhbGlkXCI7XG5cdH1cbn1cblxuZnVuY3Rpb24gY2hlY2tGb3JtVmFsaWRpdHkoKSB7XG5cdGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcblx0Y29uc3QgY291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY291bnRyeVwiKTtcblx0Y29uc3QgYWxsSW5wdXRzID0gWy4uLmlucHV0c10uZXZlcnkoKGlucHV0KSA9PiBpbnB1dC5jbGFzc05hbWUgPT09IFwidmFsaWRcIik7XG5cblx0cmV0dXJuIGFsbElucHV0cyAmJiBjb3VudHJ5LmNsYXNzTmFtZSA9PT0gXCJ2YWxpZFwiO1xufVxuXG5mdW5jdGlvbiBzdHlsZUFsbElucHV0c1ZhbGlkaXR5KCkge1xuXHRjb25zdCBhbGxJbnB1dHMgPSBbZW1haWwsIGNvdW50cnksIHppcGNvZGUsIHBhc3N3b3JkLCBjb25maXJtUGFzc3dvcmRdO1xuXHRhbGxJbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHN0eWxlSW5wdXRWYWxpZGl0eShpbnB1dCkpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkoKSB7XG5cdGNvbnN0IG5ld0lucHV0VHlwZSA9IHBhc3N3b3JkLnR5cGUgPT09IFwicGFzc3dvcmRcIiA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwiO1xuXHRwYXNzd29yZC50eXBlID0gY29uZmlybVBhc3N3b3JkLnR5cGUgPSBuZXdJbnB1dFR5cGU7XG59XG5cbmNvbnN0IGdldFN0YXJ0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdldC1zdGFydGVkLWN0YVwiKTtcbmdldFN0YXJ0ZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGVtYWlsLmZvY3VzKCkpO1xuXG5lbWFpbC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4gc3R5bGVJbnB1dFZhbGlkaXR5KGVtYWlsKSk7XG5lbWFpbC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4gc3R5bGVJbnB1dFZhbGlkaXR5KGVtYWlsKSk7XG5cbmNvdW50cnkuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHN0eWxlQ291bnRyeVZhbGlkaXR5KTtcbmNvdW50cnkuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIHN0eWxlQ291bnRyeVZhbGlkaXR5KTtcblxuemlwY29kZS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4gc3R5bGVJbnB1dFZhbGlkaXR5KHppcGNvZGUpKTtcbnppcGNvZGUuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHN0eWxlSW5wdXRWYWxpZGl0eSh6aXBjb2RlKSk7XG5cbnBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiBzdHlsZUlucHV0VmFsaWRpdHkocGFzc3dvcmQpKTtcbnBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiBzdHlsZUlucHV0VmFsaWRpdHkocGFzc3dvcmQpKTtcblxuY29uZmlybVBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiB7XG5cdGlmIChwYXNzd29yZC52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2ggfHwgIXBhc3N3b3JkLnZhbGlkaXR5LnZhbGlkKSByZXR1cm47XG5cblx0c3R5bGVDb25maXJtUGFzc3dvcmRWYWxpZGl0eSgpO1xufSk7XG5jb25maXJtUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcblx0aWYgKHBhc3N3b3JkLnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCB8fCAhcGFzc3dvcmQudmFsaWRpdHkudmFsaWQpIHJldHVybjtcblxuXHRzdHlsZUNvbmZpcm1QYXNzd29yZFZhbGlkaXR5KCk7XG59KTtcblxuc2hvd1Bhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkpO1xuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG5jb25zdCBtb2RhbE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG5cbnNpZ25VcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRzdHlsZUFsbElucHV0c1ZhbGlkaXR5KCk7XG5cdHN0eWxlQ291bnRyeVZhbGlkaXR5KCk7XG5cblx0aWYgKCFjaGVja0Zvcm1WYWxpZGl0eSgpKSByZXR1cm47XG5cdG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdG1vZGFsT3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufSk7XG5cbi8vIFRPRE8gTElTVDpcbi8vIHNlbGVjdCBvcHRpb24gc3RvcCBmb2N1cyBzaG91bGQgY2hhbmdlIG91dGxpbmUgd2l0aG91dCB0YXAgdHdpY2Vcbi8vIGZpeCBnZXQgc3RhcnRlZCBub3QgcmVzcG9uc2l2ZSAocHJvYiB1c2UgbWF4IHdpZHRoKVxuLy8gZml4IHNpZ24gdXAgZm9ybSBub3QgaGVpZ2h0IDEwMCB2aFxuLy8gbWF5YmUgYWRkIG1vYmlsZSBkZXNpZ24gbWVkaWFzIHF1ZXJ5XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=