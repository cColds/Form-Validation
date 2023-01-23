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

showPassword.addEventListener("click", () => {
	const newInputType = password.type === "password" ? "text" : "password";
	password.type = newInputType;
	confirmPassword.type = newInputType;
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtYWlsXCIpO1xuY29uc3QgY291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY291bnRyeVwiKTtcbmNvbnN0IHppcGNvZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ppcGNvZGVcIik7XG5jb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzc3dvcmRcIik7XG5jb25zdCBjb25maXJtUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmZpcm0tcGFzc3dvcmRcIik7XG5jb25zdCBzaG93UGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Nob3ctcGFzc3dvcmRcIik7XG5jb25zdCBzaWduVXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ24tdXAtYnV0dG9uXCIpO1xuXG5mdW5jdGlvbiBzdHlsZUlucHV0VmFsaWRpdHkoaW5wdXQpIHtcblx0Y29uc29sZS5sb2coY291bnRyeS52YWxpZGl0eS52YWxpZCk7XG5cdGlmIChpbnB1dC52YWxpZGl0eS52YWxpZCAmJiAhaW5wdXQudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XG5cdFx0aW5wdXQuY2xhc3NOYW1lID0gXCJ2YWxpZFwiO1xuXHR9IGVsc2Uge1xuXHRcdGlucHV0LmNsYXNzTmFtZSA9IFwiaW52YWxpZFwiO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHN0eWxlQ29uZmlybVBhc3N3b3JkVmFsaWRpdHkoKSB7XG5cdGlmIChwYXNzd29yZC52YWx1ZSA9PT0gY29uZmlybVBhc3N3b3JkLnZhbHVlKSB7XG5cdFx0Y29uZmlybVBhc3N3b3JkLmNsYXNzTmFtZSA9IFwidmFsaWRcIjtcblx0fSBlbHNlIHtcblx0XHRjb25maXJtUGFzc3dvcmQuY2xhc3NOYW1lID0gXCJpbnZhbGlkXCI7XG5cdH1cbn1cblxuZnVuY3Rpb24gc3R5bGVDb3VudHJ5VmFsaWRpdHkoKSB7XG5cdGNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50cnlcIik7XG5cdGlmIChjb3VudHJ5LnZhbHVlKSB7XG5cdFx0Y291bnRyeS5jbGFzc05hbWUgPSBcInZhbGlkXCI7XG5cdH0gZWxzZSB7XG5cdFx0Y291bnRyeS5jbGFzc05hbWUgPSBcImludmFsaWRcIjtcblx0fVxufVxuXG5mdW5jdGlvbiBjaGVja0Zvcm1WYWxpZGl0eSgpIHtcblx0Y29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpO1xuXHRjb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudHJ5XCIpO1xuXHRjb25zdCBhbGxJbnB1dHMgPSBbLi4uaW5wdXRzXS5ldmVyeSgoaW5wdXQpID0+IGlucHV0LmNsYXNzTmFtZSA9PT0gXCJ2YWxpZFwiKTtcblx0Wy4uLmlucHV0c10uZm9yRWFjaCgoaW5wdXQpID0+IHtcblx0XHRjb25zb2xlLmxvZyhpbnB1dC5jbGFzc05hbWUpO1xuXHR9KTtcblxuXHRyZXR1cm4gYWxsSW5wdXRzICYmIGNvdW50cnkuY2xhc3NOYW1lID09PSBcInZhbGlkXCI7XG59XG5cbmZ1bmN0aW9uIHN0eWxlQWxsSW5wdXRzVmFsaWRpdHkoKSB7XG5cdGNvbnN0IGFsbElucHV0cyA9IFtlbWFpbCwgY291bnRyeSwgemlwY29kZSwgcGFzc3dvcmQsIGNvbmZpcm1QYXNzd29yZF07XG5cdGFsbElucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4gc3R5bGVJbnB1dFZhbGlkaXR5KGlucHV0KSk7XG59XG5cbmNvbnN0IGdldFN0YXJ0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdldC1zdGFydGVkLWN0YVwiKTtcbmdldFN0YXJ0ZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGVtYWlsLmZvY3VzKCkpO1xuXG5lbWFpbC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4gc3R5bGVJbnB1dFZhbGlkaXR5KGVtYWlsKSk7XG5lbWFpbC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4gc3R5bGVJbnB1dFZhbGlkaXR5KGVtYWlsKSk7XG5cbmNvdW50cnkuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHN0eWxlQ291bnRyeVZhbGlkaXR5KTtcbmNvdW50cnkuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIHN0eWxlQ291bnRyeVZhbGlkaXR5KTtcblxuemlwY29kZS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4gc3R5bGVJbnB1dFZhbGlkaXR5KHppcGNvZGUpKTtcbnppcGNvZGUuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHN0eWxlSW5wdXRWYWxpZGl0eSh6aXBjb2RlKSk7XG5cbnBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiBzdHlsZUlucHV0VmFsaWRpdHkocGFzc3dvcmQpKTtcbnBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiBzdHlsZUlucHV0VmFsaWRpdHkocGFzc3dvcmQpKTtcblxuY29uZmlybVBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiB7XG5cdGlmIChwYXNzd29yZC52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2ggfHwgIXBhc3N3b3JkLnZhbGlkaXR5LnZhbGlkKSByZXR1cm47XG5cblx0c3R5bGVDb25maXJtUGFzc3dvcmRWYWxpZGl0eSgpO1xufSk7XG5jb25maXJtUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcblx0aWYgKHBhc3N3b3JkLnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCB8fCAhcGFzc3dvcmQudmFsaWRpdHkudmFsaWQpIHJldHVybjtcblxuXHRzdHlsZUNvbmZpcm1QYXNzd29yZFZhbGlkaXR5KCk7XG59KTtcblxuc2hvd1Bhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGNvbnN0IG5ld0lucHV0VHlwZSA9IHBhc3N3b3JkLnR5cGUgPT09IFwicGFzc3dvcmRcIiA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwiO1xuXHRwYXNzd29yZC50eXBlID0gbmV3SW5wdXRUeXBlO1xuXHRjb25maXJtUGFzc3dvcmQudHlwZSA9IG5ld0lucHV0VHlwZTtcbn0pO1xuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG5jb25zdCBtb2RhbE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG5cbnNpZ25VcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRzdHlsZUFsbElucHV0c1ZhbGlkaXR5KCk7XG5cdHN0eWxlQ291bnRyeVZhbGlkaXR5KCk7XG5cblx0aWYgKCFjaGVja0Zvcm1WYWxpZGl0eSgpKSByZXR1cm47XG5cdG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdG1vZGFsT3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufSk7XG5cbi8vIFRPRE8gTElTVDpcbi8vIHNlbGVjdCBvcHRpb24gc3RvcCBmb2N1cyBzaG91bGQgY2hhbmdlIG91dGxpbmUgd2l0aG91dCB0YXAgdHdpY2Vcbi8vIGZpeCBnZXQgc3RhcnRlZCBub3QgcmVzcG9uc2l2ZSAocHJvYiB1c2UgbWF4IHdpZHRoKVxuLy8gZml4IHNpZ24gdXAgZm9ybSBub3QgaGVpZ2h0IDEwMCB2aFxuLy8gbWF5YmUgYWRkIG1vYmlsZSBkZXNpZ24gbWVkaWFzIHF1ZXJ5XG4vLyBhbW9uZyB1cyBzdXNzeSAxMjNcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==