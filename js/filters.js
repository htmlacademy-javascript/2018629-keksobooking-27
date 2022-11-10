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

const compareHousingType = ({offer}) => {
  const housingTypeInput = filters.querySelector('[name="housing-type"]');
  return offer.type === housingTypeInput.value;
};

export {turnFiltersOn, turnFiltersOff, compareHousingType};
