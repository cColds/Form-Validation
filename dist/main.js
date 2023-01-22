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

signUpButton.addEventListener("click", (e) => {
	e.preventDefault();
	styleAllInputsValidity();
	styleCountryValidity();

	if (!checkFormValidity()) return;
});

// signUpButton.addEventListener("click", (e) => {
// 	e.preventDefault();
// 	console.log(getValidationInput());
// });

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1haWxcIik7XG5jb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudHJ5XCIpO1xuY29uc3QgemlwY29kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjemlwY29kZVwiKTtcbmNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXNzd29yZFwiKTtcbmNvbnN0IGNvbmZpcm1QYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybS1wYXNzd29yZFwiKTtcbmNvbnN0IHNpZ25VcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbi11cC1idXR0b25cIik7XG5cbmZ1bmN0aW9uIHN0eWxlSW5wdXRWYWxpZGl0eShpbnB1dCkge1xuXHRjb25zb2xlLmxvZyhjb3VudHJ5LnZhbGlkaXR5LnZhbGlkKTtcblx0aWYgKGlucHV0LnZhbGlkaXR5LnZhbGlkICYmICFpbnB1dC52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpIHtcblx0XHRpbnB1dC5jbGFzc05hbWUgPSBcInZhbGlkXCI7XG5cdH0gZWxzZSB7XG5cdFx0aW5wdXQuY2xhc3NOYW1lID0gXCJpbnZhbGlkXCI7XG5cdH1cbn1cblxuZnVuY3Rpb24gc3R5bGVDb25maXJtUGFzc3dvcmRWYWxpZGl0eSgpIHtcblx0aWYgKHBhc3N3b3JkLnZhbHVlID09PSBjb25maXJtUGFzc3dvcmQudmFsdWUpIHtcblx0XHRjb25maXJtUGFzc3dvcmQuY2xhc3NOYW1lID0gXCJ2YWxpZFwiO1xuXHR9IGVsc2Uge1xuXHRcdGNvbmZpcm1QYXNzd29yZC5jbGFzc05hbWUgPSBcImludmFsaWRcIjtcblx0fVxufVxuXG5mdW5jdGlvbiBzdHlsZUNvdW50cnlWYWxpZGl0eSgpIHtcblx0Y29uc3QgY291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY291bnRyeVwiKTtcblx0aWYgKGNvdW50cnkudmFsdWUpIHtcblx0XHRjb3VudHJ5LmNsYXNzTmFtZSA9IFwidmFsaWRcIjtcblx0fSBlbHNlIHtcblx0XHRjb3VudHJ5LmNsYXNzTmFtZSA9IFwiaW52YWxpZFwiO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9ybVZhbGlkaXR5KCkge1xuXHRjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG5cdGNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50cnlcIik7XG5cdGNvbnN0IGFsbElucHV0cyA9IFsuLi5pbnB1dHNdLmV2ZXJ5KChpbnB1dCkgPT4gaW5wdXQuY2xhc3NOYW1lID09PSBcInZhbGlkXCIpO1xuXHRbLi4uaW5wdXRzXS5mb3JFYWNoKChpbnB1dCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKGlucHV0LmNsYXNzTmFtZSk7XG5cdH0pO1xuXG5cdHJldHVybiBhbGxJbnB1dHMgJiYgY291bnRyeS5jbGFzc05hbWUgPT09IFwidmFsaWRcIjtcbn1cblxuZnVuY3Rpb24gc3R5bGVBbGxJbnB1dHNWYWxpZGl0eSgpIHtcblx0Y29uc3QgYWxsSW5wdXRzID0gW2VtYWlsLCBjb3VudHJ5LCB6aXBjb2RlLCBwYXNzd29yZCwgY29uZmlybVBhc3N3b3JkXTtcblx0YWxsSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiBzdHlsZUlucHV0VmFsaWRpdHkoaW5wdXQpKTtcbn1cblxuZW1haWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICgpID0+IHN0eWxlSW5wdXRWYWxpZGl0eShlbWFpbCkpO1xuZW1haWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHN0eWxlSW5wdXRWYWxpZGl0eShlbWFpbCkpO1xuXG5jb3VudHJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBzdHlsZUNvdW50cnlWYWxpZGl0eSk7XG5jb3VudHJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBzdHlsZUNvdW50cnlWYWxpZGl0eSk7XG5cbnppcGNvZGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICgpID0+IHN0eWxlSW5wdXRWYWxpZGl0eSh6aXBjb2RlKSk7XG56aXBjb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiBzdHlsZUlucHV0VmFsaWRpdHkoemlwY29kZSkpO1xuXG5wYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4gc3R5bGVJbnB1dFZhbGlkaXR5KHBhc3N3b3JkKSk7XG5wYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4gc3R5bGVJbnB1dFZhbGlkaXR5KHBhc3N3b3JkKSk7XG5cbmNvbmZpcm1QYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4ge1xuXHRpZiAocGFzc3dvcmQudmFsaWRpdHkucGF0dGVybk1pc21hdGNoIHx8ICFwYXNzd29yZC52YWxpZGl0eS52YWxpZCkgcmV0dXJuO1xuXG5cdHN0eWxlQ29uZmlybVBhc3N3b3JkVmFsaWRpdHkoKTtcbn0pO1xuY29uZmlybVBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XG5cdGlmIChwYXNzd29yZC52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2ggfHwgIXBhc3N3b3JkLnZhbGlkaXR5LnZhbGlkKSByZXR1cm47XG5cblx0c3R5bGVDb25maXJtUGFzc3dvcmRWYWxpZGl0eSgpO1xufSk7XG5cbnNpZ25VcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRzdHlsZUFsbElucHV0c1ZhbGlkaXR5KCk7XG5cdHN0eWxlQ291bnRyeVZhbGlkaXR5KCk7XG5cblx0aWYgKCFjaGVja0Zvcm1WYWxpZGl0eSgpKSByZXR1cm47XG59KTtcblxuLy8gc2lnblVwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuLy8gXHRlLnByZXZlbnREZWZhdWx0KCk7XG4vLyBcdGNvbnNvbGUubG9nKGdldFZhbGlkYXRpb25JbnB1dCgpKTtcbi8vIH0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9