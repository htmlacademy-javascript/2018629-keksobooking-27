const MAX_LOW_PRICE = 10000;
const MAX_MEDIUM_PRICE = 50000;
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

const resetFilters = () => filters.reset();

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
  if (value < MAX_LOW_PRICE) {
    priceRange = 'low';
  } else if (value >= MAX_LOW_PRICE && value <= MAX_MEDIUM_PRICE) {
    priceRange = 'middle';
  } else if (value > MAX_MEDIUM_PRICE) {
    priceRange = 'high';
  }

  return priceRange;
};

const compareHousingType = (type) => {
  const housingTypeInput = filters.querySelector('[name="housing-type"]');
  return type === housingTypeInput.value || housingTypeInput.value === 'any';
};

const compareHousingPrice = (price) => {
  const housingPriceInput = filters.querySelector('[name="housing-price"]');
  const priceRange = getPriceRange(price);
  return priceRange === housingPriceInput.value || housingPriceInput.value === 'any';
};

const compareHousingRooms = (rooms) => {
  const housingRoomsInput = filters.querySelector('[name="housing-rooms"]');
  return rooms.toString() === housingRoomsInput.value || housingRoomsInput.value === 'any';
};

const compareHousingGuests = (guests) => {
  const housingGuestsInput = filters.querySelector('[name="housing-guests"]');
  return guests.toString() === housingGuestsInput.value || housingGuestsInput.value === 'any';
};

const compareHousingFeatures = (features) => {
  const mapFeatures = document.querySelectorAll('[name="features"]');
  const checkedFeatures = getcheckedCheckboxes(mapFeatures);
  return checkedFeatures.length === 0 || features && checkedFeatures.every((element) => features.includes(element));
};

const compareAllFields = ({offer}) =>
  compareHousingType(offer.type)
  && compareHousingPrice(offer.price)
  && compareHousingRooms(offer.rooms)
  && compareHousingGuests(offer.guests)
  && compareHousingFeatures(offer.features);

export {turnFiltersOn, turnFiltersOff, resetFilters, compareAllFields};
