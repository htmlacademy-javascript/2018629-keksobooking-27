const form = document.querySelector('.ad-form');

const turnFormOff = () => {
  form.classList.add('ad-form--disabled');
  form.querySelectorAll('.ad-form__element').forEach((fieldset) => {
    fieldset.disable = true;
  });
};

const turnFormOn = () => {
  form.classList.remove('ad-form--disabled');
  form.querySelectorAll('.ad-form__element').forEach((fieldset) => {
    fieldset.disable = false;
  });
};


// Валидация формы при помощи библиотеки Pristine

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'text-help',
});

// Поле «Тип жилья» влияет на минимальное значение поля «Цена за ночь»:

const priceField = form.querySelector('#price');
const minPrice = {
  'palace': 10000,
  'flat': 1000,
  'house': 5000,
  'bungalow': 0,
  'hotel': 3000,
};

const validatePrice = (value) => {
  const type = form.querySelector('[name="type"]');
  return parseInt(value, 10) >= minPrice[type.value];
};

const getPriceErrorMessage = () => {
  const type = form.querySelector('[name="type"]');
  return `Цена не менее ${minPrice[type.value]} для такого жилья`;
};

pristine.addValidator(priceField, validatePrice, getPriceErrorMessage);

const onTypeChange = function () {
  priceField.placeholder = minPrice[this.value];
  pristine.validate(priceField);
};

form.querySelector('[name="type"]').addEventListener('change', onTypeChange);


// Поле «Количество комнат» синхронизировано с полем «Количество мест» таким образом, что при выборе количества комнат вводятся ограничения на допустимые варианты выбора количества гостей:

const roomsField = form.querySelector('[name="rooms"]');
const capacityField = form.querySelector('[name="capacity"]');
const capacityOption = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0'],
};

const validateCapacity = () => capacityOption[roomsField.value].includes(capacityField.value);

pristine.addValidator(roomsField, validateCapacity, 'Маловато комнат');
pristine.addValidator(capacityField, validateCapacity, 'Многовато гостей');

const onCapacityChange = () => pristine.validate(roomsField);
const onRoomsChange = () => pristine.validate(capacityField);

roomsField.addEventListener('change', onRoomsChange);
capacityField.addEventListener('change', onCapacityChange);


// Поля «Время заезда» и «Время выезда» синхронизированы:

const checkinTime = form.querySelector('[name="timein"]');
const checkoutTime = form.querySelector('[name="timeout"]');

const onCheckinChange = () => {
  checkoutTime.value = checkinTime.value;
};
const onCheckoutChange = () => {
  checkinTime.value = checkoutTime.value;
};

checkinTime.addEventListener('change', onCheckinChange);
checkoutTime.addEventListener('change', onCheckoutChange);


// Валидация формы при сабмите

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    form.submit();
  } else {
  // eslint-disable-next-line
    console.log('Ашыпка');
  }
});

// Создание слайдера и валидация значения, получаемого через слайдер
const sliderElement = document.querySelector('.ad-form__slider');

const createSlider = (slider, price) => {
  noUiSlider.create(slider, {
    range: {
      min: 0,
      max: 100000,
    },
    start: 1000,
    step: 1,
    connect: 'lower',
    format: {
      to: (value) => value.toFixed(0),
      from: (value) => parseFloat(value),
    },
  });
  slider.noUiSlider.on('start', () => {
    slider.noUiSlider.on('update', () => {
      price.value = slider.noUiSlider.get();
      pristine.validate(priceField);
    });
  });

  price.addEventListener('change', () => {
    slider.noUiSlider.set(price.value);
  });
};

createSlider(sliderElement, priceField);


export {turnFormOn, turnFormOff};
