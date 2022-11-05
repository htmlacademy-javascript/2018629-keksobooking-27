const sliderElement = document.querySelector('.ad-form__slider');
const priceField = document.querySelector('#price');

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
};

createSlider(sliderElement, priceField);
