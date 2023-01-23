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
// fix sign up form not height 100 vh
// maybe add mobile design medias query

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1haWxcIik7XG5jb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudHJ5XCIpO1xuY29uc3QgemlwY29kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjemlwY29kZVwiKTtcbmNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXNzd29yZFwiKTtcbmNvbnN0IGNvbmZpcm1QYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybS1wYXNzd29yZFwiKTtcbmNvbnN0IHNob3dQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hvdy1wYXNzd29yZFwiKTtcbmNvbnN0IHNpZ25VcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbi11cC1idXR0b25cIik7XG5cbmZ1bmN0aW9uIHN0eWxlSW5wdXRWYWxpZGl0eShpbnB1dCkge1xuXHRjb25zb2xlLmxvZyhjb3VudHJ5LnZhbGlkaXR5LnZhbGlkKTtcblx0aWYgKGlucHV0LnZhbGlkaXR5LnZhbGlkICYmICFpbnB1dC52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpIHtcblx0XHRpbnB1dC5jbGFzc05hbWUgPSBcInZhbGlkXCI7XG5cdH0gZWxzZSB7XG5cdFx0aW5wdXQuY2xhc3NOYW1lID0gXCJpbnZhbGlkXCI7XG5cdH1cbn1cblxuZnVuY3Rpb24gc3R5bGVDb25maXJtUGFzc3dvcmRWYWxpZGl0eSgpIHtcblx0aWYgKHBhc3N3b3JkLnZhbHVlID09PSBjb25maXJtUGFzc3dvcmQudmFsdWUpIHtcblx0XHRjb25maXJtUGFzc3dvcmQuY2xhc3NOYW1lID0gXCJ2YWxpZFwiO1xuXHR9IGVsc2Uge1xuXHRcdGNvbmZpcm1QYXNzd29yZC5jbGFzc05hbWUgPSBcImludmFsaWRcIjtcblx0fVxufVxuXG5mdW5jdGlvbiBzdHlsZUNvdW50cnlWYWxpZGl0eSgpIHtcblx0Y29uc3QgY291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY291bnRyeVwiKTtcblx0aWYgKGNvdW50cnkudmFsdWUpIHtcblx0XHRjb3VudHJ5LmNsYXNzTmFtZSA9IFwidmFsaWRcIjtcblx0fSBlbHNlIHtcblx0XHRjb3VudHJ5LmNsYXNzTmFtZSA9IFwiaW52YWxpZFwiO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9ybVZhbGlkaXR5KCkge1xuXHRjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG5cdGNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50cnlcIik7XG5cdGNvbnN0IGFsbElucHV0cyA9IFsuLi5pbnB1dHNdLmV2ZXJ5KChpbnB1dCkgPT4gaW5wdXQuY2xhc3NOYW1lID09PSBcInZhbGlkXCIpO1xuXG5cdHJldHVybiBhbGxJbnB1dHMgJiYgY291bnRyeS5jbGFzc05hbWUgPT09IFwidmFsaWRcIjtcbn1cblxuZnVuY3Rpb24gc3R5bGVBbGxJbnB1dHNWYWxpZGl0eSgpIHtcblx0Y29uc3QgYWxsSW5wdXRzID0gW2VtYWlsLCBjb3VudHJ5LCB6aXBjb2RlLCBwYXNzd29yZCwgY29uZmlybVBhc3N3b3JkXTtcblx0YWxsSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiBzdHlsZUlucHV0VmFsaWRpdHkoaW5wdXQpKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5KCkge1xuXHRjb25zdCBuZXdJbnB1dFR5cGUgPSBwYXNzd29yZC50eXBlID09PSBcInBhc3N3b3JkXCIgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIjtcblx0cGFzc3dvcmQudHlwZSA9IGNvbmZpcm1QYXNzd29yZC50eXBlID0gbmV3SW5wdXRUeXBlO1xufVxuXG5jb25zdCBnZXRTdGFydGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nZXQtc3RhcnRlZC1jdGFcIik7XG5nZXRTdGFydGVkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBlbWFpbC5mb2N1cygpKTtcblxuZW1haWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICgpID0+IHN0eWxlSW5wdXRWYWxpZGl0eShlbWFpbCkpO1xuZW1haWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHN0eWxlSW5wdXRWYWxpZGl0eShlbWFpbCkpO1xuXG5jb3VudHJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBzdHlsZUNvdW50cnlWYWxpZGl0eSk7XG5jb3VudHJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBzdHlsZUNvdW50cnlWYWxpZGl0eSk7XG5cbnppcGNvZGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICgpID0+IHN0eWxlSW5wdXRWYWxpZGl0eSh6aXBjb2RlKSk7XG56aXBjb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiBzdHlsZUlucHV0VmFsaWRpdHkoemlwY29kZSkpO1xuXG5wYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4gc3R5bGVJbnB1dFZhbGlkaXR5KHBhc3N3b3JkKSk7XG5wYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4gc3R5bGVJbnB1dFZhbGlkaXR5KHBhc3N3b3JkKSk7XG5cbmNvbmZpcm1QYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4ge1xuXHRpZiAocGFzc3dvcmQudmFsaWRpdHkucGF0dGVybk1pc21hdGNoIHx8ICFwYXNzd29yZC52YWxpZGl0eS52YWxpZCkgcmV0dXJuO1xuXG5cdHN0eWxlQ29uZmlybVBhc3N3b3JkVmFsaWRpdHkoKTtcbn0pO1xuY29uZmlybVBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XG5cdGlmIChwYXNzd29yZC52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2ggfHwgIXBhc3N3b3JkLnZhbGlkaXR5LnZhbGlkKSByZXR1cm47XG5cblx0c3R5bGVDb25maXJtUGFzc3dvcmRWYWxpZGl0eSgpO1xufSk7XG5cbnNob3dQYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5KTtcblxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuY29uc3QgbW9kYWxPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuXG5zaWduVXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0c3R5bGVBbGxJbnB1dHNWYWxpZGl0eSgpO1xuXHRzdHlsZUNvdW50cnlWYWxpZGl0eSgpO1xuXG5cdGlmICghY2hlY2tGb3JtVmFsaWRpdHkoKSkgcmV0dXJuO1xuXHRtb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHRtb2RhbE92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn0pO1xuXG4vLyBUT0RPIExJU1Q6XG4vLyBzZWxlY3Qgb3B0aW9uIHN0b3AgZm9jdXMgc2hvdWxkIGNoYW5nZSBvdXRsaW5lIHdpdGhvdXQgdGFwIHR3aWNlXG4vLyBmaXggc2lnbiB1cCBmb3JtIG5vdCBoZWlnaHQgMTAwIHZoXG4vLyBtYXliZSBhZGQgbW9iaWxlIGRlc2lnbiBtZWRpYXMgcXVlcnlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==