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
	[...inputs].forEach((input) => {
		console.log(input.className);
	});

	return allInputs && country.className === "valid";
}

function styleAllInputsValidity() {
	const allInputs = [email, country, zipcode, password, confirmPassword];
	allInputs.forEach((input) => styleInputValidity(input));
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

function togglePasswordVisibility() {
	const newInputType = password.type === "password" ? "text" : "password";
	password.type = confirmPassword.type = newInputType;
}

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
// among us sussy 123

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1haWxcIik7XG5jb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudHJ5XCIpO1xuY29uc3QgemlwY29kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjemlwY29kZVwiKTtcbmNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXNzd29yZFwiKTtcbmNvbnN0IGNvbmZpcm1QYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybS1wYXNzd29yZFwiKTtcbmNvbnN0IHNob3dQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hvdy1wYXNzd29yZFwiKTtcbmNvbnN0IHNpZ25VcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbi11cC1idXR0b25cIik7XG5cbmZ1bmN0aW9uIHN0eWxlSW5wdXRWYWxpZGl0eShpbnB1dCkge1xuXHRjb25zb2xlLmxvZyhjb3VudHJ5LnZhbGlkaXR5LnZhbGlkKTtcblx0aWYgKGlucHV0LnZhbGlkaXR5LnZhbGlkICYmICFpbnB1dC52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpIHtcblx0XHRpbnB1dC5jbGFzc05hbWUgPSBcInZhbGlkXCI7XG5cdH0gZWxzZSB7XG5cdFx0aW5wdXQuY2xhc3NOYW1lID0gXCJpbnZhbGlkXCI7XG5cdH1cbn1cblxuZnVuY3Rpb24gc3R5bGVDb25maXJtUGFzc3dvcmRWYWxpZGl0eSgpIHtcblx0aWYgKHBhc3N3b3JkLnZhbHVlID09PSBjb25maXJtUGFzc3dvcmQudmFsdWUpIHtcblx0XHRjb25maXJtUGFzc3dvcmQuY2xhc3NOYW1lID0gXCJ2YWxpZFwiO1xuXHR9IGVsc2Uge1xuXHRcdGNvbmZpcm1QYXNzd29yZC5jbGFzc05hbWUgPSBcImludmFsaWRcIjtcblx0fVxufVxuXG5mdW5jdGlvbiBzdHlsZUNvdW50cnlWYWxpZGl0eSgpIHtcblx0Y29uc3QgY291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY291bnRyeVwiKTtcblx0aWYgKGNvdW50cnkudmFsdWUpIHtcblx0XHRjb3VudHJ5LmNsYXNzTmFtZSA9IFwidmFsaWRcIjtcblx0fSBlbHNlIHtcblx0XHRjb3VudHJ5LmNsYXNzTmFtZSA9IFwiaW52YWxpZFwiO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9ybVZhbGlkaXR5KCkge1xuXHRjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG5cdGNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50cnlcIik7XG5cdGNvbnN0IGFsbElucHV0cyA9IFsuLi5pbnB1dHNdLmV2ZXJ5KChpbnB1dCkgPT4gaW5wdXQuY2xhc3NOYW1lID09PSBcInZhbGlkXCIpO1xuXHRbLi4uaW5wdXRzXS5mb3JFYWNoKChpbnB1dCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKGlucHV0LmNsYXNzTmFtZSk7XG5cdH0pO1xuXG5cdHJldHVybiBhbGxJbnB1dHMgJiYgY291bnRyeS5jbGFzc05hbWUgPT09IFwidmFsaWRcIjtcbn1cblxuZnVuY3Rpb24gc3R5bGVBbGxJbnB1dHNWYWxpZGl0eSgpIHtcblx0Y29uc3QgYWxsSW5wdXRzID0gW2VtYWlsLCBjb3VudHJ5LCB6aXBjb2RlLCBwYXNzd29yZCwgY29uZmlybVBhc3N3b3JkXTtcblx0YWxsSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiBzdHlsZUlucHV0VmFsaWRpdHkoaW5wdXQpKTtcbn1cblxuY29uc3QgZ2V0U3RhcnRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2V0LXN0YXJ0ZWQtY3RhXCIpO1xuZ2V0U3RhcnRlZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZW1haWwuZm9jdXMoKSk7XG5cbmVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiBzdHlsZUlucHV0VmFsaWRpdHkoZW1haWwpKTtcbmVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiBzdHlsZUlucHV0VmFsaWRpdHkoZW1haWwpKTtcblxuY291bnRyeS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgc3R5bGVDb3VudHJ5VmFsaWRpdHkpO1xuY291bnRyeS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgc3R5bGVDb3VudHJ5VmFsaWRpdHkpO1xuXG56aXBjb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiBzdHlsZUlucHV0VmFsaWRpdHkoemlwY29kZSkpO1xuemlwY29kZS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4gc3R5bGVJbnB1dFZhbGlkaXR5KHppcGNvZGUpKTtcblxucGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICgpID0+IHN0eWxlSW5wdXRWYWxpZGl0eShwYXNzd29yZCkpO1xucGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHN0eWxlSW5wdXRWYWxpZGl0eShwYXNzd29yZCkpO1xuXG5jb25maXJtUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICgpID0+IHtcblx0aWYgKHBhc3N3b3JkLnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCB8fCAhcGFzc3dvcmQudmFsaWRpdHkudmFsaWQpIHJldHVybjtcblxuXHRzdHlsZUNvbmZpcm1QYXNzd29yZFZhbGlkaXR5KCk7XG59KTtcbmNvbmZpcm1QYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4ge1xuXHRpZiAocGFzc3dvcmQudmFsaWRpdHkucGF0dGVybk1pc21hdGNoIHx8ICFwYXNzd29yZC52YWxpZGl0eS52YWxpZCkgcmV0dXJuO1xuXG5cdHN0eWxlQ29uZmlybVBhc3N3b3JkVmFsaWRpdHkoKTtcbn0pO1xuXG5mdW5jdGlvbiB0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkoKSB7XG5cdGNvbnN0IG5ld0lucHV0VHlwZSA9IHBhc3N3b3JkLnR5cGUgPT09IFwicGFzc3dvcmRcIiA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwiO1xuXHRwYXNzd29yZC50eXBlID0gY29uZmlybVBhc3N3b3JkLnR5cGUgPSBuZXdJbnB1dFR5cGU7XG59XG5cbnNob3dQYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5KTtcblxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuY29uc3QgbW9kYWxPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuXG5zaWduVXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0c3R5bGVBbGxJbnB1dHNWYWxpZGl0eSgpO1xuXHRzdHlsZUNvdW50cnlWYWxpZGl0eSgpO1xuXG5cdGlmICghY2hlY2tGb3JtVmFsaWRpdHkoKSkgcmV0dXJuO1xuXHRtb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHRtb2RhbE92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn0pO1xuXG4vLyBUT0RPIExJU1Q6XG4vLyBzZWxlY3Qgb3B0aW9uIHN0b3AgZm9jdXMgc2hvdWxkIGNoYW5nZSBvdXRsaW5lIHdpdGhvdXQgdGFwIHR3aWNlXG4vLyBmaXggZ2V0IHN0YXJ0ZWQgbm90IHJlc3BvbnNpdmUgKHByb2IgdXNlIG1heCB3aWR0aClcbi8vIGZpeCBzaWduIHVwIGZvcm0gbm90IGhlaWdodCAxMDAgdmhcbi8vIG1heWJlIGFkZCBtb2JpbGUgZGVzaWduIG1lZGlhcyBxdWVyeVxuLy8gYW1vbmcgdXMgc3Vzc3kgMTIzXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=