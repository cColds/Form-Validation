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

// function styleConfirmPasswordValidity() {
// 	if (input.validity.valid && password.value === confirmPassword.value) {
// 		confirmPassword.className = "valid";
// 	} else {
// 		confirmPassword.className = "invalid";
// 	}
// }

// function styleCountryValidity() {
// 	const country = document.querySelector("#country");
// 	if (country.value) {
// 		country.className = "valid";
// 	} else {
// 		country.className = "invalid";
// 	}
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1haWxcIik7XG5jb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudHJ5XCIpO1xuY29uc3QgemlwY29kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjemlwY29kZVwiKTtcbmNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXNzd29yZFwiKTtcbmNvbnN0IGNvbmZpcm1QYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybS1wYXNzd29yZFwiKTtcbmNvbnN0IHNob3dQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hvdy1wYXNzd29yZFwiKTtcbmNvbnN0IHNpZ25VcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbi11cC1idXR0b25cIik7XG5cbi8vIGZ1bmN0aW9uIHN0eWxlQ29uZmlybVBhc3N3b3JkVmFsaWRpdHkoKSB7XG4vLyBcdGlmIChpbnB1dC52YWxpZGl0eS52YWxpZCAmJiBwYXNzd29yZC52YWx1ZSA9PT0gY29uZmlybVBhc3N3b3JkLnZhbHVlKSB7XG4vLyBcdFx0Y29uZmlybVBhc3N3b3JkLmNsYXNzTmFtZSA9IFwidmFsaWRcIjtcbi8vIFx0fSBlbHNlIHtcbi8vIFx0XHRjb25maXJtUGFzc3dvcmQuY2xhc3NOYW1lID0gXCJpbnZhbGlkXCI7XG4vLyBcdH1cbi8vIH1cblxuLy8gZnVuY3Rpb24gc3R5bGVDb3VudHJ5VmFsaWRpdHkoKSB7XG4vLyBcdGNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50cnlcIik7XG4vLyBcdGlmIChjb3VudHJ5LnZhbHVlKSB7XG4vLyBcdFx0Y291bnRyeS5jbGFzc05hbWUgPSBcInZhbGlkXCI7XG4vLyBcdH0gZWxzZSB7XG4vLyBcdFx0Y291bnRyeS5jbGFzc05hbWUgPSBcImludmFsaWRcIjtcbi8vIFx0fVxuLy8gfVxuXG5mdW5jdGlvbiBzdHlsZUNvbmZpcm1QYXNzd29yZCgpIHtcblx0aWYgKHBhc3N3b3JkLnZhbHVlID09PSBjb25maXJtUGFzc3dvcmQudmFsdWUgJiYgcGFzc3dvcmQudmFsaWRpdHkudmFsaWQpIHtcblx0XHRjb25maXJtUGFzc3dvcmQuY2xhc3NOYW1lID0gXCJ2YWxpZFwiO1xuXHR9IGVsc2Uge1xuXHRcdGNvbmZpcm1QYXNzd29yZC5jbGFzc05hbWUgPSBcImludmFsaWRcIjtcblx0fVxufVxuXG5mdW5jdGlvbiBzdHlsZUlucHV0VmFsaWRpdHkoaW5wdXQpIHtcblx0aWYgKGlucHV0LmlkID09PSBcImNvbmZpcm0tcGFzc3dvcmRcIikge1xuXHRcdHN0eWxlQ29uZmlybVBhc3N3b3JkKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG5cdFx0aW5wdXQuY2xhc3NOYW1lID0gXCJ2YWxpZFwiO1xuXHR9IGVsc2Uge1xuXHRcdGlucHV0LmNsYXNzTmFtZSA9IFwiaW52YWxpZFwiO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldEFsbEZvcm1JbnB1dHMoKSB7XG5cdHJldHVybiBbZW1haWwsIGNvdW50cnksIHppcGNvZGUsIHBhc3N3b3JkLCBjb25maXJtUGFzc3dvcmQsIGNvdW50cnldO1xufVxuXG5mdW5jdGlvbiBjaGVja0Zvcm1JbnB1dHNWYWxpZGl0eSgpIHtcblx0Y29uc3QgYWxsRm9ybUlucHV0cyA9IGdldEFsbEZvcm1JbnB1dHMoKTtcblx0Y29uc3QgYWxsRm9ybUlucHV0c0lzVmFsaWQgPSBhbGxGb3JtSW5wdXRzLmV2ZXJ5KFxuXHRcdChpbnB1dCkgPT4gaW5wdXQuY2xhc3NOYW1lID09PSBcInZhbGlkXCJcblx0KTtcblxuXHRyZXR1cm4gYWxsRm9ybUlucHV0c0lzVmFsaWQ7XG59XG5cbmZ1bmN0aW9uIHN0eWxlQWxsSW5wdXRzVmFsaWRpdHkoKSB7XG5cdGNvbnN0IGFsbEZvcm1JbnB1dHMgPSBnZXRBbGxGb3JtSW5wdXRzKCk7XG5cblx0YWxsRm9ybUlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuXHRcdHN0eWxlSW5wdXRWYWxpZGl0eShpbnB1dCk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkoKSB7XG5cdGNvbnN0IG5ld0lucHV0VHlwZSA9IHBhc3N3b3JkLnR5cGUgPT09IFwicGFzc3dvcmRcIiA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwiO1xuXHRwYXNzd29yZC50eXBlID0gY29uZmlybVBhc3N3b3JkLnR5cGUgPSBuZXdJbnB1dFR5cGU7XG59XG5cbmNvbnN0IGdldFN0YXJ0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdldC1zdGFydGVkLWN0YVwiKTtcbmdldFN0YXJ0ZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGVtYWlsLmZvY3VzKCkpO1xuXG5lbWFpbC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4gc3R5bGVJbnB1dFZhbGlkaXR5KGVtYWlsKSk7XG5lbWFpbC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4gc3R5bGVJbnB1dFZhbGlkaXR5KGVtYWlsKSk7XG5cbmNvdW50cnkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiBzdHlsZUlucHV0VmFsaWRpdHkoY291bnRyeSkpO1xuY291bnRyeS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4gc3R5bGVJbnB1dFZhbGlkaXR5KGNvdW50cnkpKTtcblxuemlwY29kZS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4gc3R5bGVJbnB1dFZhbGlkaXR5KHppcGNvZGUpKTtcbnppcGNvZGUuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHN0eWxlSW5wdXRWYWxpZGl0eSh6aXBjb2RlKSk7XG5cbnBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiB7XG5cdHN0eWxlSW5wdXRWYWxpZGl0eShwYXNzd29yZCk7XG5cdGlmIChwYXNzd29yZC52YWxpZGl0eS52YWxpZCkge1xuXHRcdHN0eWxlSW5wdXRWYWxpZGl0eShjb25maXJtUGFzc3dvcmQpO1xuXHR9XG59KTtcbnBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XG5cdHN0eWxlSW5wdXRWYWxpZGl0eShwYXNzd29yZCk7XG5cdGlmIChwYXNzd29yZC52YWxpZGl0eS52YWxpZCkge1xuXHRcdHN0eWxlSW5wdXRWYWxpZGl0eShjb25maXJtUGFzc3dvcmQpO1xuXHR9XG59KTtcblxuY29uZmlybVBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PlxuXHRzdHlsZUlucHV0VmFsaWRpdHkoY29uZmlybVBhc3N3b3JkKVxuKTtcbmNvbmZpcm1QYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT5cblx0c3R5bGVJbnB1dFZhbGlkaXR5KGNvbmZpcm1QYXNzd29yZClcbik7XG5cbnNob3dQYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5KTtcblxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuY29uc3QgbW9kYWxPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuXG5zaWduVXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0c3R5bGVBbGxJbnB1dHNWYWxpZGl0eSgpO1xuXG5cdGlmICghY2hlY2tGb3JtSW5wdXRzVmFsaWRpdHkoKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdG1vZGFsT3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=