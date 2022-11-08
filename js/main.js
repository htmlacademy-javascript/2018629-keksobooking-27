import {createMap, createMarkers} from './map.js';
import {turnFormOff, setFormSubmit } from './form.js';
import {turnFiltersOff} from './filters.js';
import { getData } from './api.js';
import { showSuccessMessage } from './modal.js';

const INIT_LOCATION = {
  lat: 35.68211,
  lng: 139.75364,
};

turnFiltersOff();
turnFormOff();

createMap(INIT_LOCATION);

getData((otherAds) => {
  const showedAds = otherAds.slice(0, 10);
  showedAds.forEach((ad) => {
    createMarkers(ad);
  });
});


setFormSubmit(showSuccessMessage);
