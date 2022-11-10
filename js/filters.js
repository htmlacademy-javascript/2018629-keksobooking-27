const filters = document.querySelector('.map__filters');

// Функции активации и дезактивации фильтров
const turnFiltersOff = () => {
  filters.classList.add('map__filters--disabled');
  filters.querySelectorAll('.map__filter').forEach((select) => {
    select.disable = true;
  });
  filters.querySelector('.map__features').disable = true;
};

const turnFiltersOn = () => {
  filters.classList.remove('map__filters--disabled');
  filters.querySelectorAll('.map__filter').forEach((select) => {
    select.disable = false;
  });
  filters.querySelector('.map__features').disable = false;
};

// Функции для фильтрации объявлений с помощью фильтров

const getcheckedCheckboxes = (featuresArray) => {
  const checkedCheckboxes = [];
  featuresArray.forEach((item) => {
    if (item.checked) {
      checkedCheckboxes.push(item.value);
    }
  });
  return checkedCheckboxes;
};

const getPriceRange = (value) => {
  let priceRange;
  if (value < 10000) {
    priceRange = 'low';
  } else if (value >= 10000 && value < 50000) {
    priceRange = 'middle';
  } else if (value >= 50000) {
    priceRange = 'high';
  }

  return priceRange;
};

const compareAllFields = ({offer}) => {
  const housingTypeInput = filters.querySelector('[name="housing-type"]');
  const housingPriceInput = filters.querySelector('[name="housing-price"]');
  const housingRoomsInput = filters.querySelector('[name="housing-rooms"]');
  const housingGuestsInput = filters.querySelector('[name="housing-guests"]');
  const mapFeatures = document.querySelectorAll('[name="features"]');
  const priceRange = getPriceRange(offer.price);
  const checkedFeatures = getcheckedCheckboxes(mapFeatures);
  return (offer.type === housingTypeInput.value || housingTypeInput.value === 'any')
    &&
      (priceRange === housingPriceInput.value || housingPriceInput.value === 'any')
      &&
        (offer.rooms.toString() === housingRoomsInput.value || housingRoomsInput.value === 'any')
        &&
          (offer.guests.toString() === housingGuestsInput.value || housingGuestsInput.value === 'any')
          &&
            (checkedFeatures.length === 0 || offer.features && checkedFeatures.every((element) => offer.features.includes(element)));
};

export {turnFiltersOn, turnFiltersOff, compareAllFields};
