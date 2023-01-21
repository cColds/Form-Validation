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

function checkInputValidityToStyle(input) {
	if (input.validity.valid) {
		input.className = "valid";
	} else {
		input.className = "invalid";
	}
}

email.addEventListener("keyup", () => checkInputValidityToStyle(email));
country.addEventListener("keyup", () => checkInputValidityToStyle(country));
zipcode.addEventListener("keyup", () => checkInputValidityToStyle(zipcode));
password.addEventListener("keyup", () => checkInputValidityToStyle(password));
confirmPassword.addEventListener("keyup", () =>
	checkInputValidityToStyle(confirmPassword)
);
signUpButton.addEventListener("keyup", () =>
	checkInputValidityToStyle(signUpButton)
);

// signUpButton.addEventListener("click", (e) => {
// 	e.preventDefault();
// 	console.log(getValidationInput());
// });

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtYWlsXCIpO1xuY29uc3QgY291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY291bnRyeVwiKTtcbmNvbnN0IHppcGNvZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ppcGNvZGVcIik7XG5jb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzc3dvcmRcIik7XG5jb25zdCBjb25maXJtUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmZpcm0tcGFzc3dvcmRcIik7XG5jb25zdCBzaWduVXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ24tdXAtYnV0dG9uXCIpO1xuXG5mdW5jdGlvbiBjaGVja0lucHV0VmFsaWRpdHlUb1N0eWxlKGlucHV0KSB7XG5cdGlmIChpbnB1dC52YWxpZGl0eS52YWxpZCkge1xuXHRcdGlucHV0LmNsYXNzTmFtZSA9IFwidmFsaWRcIjtcblx0fSBlbHNlIHtcblx0XHRpbnB1dC5jbGFzc05hbWUgPSBcImludmFsaWRcIjtcblx0fVxufVxuXG5lbWFpbC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4gY2hlY2tJbnB1dFZhbGlkaXR5VG9TdHlsZShlbWFpbCkpO1xuY291bnRyeS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4gY2hlY2tJbnB1dFZhbGlkaXR5VG9TdHlsZShjb3VudHJ5KSk7XG56aXBjb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiBjaGVja0lucHV0VmFsaWRpdHlUb1N0eWxlKHppcGNvZGUpKTtcbnBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiBjaGVja0lucHV0VmFsaWRpdHlUb1N0eWxlKHBhc3N3b3JkKSk7XG5jb25maXJtUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICgpID0+XG5cdGNoZWNrSW5wdXRWYWxpZGl0eVRvU3R5bGUoY29uZmlybVBhc3N3b3JkKVxuKTtcbnNpZ25VcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT5cblx0Y2hlY2tJbnB1dFZhbGlkaXR5VG9TdHlsZShzaWduVXBCdXR0b24pXG4pO1xuXG4vLyBzaWduVXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4vLyBcdGUucHJldmVudERlZmF1bHQoKTtcbi8vIFx0Y29uc29sZS5sb2coZ2V0VmFsaWRhdGlvbklucHV0KCkpO1xuLy8gfSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=