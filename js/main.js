//константы из задания

const OBJECT_TITLES = [
  'Потрясающие хоромы',
  'Подземная лачуга',
  'Котовья нора',
  'Аппартаменты класса люкс',
  'Лучший отель в мире',
  'Жилье для неприхотливых',
  'Царские палаты',
  'Почти как дома',
  'Домик с уточкой',
  'Императорский дворец'
];

const OBJECT_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHECKIN_TIME = [
  '12:00',
  '13:00',
  '14:00'
];

const CHECKOUT_TIME = [
  '12:00',
  '13:00',
  '14:00'
];

const OBJECT_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const OBJECT_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const OBJECT_DESCRIPTION = [
  'Что привлекает внимание, так это роскошная обстановка. Помещение довольно маленькое. Здесь довольно чисто и садиться за стол можно без боязни испачкать одежду.',
  'Неплохое заведение - тут явно можно хорошо отдохнуть. Помещение довольно маленькое. Видно, что тут убирают, но не часто.',
  'Заведение ничем не выделяется из десятков других. Помещение совсем небольшое. Здесь довольно чисто и садиться за стол можно без боязни испачкать одежду.',
  'Сразу бросается в глаза, что тут очень скудное убранство Помещение среднего размера. Обслуживание вполне приемлемое - по крайней мере за посетителями подметают крошки со столов.',
  'Помещение совсем небольшое. Обслуживание вполне приемлемое',
  'Здесь немного неряшливо, но на это можно закрыть глаза.',
  'Поговаривают в народе, что тут вроде бы древний могильник, да и место плохое. Также говорят, что из-под поверхности земли здесь, в некоторые ночи раздается странный гул.',
  'Старики рассказывают, что здесь находятся врата в древний лабиринт. Ходят слухи, что феи и странные порождения теней встречаются здесь чаще, чем хотелось бы.',
  'В книгах пишут, что великий храм прошлых дней возвышался тут в незапамятные времена. Кроме легенд и россказней местных, ничего особенного здесь никогда и не происходило.',
  'Люди приходят сюда искать исцеления, а большие празднества обычно совершаются в новолуние. Ходят слухи, что здесь порой можно услышать странные голоса.'
];

const MAX_LAT = 35.70000;
const MIN_LAT = 35.65000;
const MAX_LNG = 139.80000;
const MIN_LNG = 139.70000;

const SIMILAR_ADS_COUNT = 10;

const avatarNumbers = getUniqueIntegersArray(1, 10);

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

getRandomPositiveInteger();

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

getRandomPositiveFloat();

// Функция для создания массива неповторяющихся случайных целых чисел в заданном диапазоне

function getUniqueIntegersArray (min, max) {
  const uniqueIntegersArray = [];
  const arrayLength = Math.abs(max - min) + 1;
  for (let i = 0; i < arrayLength; i++) {
    const randomValue = getRandomPositiveInteger(min, max);
    if (uniqueIntegersArray.includes(randomValue)) {
      i -= 1;
    } else {
      uniqueIntegersArray.push(randomValue);
    }
  }
  return uniqueIntegersArray;
}

getUniqueIntegersArray();

// Функция, возвращающая рандомный элемент из массива

function getRandomArrayElement (elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
}

// Функция для перевода чисел вида 1 2 3 в вид 01 02 03;

function getTwoDigitsNumber (n) {
  return (n < 10) ? `0${n.toString()}` : n.toString();
}

getTwoDigitsNumber(5);

// Функция для получения массива случайной длины из значений, заданных в другом массиве. Значения могут повторяться.

function getRandomLengthArray (...data) {
  const dataArray = data;
  const newArrayLength = getRandomPositiveInteger(1, 10);
  const newArray = [];

  for (let i = 0; i < newArrayLength; i++) {
    const newElementIndex = getRandomPositiveInteger(0, (dataArray.length - 1));
    const newElement = dataArray[newElementIndex];
    newArray.push(newElement);
  }

  return newArray;
}

getRandomLengthArray();

// Функция для получения массива случайной длины из неповторяющихся значений другого массива

function getRandomLengthUniqueArray (...data) {
  const dataArray = data;
  const newArrayLength = getRandomPositiveInteger(1, data.length);
  const newUniqueArray = [];

  for (let i = 0; i < newArrayLength; i++) {
    const newElementIndex = getRandomPositiveInteger(0, (dataArray.length - 1));
    const newElement = dataArray[newElementIndex];

    if (newUniqueArray.includes(newElement)) {
      i -= 1;
    } else {
      newUniqueArray.push(newElement);
    }
  }

  return newUniqueArray;
}

getRandomLengthUniqueArray();


// Функция создания нового объекта в Кексобукинге. Состоит из создания аватара и создания самого объявления

// Функция создания аватара. Съедает по одному элементу созданного массива номеров при вызове, поэтому после генерации 10 объектов больше не вызывается
function createAvatar () {
  const avatarIndex = getRandomPositiveInteger(0, (avatarNumbers.length - 1));
  const avatarNumber = avatarNumbers[avatarIndex];
  avatarNumbers.splice(avatarIndex, 1);
  const addressNumber = getTwoDigitsNumber(avatarNumber);
  return `img/avatars/user${addressNumber}.png`;
}

function createAd () {
  const locationLat = getRandomPositiveFloat(MIN_LAT, MAX_LAT, 5);
  const locationLng = getRandomPositiveFloat(MIN_LNG, MAX_LNG, 5);
  return {
    author : {
      avatar: createAvatar(),
    },
    offer: {
      title: getRandomArrayElement(OBJECT_TITLES),
      address: `${locationLat}, ${locationLng}`,
      price: getRandomPositiveInteger(100, 1000),
      type: getRandomArrayElement(OBJECT_TYPES),
      rooms: getRandomPositiveInteger(1, 10),
      guests: getRandomPositiveInteger(1, 10),
      checkin: getRandomArrayElement(CHECKIN_TIME),
      checkout: getRandomArrayElement(CHECKOUT_TIME),
      features: getRandomLengthUniqueArray(...OBJECT_FEATURES),
      description: getRandomArrayElement(OBJECT_DESCRIPTION),
      photos: getRandomLengthArray(...OBJECT_PHOTOS),
    },
    location: {
      lat: locationLat,
      lng: locationLng,
    },
  };
}

// Отключает eslint, чтобы не ругался на объявленную, но не использованную переменную
// eslint-disable-next-line
const similarAds = Array.from({length: SIMILAR_ADS_COUNT}, createAd);

