// Функция из задания для получения случайного целого
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// Функция из задания для получения случайного числа с плавающей точкой
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
function getRandomPositiveFloat (a, b, digits = 1) {
  if (a < 0 || b < 0 || digits < 0) {
    return NaN;
  }
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

// Функция, возвращающая рандомный элемент из массива
function getRandomArrayElement (elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
}

// Функция для перевода чисел вида 1 2 3 в вид 01 02 03;
function getTwoDigitsNumber (n) {
  return (n < 10) ? `0${n}` : n;
}

// Функция для получения массива случайной длины из значений, заданных в другом массиве. Значения могут повторяться.
// Добавлена возможность выбирать максимальную длину нового массива
function getRandomLengthArray (data, maxLength) {
  const newArrayLength = getRandomPositiveInteger(1, maxLength);
  const newArray = [];

  for (let i = 0; i < newArrayLength; i++) {
    const newElementIndex = getRandomPositiveInteger(0, (data.length - 1));
    const newElement = data[newElementIndex];
    newArray.push(newElement);
  }

  return newArray;
}

// Функция для получения массива случайной длины из неповторяющихся значений другого массива

function getRandomLengthUniqueArray (data) {
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
}

export {getRandomPositiveFloat, getRandomPositiveInteger, getRandomArrayElement, getRandomLengthUniqueArray, getRandomLengthArray, getTwoDigitsNumber};
