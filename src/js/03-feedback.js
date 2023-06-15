import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const STORAGE_KEY = 'feedback-form-stage';
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

let formData = {};
refs.form.addEventListener('submit', onForSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));
populateTextarea();

function onForSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}

function onTextareaInput(event) {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;
  formData[fieldName] = fieldValue;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
  const formDataString = localStorage.getItem(STORAGE_KEY);
  if (!formDataString) {
    return;
  }
  formData = JSON.parse(formDataString);

  for (const name of Object.keys(formData)) {
    const formElement = refs.form[name];
    formElement.value = formData[name];
  }
}
