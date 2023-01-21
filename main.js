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
email.addEventListener("focusout", () => checkInputValidityToStyle(email));

country.addEventListener("keyup", () => checkInputValidityToStyle(country));
country.addEventListener("focusout", () => checkInputValidityToStyle(country));

zipcode.addEventListener("keyup", () => checkInputValidityToStyle(zipcode));
zipcode.addEventListener("focusout", () => checkInputValidityToStyle(zipcode));

password.addEventListener("keyup", () => checkInputValidityToStyle(password));
password.addEventListener("focusout", () =>
	checkInputValidityToStyle(password)
);

confirmPassword.addEventListener("keyup", () =>
	checkInputValidityToStyle(confirmPassword)
);
confirmPassword.addEventListener("focusout", () =>
	checkInputValidityToStyle(confirmPassword)
);

signUpButton.addEventListener("click", () =>
	checkInputValidityToStyle(signUpButton)
);

// signUpButton.addEventListener("click", (e) => {
// 	e.preventDefault();
// 	console.log(getValidationInput());
// });

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1haWxcIik7XG5jb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudHJ5XCIpO1xuY29uc3QgemlwY29kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjemlwY29kZVwiKTtcbmNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXNzd29yZFwiKTtcbmNvbnN0IGNvbmZpcm1QYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybS1wYXNzd29yZFwiKTtcbmNvbnN0IHNpZ25VcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbi11cC1idXR0b25cIik7XG5cbmZ1bmN0aW9uIGNoZWNrSW5wdXRWYWxpZGl0eVRvU3R5bGUoaW5wdXQpIHtcblx0aWYgKGlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG5cdFx0aW5wdXQuY2xhc3NOYW1lID0gXCJ2YWxpZFwiO1xuXHR9IGVsc2Uge1xuXHRcdGlucHV0LmNsYXNzTmFtZSA9IFwiaW52YWxpZFwiO1xuXHR9XG59XG5cbmVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiBjaGVja0lucHV0VmFsaWRpdHlUb1N0eWxlKGVtYWlsKSk7XG5lbWFpbC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4gY2hlY2tJbnB1dFZhbGlkaXR5VG9TdHlsZShlbWFpbCkpO1xuXG5jb3VudHJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiBjaGVja0lucHV0VmFsaWRpdHlUb1N0eWxlKGNvdW50cnkpKTtcbmNvdW50cnkuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IGNoZWNrSW5wdXRWYWxpZGl0eVRvU3R5bGUoY291bnRyeSkpO1xuXG56aXBjb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiBjaGVja0lucHV0VmFsaWRpdHlUb1N0eWxlKHppcGNvZGUpKTtcbnppcGNvZGUuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IGNoZWNrSW5wdXRWYWxpZGl0eVRvU3R5bGUoemlwY29kZSkpO1xuXG5wYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4gY2hlY2tJbnB1dFZhbGlkaXR5VG9TdHlsZShwYXNzd29yZCkpO1xucGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+XG5cdGNoZWNrSW5wdXRWYWxpZGl0eVRvU3R5bGUocGFzc3dvcmQpXG4pO1xuXG5jb25maXJtUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICgpID0+XG5cdGNoZWNrSW5wdXRWYWxpZGl0eVRvU3R5bGUoY29uZmlybVBhc3N3b3JkKVxuKTtcbmNvbmZpcm1QYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT5cblx0Y2hlY2tJbnB1dFZhbGlkaXR5VG9TdHlsZShjb25maXJtUGFzc3dvcmQpXG4pO1xuXG5zaWduVXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG5cdGNoZWNrSW5wdXRWYWxpZGl0eVRvU3R5bGUoc2lnblVwQnV0dG9uKVxuKTtcblxuLy8gc2lnblVwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuLy8gXHRlLnByZXZlbnREZWZhdWx0KCk7XG4vLyBcdGNvbnNvbGUubG9nKGdldFZhbGlkYXRpb25JbnB1dCgpKTtcbi8vIH0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9