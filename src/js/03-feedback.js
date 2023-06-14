import throttle from 'lodash.throttle';
//import '.../css/common.css';
//import '.../css/03-feedback.css';

const STORAGE_KEY = 'feedback-form-stage';
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};
//var throttle = require('lodash.throttle');

let formData = {};
refs.form.addEventListener('submit', onForSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));
populateTextarea();

function onForSubmit(event) {
  event.preventDefoult();
  console.log('Відправляємо форму');
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(event) {
  const message = event.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}
function populateTextarea(event) {
  //let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  const savedMessage = localStorage.setItem(STORAGE_KEY);
  if (formData) {
    //if()
    console.log(savedMessage);
    refs.textarea.value = savedMessage;
  }
}
