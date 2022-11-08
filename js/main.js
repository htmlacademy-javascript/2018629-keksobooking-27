import {createAds} from './data.js';
import {createMap, createMarkers} from './map.js';
import {turnFormOff} from './form.js';
import {turnFiltersOff} from './filters.js';

const INIT_LOCATION = {
  lat: 35.68211,
  lng: 139.75364,
};

const similarAds = createAds(10);

turnFiltersOff();
turnFormOff();

createMap(INIT_LOCATION);

similarAds.forEach((ad) => {
  createMarkers(ad);
});
