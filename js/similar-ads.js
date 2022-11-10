import { compareTwoFields } from './filters.js';
import { closePopup, createMarkers, resetMarkersLayerGroup } from './map.js';

const MAX_SIMILAR_ADS_SHOWN = 10;
const mapFilters = document.querySelectorAll('.map__filter');
const mapFeatures = document.querySelectorAll('[name="features"]');


const onAnyFieldChange = (cb) => {
  mapFilters.forEach((item) => item.addEventListener('change', () => cb()));
  mapFeatures.forEach((item) => item.addEventListener('change', () => cb()));
};


const filterAll = (otherAds) => {
  closePopup();
  resetMarkersLayerGroup();
  otherAds
    .filter(compareTwoFields).slice(0, MAX_SIMILAR_ADS_SHOWN)
    .forEach((ad) => createMarkers(ad));
};

const renderSimilarAds = (otherAds) => {
  otherAds
    .slice(0, MAX_SIMILAR_ADS_SHOWN)
    .forEach((ad) => createMarkers(ad));
};

export { renderSimilarAds, onAnyFieldChange, filterAll };
