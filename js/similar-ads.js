import { compareHousingType } from './filters.js';
import { closePopup, createMarkers, resetMarkersLayerGroup } from './map.js';

const MAX_SIMILAR_ADS_SHOWN = 10;
const housingTypeInput = document.querySelector('[name="housing-type"]');

const filterHousingType = (otherAds) => {
  // debugger;
  closePopup();
  resetMarkersLayerGroup();
  const newAds = otherAds.filter(compareHousingType).slice(0, MAX_SIMILAR_ADS_SHOWN);
  newAds.forEach((ad) => createMarkers(ad));
};

const onHousingFilterChange = (cb) => {
  housingTypeInput.addEventListener('change', () => cb());
};

const renderSimilarAds = (otherAds) => {
  const showedAds = otherAds.slice(0, 10);
  showedAds.forEach((ad) => createMarkers(ad));
  onHousingFilterChange(() => filterHousingType(otherAds));
};

export { renderSimilarAds };
