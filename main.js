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

signUpButton.addEventListener("click", () => styleInputValidity(signUpButton));

// signUpButton.addEventListener("click", (e) => {
// 	e.preventDefault();
// 	console.log(getValidationInput());
// });

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtYWlsXCIpO1xuY29uc3QgY291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY291bnRyeVwiKTtcbmNvbnN0IHppcGNvZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ppcGNvZGVcIik7XG5jb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzc3dvcmRcIik7XG5jb25zdCBjb25maXJtUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmZpcm0tcGFzc3dvcmRcIik7XG5jb25zdCBzaWduVXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ24tdXAtYnV0dG9uXCIpO1xuXG5mdW5jdGlvbiBzdHlsZUlucHV0VmFsaWRpdHkoaW5wdXQpIHtcblx0Y29uc29sZS5sb2coY291bnRyeS52YWxpZGl0eS52YWxpZCk7XG5cdGlmIChpbnB1dC52YWxpZGl0eS52YWxpZCAmJiAhaW5wdXQudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XG5cdFx0aW5wdXQuY2xhc3NOYW1lID0gXCJ2YWxpZFwiO1xuXHR9IGVsc2Uge1xuXHRcdGlucHV0LmNsYXNzTmFtZSA9IFwiaW52YWxpZFwiO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHN0eWxlQ29uZmlybVBhc3N3b3JkVmFsaWRpdHkoKSB7XG5cdGlmIChwYXNzd29yZC52YWx1ZSA9PT0gY29uZmlybVBhc3N3b3JkLnZhbHVlKSB7XG5cdFx0Y29uZmlybVBhc3N3b3JkLmNsYXNzTmFtZSA9IFwidmFsaWRcIjtcblx0fSBlbHNlIHtcblx0XHRjb25maXJtUGFzc3dvcmQuY2xhc3NOYW1lID0gXCJpbnZhbGlkXCI7XG5cdH1cbn1cblxuZnVuY3Rpb24gc3R5bGVDb3VudHJ5VmFsaWRpdHkoKSB7XG5cdGNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50cnlcIik7XG5cdGlmIChjb3VudHJ5LnZhbHVlKSB7XG5cdFx0Y291bnRyeS5jbGFzc05hbWUgPSBcInZhbGlkXCI7XG5cdH0gZWxzZSB7XG5cdFx0Y291bnRyeS5jbGFzc05hbWUgPSBcImludmFsaWRcIjtcblx0fVxufVxuXG5lbWFpbC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4gc3R5bGVJbnB1dFZhbGlkaXR5KGVtYWlsKSk7XG5lbWFpbC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4gc3R5bGVJbnB1dFZhbGlkaXR5KGVtYWlsKSk7XG5cbmNvdW50cnkuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHN0eWxlQ291bnRyeVZhbGlkaXR5KTtcbmNvdW50cnkuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIHN0eWxlQ291bnRyeVZhbGlkaXR5KTtcblxuemlwY29kZS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4gc3R5bGVJbnB1dFZhbGlkaXR5KHppcGNvZGUpKTtcbnppcGNvZGUuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHN0eWxlSW5wdXRWYWxpZGl0eSh6aXBjb2RlKSk7XG5cbnBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiBzdHlsZUlucHV0VmFsaWRpdHkocGFzc3dvcmQpKTtcbnBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiBzdHlsZUlucHV0VmFsaWRpdHkocGFzc3dvcmQpKTtcblxuY29uZmlybVBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiB7XG5cdGlmIChwYXNzd29yZC52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2ggfHwgIXBhc3N3b3JkLnZhbGlkaXR5LnZhbGlkKSByZXR1cm47XG5cblx0c3R5bGVDb25maXJtUGFzc3dvcmRWYWxpZGl0eSgpO1xufSk7XG5jb25maXJtUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcblx0aWYgKHBhc3N3b3JkLnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCB8fCAhcGFzc3dvcmQudmFsaWRpdHkudmFsaWQpIHJldHVybjtcblxuXHRzdHlsZUNvbmZpcm1QYXNzd29yZFZhbGlkaXR5KCk7XG59KTtcblxuc2lnblVwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzdHlsZUlucHV0VmFsaWRpdHkoc2lnblVwQnV0dG9uKSk7XG5cbi8vIHNpZ25VcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbi8vIFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gXHRjb25zb2xlLmxvZyhnZXRWYWxpZGF0aW9uSW5wdXQoKSk7XG4vLyB9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==