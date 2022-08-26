const passwordField = document.getElementById('pwd');
const passwordConfirmField = document.getElementById('pwd_confirm');
const errorPwdField = document.getElementById('errorPwd');
const PWD_VALIDATION_ERROR_TEXT = "Passwords do not match";
passwordField.addEventListener('input', verifyPasswordsMatch);
passwordConfirmField.addEventListener('input', verifyPasswordsMatch);

function verifyPasswordsMatch(event) {
    if (passwordField.value !== passwordConfirmField.value) {
        passwordField.setCustomValidity(PWD_VALIDATION_ERROR_TEXT);
        passwordField.classList.add('error');

        passwordConfirmField.setCustomValidity(PWD_VALIDATION_ERROR_TEXT);
        passwordConfirmField.classList.add('error');

        errorPwdField.innerHTML = PWD_VALIDATION_ERROR_TEXT;
    } else {
        passwordField.setCustomValidity("");
        passwordField.classList.remove('error');

        passwordConfirmField.setCustomValidity("");
        passwordConfirmField.classList.remove('error');

        errorPwdField.innerHTML = "";
    }
}