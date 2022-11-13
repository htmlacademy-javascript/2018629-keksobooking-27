import { createMap, InitLocation } from './map.js';
import { turnFormOff, setFormSubmit, onResetButtonClick} from './form.js';
import { turnFiltersOff, turnFiltersOn } from './filters.js';
import { getData } from './api.js';
import { showSuccessMessage } from './modal.js';
import { renderSimilarAds, onAnyFieldChange, filterAds } from './similar-ads.js';
import { debounce } from './util.js';

const RERENDER_DELAY = 500;

turnFiltersOff();
turnFormOff();

createMap(InitLocation);

let loadedAds;

getData((otherAds) => {
  loadedAds = otherAds;
  renderSimilarAds(otherAds);
  turnFiltersOn();
  onAnyFieldChange(debounce(() => filterAds(otherAds), RERENDER_DELAY));
  onResetButtonClick(() => renderSimilarAds(otherAds));
});

setFormSubmit(() => {
  showSuccessMessage();
  renderSimilarAds(loadedAds);
});
