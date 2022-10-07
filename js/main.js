// Функция, возвращающая случайное целое число из переданного диапазона включительно

function getRandomInteger (min, max) {
  if(min < 0 || max < 0 || typeof min !== 'number' || typeof max !== 'number') {
    return NaN;
  }

  return Math.floor(Math.random() * (Math.abs(Math.floor(max) - Math.ceil(min)) + 1) + Math.ceil(Math.min(min, max)));
}

getRandomInteger(1,2);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

function getRoundedRandomValue (min, max, decimal) {
  if(min < 0 || max < 0 || typeof min !== 'number' || typeof max !== 'number') {
    return NaN;
  }

  return Math.round((Math.random() * Math.abs(max - min) + Math.min(min, max)) * Math.pow(10, decimal)) / Math.pow(10, decimal);
}

getRoundedRandomValue(0, 1, 5);
