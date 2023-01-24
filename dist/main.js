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

	if (!checkFormValidity() && password.value === confirmPassword.value) {
		return;
	}

	modal.classList.add("active");
	modalOverlay.classList.add("active");
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtYWlsXCIpO1xuY29uc3QgY291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY291bnRyeVwiKTtcbmNvbnN0IHppcGNvZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ppcGNvZGVcIik7XG5jb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzc3dvcmRcIik7XG5jb25zdCBjb25maXJtUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmZpcm0tcGFzc3dvcmRcIik7XG5jb25zdCBzaG93UGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Nob3ctcGFzc3dvcmRcIik7XG5jb25zdCBzaWduVXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ24tdXAtYnV0dG9uXCIpO1xuXG5mdW5jdGlvbiBzdHlsZUlucHV0VmFsaWRpdHkoaW5wdXQpIHtcblx0Y29uc29sZS5sb2coaW5wdXQudmFsaWRpdHkudmFsaWQgJiYgIWlucHV0LnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCk7XG5cdGlmIChpbnB1dC52YWxpZGl0eS52YWxpZCAmJiAhaW5wdXQudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XG5cdFx0aW5wdXQuY2xhc3NOYW1lID0gXCJ2YWxpZFwiO1xuXHR9IGVsc2Uge1xuXHRcdGlucHV0LmNsYXNzTmFtZSA9IFwiaW52YWxpZFwiO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHN0eWxlQ29uZmlybVBhc3N3b3JkVmFsaWRpdHkoKSB7XG5cdGlmIChwYXNzd29yZC52YWx1ZSA9PT0gY29uZmlybVBhc3N3b3JkLnZhbHVlKSB7XG5cdFx0Y29uZmlybVBhc3N3b3JkLmNsYXNzTmFtZSA9IFwidmFsaWRcIjtcblx0fSBlbHNlIHtcblx0XHRjb25maXJtUGFzc3dvcmQuY2xhc3NOYW1lID0gXCJpbnZhbGlkXCI7XG5cdH1cbn1cblxuZnVuY3Rpb24gc3R5bGVDb3VudHJ5VmFsaWRpdHkoKSB7XG5cdGNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50cnlcIik7XG5cdGlmIChjb3VudHJ5LnZhbHVlKSB7XG5cdFx0Y291bnRyeS5jbGFzc05hbWUgPSBcInZhbGlkXCI7XG5cdH0gZWxzZSB7XG5cdFx0Y291bnRyeS5jbGFzc05hbWUgPSBcImludmFsaWRcIjtcblx0fVxufVxuXG5mdW5jdGlvbiBnZXRBbGxGb3JtSW5wdXRzKCkge1xuXHRyZXR1cm4gW2VtYWlsLCBjb3VudHJ5LCB6aXBjb2RlLCBwYXNzd29yZCwgY29uZmlybVBhc3N3b3JkLCBjb3VudHJ5XTtcbn1cblxuZnVuY3Rpb24gY2hlY2tGb3JtVmFsaWRpdHkoKSB7XG5cdGNvbnN0IGFsbEZvcm1JbnB1dHMgPSBnZXRBbGxGb3JtSW5wdXRzKCk7XG5cdGNvbnN0IGFsbEZvcm1JbnB1dHNJc1ZhbGlkID0gYWxsRm9ybUlucHV0cy5ldmVyeShcblx0XHQoaW5wdXQpID0+IGlucHV0LmNsYXNzTmFtZSA9PT0gXCJ2YWxpZFwiXG5cdCk7XG5cblx0cmV0dXJuIGFsbEZvcm1JbnB1dHNJc1ZhbGlkO1xufVxuXG5mdW5jdGlvbiBzdHlsZUFsbElucHV0c1ZhbGlkaXR5KCkge1xuXHRjb25zdCBhbGxGb3JtSW5wdXRzID0gZ2V0QWxsRm9ybUlucHV0cygpO1xuXG5cdGFsbEZvcm1JbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcblx0XHRzdHlsZUlucHV0VmFsaWRpdHkoaW5wdXQpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5KCkge1xuXHRjb25zdCBuZXdJbnB1dFR5cGUgPSBwYXNzd29yZC50eXBlID09PSBcInBhc3N3b3JkXCIgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIjtcblx0cGFzc3dvcmQudHlwZSA9IGNvbmZpcm1QYXNzd29yZC50eXBlID0gbmV3SW5wdXRUeXBlO1xufVxuXG5jb25zdCBnZXRTdGFydGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nZXQtc3RhcnRlZC1jdGFcIik7XG5nZXRTdGFydGVkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBlbWFpbC5mb2N1cygpKTtcblxuZW1haWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICgpID0+IHN0eWxlSW5wdXRWYWxpZGl0eShlbWFpbCkpO1xuZW1haWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHN0eWxlSW5wdXRWYWxpZGl0eShlbWFpbCkpO1xuXG5jb3VudHJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgc3R5bGVDb3VudHJ5VmFsaWRpdHkpO1xuY291bnRyeS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgc3R5bGVDb3VudHJ5VmFsaWRpdHkpO1xuXG56aXBjb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiBzdHlsZUlucHV0VmFsaWRpdHkoemlwY29kZSkpO1xuemlwY29kZS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4gc3R5bGVJbnB1dFZhbGlkaXR5KHppcGNvZGUpKTtcblxucGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICgpID0+IHN0eWxlSW5wdXRWYWxpZGl0eShwYXNzd29yZCkpO1xucGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHN0eWxlSW5wdXRWYWxpZGl0eShwYXNzd29yZCkpO1xuXG5jb25maXJtUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHN0eWxlQ29uZmlybVBhc3N3b3JkVmFsaWRpdHkpO1xuY29uZmlybVBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBzdHlsZUNvbmZpcm1QYXNzd29yZFZhbGlkaXR5KTtcblxuc2hvd1Bhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkpO1xuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG5jb25zdCBtb2RhbE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG5cbnNpZ25VcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRzdHlsZUFsbElucHV0c1ZhbGlkaXR5KCk7XG5cblx0aWYgKCFjaGVja0Zvcm1WYWxpZGl0eSgpICYmIHBhc3N3b3JkLnZhbHVlID09PSBjb25maXJtUGFzc3dvcmQudmFsdWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHRtb2RhbE92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9