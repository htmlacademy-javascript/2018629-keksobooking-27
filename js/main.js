// Проверка аргументов функций

function checkRangeValues (value1, value2) {
  if (value1 < 0 || value2 < 0 || typeof value1 !== 'number' || typeof value2 !== 'number') {
    return true;
  }
}

// Функция, возвращающая случайное целое число из переданного диапазона включительно

function getRandomInteger (min, max) {
  return checkRangeValues(min, max) ? NaN : Math.floor(Math.random() * (Math.abs(Math.floor(max) - Math.ceil(min)) + 1) + Math.ceil(Math.min(min, max)));
}

getRandomInteger(1,2);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

function getRoundedRandomValue (min, max, decimal) {
  return checkRangeValues(min, max) ? NaN : Math.round((Math.random() * Math.abs(max - min) + Math.min(min, max)) * Math.pow(10, decimal)) / Math.pow(10, decimal);
}

getRoundedRandomValue(0, 1, 5);
