const filters = document.querySelector('.map__filters');

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

export {turnFiltersOn, turnFiltersOff};
