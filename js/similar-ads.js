import { compareAllFields } from './filters.js';
import { closePopup, createMarkers, resetMarkersLayerGroup } from './map.js';
import { showAlert } from './util.js';

const MAX_SIMILAR_ADS_SHOWN = 10;
const mapFilters = document.querySelectorAll('.map__filter');
const mapFeatures = document.querySelectorAll('[name="features"]');


const onAnyFieldChange = (cb) => {
  mapFilters.forEach((item) => item.addEventListener('change', cb));
  mapFeatures.forEach((item) => item.addEventListener('change', cb));
};


const filterAds = (otherAds) => {
  closePopup();
  resetMarkersLayerGroup();
  const filteredAds = [];
  for (const ad of otherAds) {
    const filterValue = compareAllFields(ad);
    if (filteredAds.length >= MAX_SIMILAR_ADS_SHOWN) {
      break;
    }
    if (filterValue) {
      filteredAds.push(ad);
    }
  }
  filteredAds.forEach((ad) => createMarkers(ad));
  if (filteredAds.length === 0) {
    showAlert('Не нашлось подходящих объявлений, попробуйте изменить настройки фильтров');
  }
};

const renderSimilarAds = (otherAds) => {
  otherAds
    .slice(0, MAX_SIMILAR_ADS_SHOWN)
    .forEach((ad) => createMarkers(ad));
};

export { renderSimilarAds, onAnyFieldChange, filterAds };
