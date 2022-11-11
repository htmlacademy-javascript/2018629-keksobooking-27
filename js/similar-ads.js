import { compareAllFields } from './filters.js';
import { closePopup, createMarkers, resetMarkersLayerGroup } from './map.js';
import { showAlert } from './util.js';

const MAX_SIMILAR_ADS_SHOWN = 10;
const ALERT_SHOWN_TIME = 1500;
const mapFilters = document.querySelectorAll('.map__filter');
const mapFeatures = document.querySelectorAll('[name="features"]');


const onAnyFieldChange = (cb) => {
  mapFilters.forEach((item) => item.addEventListener('change', cb));
  mapFeatures.forEach((item) => item.addEventListener('change', cb));
};


const filterAll = (otherAds) => {
  closePopup();
  resetMarkersLayerGroup();
  const filteredAds = otherAds.filter(compareAllFields).slice(0, MAX_SIMILAR_ADS_SHOWN);
  filteredAds.forEach((ad) => createMarkers(ad));
  if (filteredAds.length === 0) {
    showAlert('Не нашлось подходящих объявлений, попробуйте изменить настройки фильтров', ALERT_SHOWN_TIME);
  }
};

const renderSimilarAds = (otherAds) => {
  otherAds
    .slice(0, MAX_SIMILAR_ADS_SHOWN)
    .forEach((ad) => createMarkers(ad));
};

export { renderSimilarAds, onAnyFieldChange, filterAll };
