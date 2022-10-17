import {getRandomPositiveFloat, getRandomPositiveInteger, getRandomArrayElement, getRandomLengthUniqueArray, getRandomLengthArray, getTwoDigitsNumber} from './util.js';

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

// Функция создания нового объекта в Кексобукинге. Состоит из создания аватара и создания самого объявления

function createAvatar (index) {
  const addressNumber = getTwoDigitsNumber(index + 1);
  return `img/avatars/user${addressNumber}.png`;
}

function createAd (elements, index) {
  const locationLat = getRandomPositiveFloat(MIN_LAT, MAX_LAT, 5);
  const locationLng = getRandomPositiveFloat(MIN_LNG, MAX_LNG, 5);
  return {
    author : {
      avatar: createAvatar(index),
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
      features: getRandomLengthUniqueArray(OBJECT_FEATURES),
      description: getRandomArrayElement(OBJECT_DESCRIPTION),
      photos: getRandomLengthArray(OBJECT_PHOTOS, 10),
    },
    location: {
      lat: locationLat,
      lng: locationLng,
    },
  };
}

const createAds = () => Array.from({length: SIMILAR_ADS_COUNT}, createAd);

export {createAds};
