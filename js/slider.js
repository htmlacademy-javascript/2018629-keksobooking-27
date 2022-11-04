const sliderElement = document.querySelector('.ad-form__slider');
const priceField = document.querySelector('#price');
const apartType = document.querySelector('#type');
const minPrice = {
  'palace': 10000,
  'flat': 1000,
  'house': 5000,
  'bungalow': 0,
  'hotel': 3000,
};

const changeSliderOptionsOnType = (slider, type, priceVariants) => {
  type.addEventListener ('change', () => {
    if (type.value === 'bungalow') {
      slider.noUiSlider.updateOptions(
        {range: {
          min: 0,
          max: 10000,
        },
        start: 0,
        });
    } else {
      slider.noUiSlider.updateOptions(
        {range: {
          min: priceVariants[type.value],
          max: 100000,
        },
        // start: priceVariants[type.value],
        });
    }});
};

const createSlider = (slider, price, type, priceVariants) => {
  noUiSlider.create(slider, {
    range: {
      min: 0,
      max: 100000,
    },
    start: 1000,
    step: 1,
    connect: 'lower',
    format: {
      to: function (value) {
        return value.toFixed(0);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });

  slider.noUiSlider.on('update', () => {
    price.value = slider.noUiSlider.get();
  });

  price.addEventListener('change', () => {
    slider.noUiSlider.set(price.value);
  });

  changeSliderOptionsOnType(slider, type, priceVariants);
};

createSlider(sliderElement, priceField, apartType, minPrice);
