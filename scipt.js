'use strict'

const form = document.querySelector('.form');
const email = document.getElementById('email')

function setError(input, message) {
    const inputControl = input.parentElement;
    const displayMessage = inputControl.querySelector('.message');

    displayMessage.innerText = message;
    inputControl.classList.remove('success');
    inputControl.classList.add('error');
}

function setSuccess(input, message) {
    const inputControl = input.parentElement;
    const displayMessage = inputControl.querySelector('.message');

    displayMessage.innerText = message;
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
}

function validEmail(value) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
}

function validateInputs() {
    const emailValue = email.value.trim();

    if (emailValue === '') {
        setError(email, 'Field cannot be empty')
    } else if (!validEmail(emailValue)) {
        setError(email, 'Oops! Please check your email')
    } else {
        setSuccess(email, 'Successful submission!')

        form.reset();
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs()
})