
const checkLogin = (value) => {
    return false;
};

const checkPassword = (value) => {
    return false;
};

const loginField = document.querySelector("#login");
const passwordField = document.querySelector("#password");
const submitButton = document.querySelector('[type = submit]');

console.log(loginField);
console.log(passwordField);
console.log(submitButton);

//is login valid

const submitButtonClickHandle = (e) => {
    e.preventDefault();
    const button = e.target;
    const form = button.parentElement;
    console.log (e);
    console.log(button);
    console.log(form);

    const isFormValid = checkLogin() && checkPassword();

    if (isFormValid){
        form.submit();
    } else {
        'error';
    }
}

const submitButton = document.querySelector( '[type = submit]');
submitButton.addEventListener('click', submitButtonClickHandle);