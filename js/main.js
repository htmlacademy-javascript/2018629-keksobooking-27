import {createMap, INIT_LOCATION} from './map.js';
import {turnFormOff, setFormSubmit } from './form.js';
import {turnFiltersOff} from './filters.js';
import { getData } from './api.js';
import { showSuccessMessage } from './modal.js';
import { renderSimilarAds } from './similar-ads.js';

turnFiltersOff();
turnFormOff();

createMap(INIT_LOCATION);

getData((otherAds) => {
  renderSimilarAds(otherAds);
});

setFormSubmit(showSuccessMessage);
