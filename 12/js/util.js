// Проверка кнопки
const isEscapeKey = (evt) => evt.key === 'Escape';

// создание сообщения об ошибке
const showAlert = (message, timeout = 5000) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '200';
  alertContainer.style.position = 'absolute';
  alertContainer.style.width = '50%';
  alertContainer.style.left = '25%';
  alertContainer.style.top = '30px';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'rgba(255, 150, 150, 0.9)';
  alertContainer.style.borderColor = '#ff6d51';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, timeout);
};

// Функция для устранения дребезга
// Источник - https://www.freecodecamp.org/news/javascript-debounce-example
const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {isEscapeKey, showAlert, debounce};
