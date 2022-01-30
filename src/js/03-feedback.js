import throttle from 'lodash/throttle';

const _ = require('lodash');
const formInput = document.querySelector('.feedback-form');

let userInput = { email: '', password: '' };

if (localStorage.getItem('feedback-form-state')) {
  userInput = JSON.parse(localStorage.getItem('feedback-form-state'));
}

if (userInput.email.length > 0 || userInput.password.length > 0) {
  formInput.elements.namedItem('email').value = userInput.email;
  formInput.elements.namedItem('message').value = userInput.password;
}

function updateValue(e) {
  userInput.email = formInput.elements.namedItem('email').value;
  userInput.password = formInput.elements.namedItem('message').value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userInput));
}

var throttled = _.throttle(updateValue, 500);

formInput.addEventListener('input', throttled);

function refreshFields(e) {
  e.preventDefault();
  console.log(`email: ${userInput.email}, password: ${userInput.password}`);
  formInput.elements.namedItem('email').value = '';
  formInput.elements.namedItem('message').value = '';
  localStorage.clear();
}

formInput.addEventListener('submit', refreshFields);