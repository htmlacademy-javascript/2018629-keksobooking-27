import { isEscapeKey } from './util.js';

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');

const errorMessage = errorTemplate.cloneNode(true);
errorMessage.classList.add('hidden');
document.body.append(errorMessage);

const successMessage = successTemplate.cloneNode(true);
successMessage.classList.add('hidden');
document.body.append(successMessage);

const closeErrorModal = () => {
  errorMessage.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
};
const closeSuccessModal = () => {
  successMessage.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
};

function onPopupEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    closeErrorModal();
    closeSuccessModal();
  }
}

const onErrorMessageOpen = (message) => {
  const errorButton = message.querySelector('.error__button');
  errorButton.addEventListener('click', () => closeErrorModal());
};

const showErrorMessage = () => {
  errorMessage.classList.remove('hidden');
  onErrorMessageOpen(errorMessage);
  document.addEventListener('keydown', onPopupEscKeydown);
  errorMessage.addEventListener('click', () => closeErrorModal());
};

const showSuccessMessage = () => {
  successMessage.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
  successMessage.addEventListener('click', () => closeSuccessModal());
};


export {showErrorMessage, showSuccessMessage};
