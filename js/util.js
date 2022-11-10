// Функция из задания для получения случайного целого
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция из задания для получения случайного числа с плавающей точкой
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomPositiveFloat = (a, b, digits = 1) => {
  if (a < 0 || b < 0 || digits < 0) {
    return NaN;
  }
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
};

// Функция, возвращающая рандомный элемент из массива
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// Функция для перевода чисел вида 1 2 3 в вид 01 02 03;
const getTwoDigitsNumber = (n) => (n < 10) ? `0${n}` : n;

// Функция для получения массива случайной длины из значений, заданных в другом массиве. Значения могут повторяться.
// Добавлена возможность выбирать максимальную длину нового массива
const getRandomLengthArray = (data, maxLength) => {
  const newArrayLength = getRandomPositiveInteger(1, maxLength);
  const newArray = [];

  for (let i = 0; i < newArrayLength; i++) {
    const newElementIndex = getRandomPositiveInteger(0, (data.length - 1));
    const newElement = data[newElementIndex];
    newArray.push(newElement);
  }

  return newArray;
};

// Функция для получения массива случайной длины из неповторяющихся значений другого массива

const getRandomLengthUniqueArray = (data) => {
  const newArrayLength = getRandomPositiveInteger(1, data.length);
  const newUniqueArray = [];

  for (let i = 0; i < newArrayLength; i++) {
    const newElementIndex = getRandomPositiveInteger(0, (data.length - 1));
    const newElement = data[newElementIndex];
    while (!newUniqueArray.includes(newElement)) {
      newUniqueArray.push(newElement);
    }
  }

  return newUniqueArray;
};

// Проверка кнопки
const isEscapeKey = (evt) => evt.key === 'Escape';

// создание сообщения об ошибке
const showAlert = (message) => {
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
  }, 5000);
};

// Функция для устранения дребезга
// Источник - https://www.freecodecamp.org/news/javascript-debounce-example
function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

// Функция для пропуска кадров
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_throttle

function throttle (callback, delayBetweenFrames) {
  let lastTime = 0;

  return (...rest) => {
    const now = new Date();
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}

export {getRandomPositiveFloat, getRandomPositiveInteger, getRandomArrayElement, getRandomLengthUniqueArray, getRandomLengthArray, getTwoDigitsNumber, isEscapeKey, showAlert, debounce, throttle};
