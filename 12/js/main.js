import { createMap, INIT_LOCATION } from './map.js';
import { turnFormOff, setFormSubmit } from './form.js';
import { turnFiltersOff} from './filters.js';
import { getData } from './api.js';
import { showSuccessMessage } from './modal.js';
import { renderSimilarAds, onAnyFieldChange, filterAll } from './similar-ads.js';
import { debounce } from './util.js';
import './picture-preview.js';

const RERENDER_DELAY = 500;

turnFiltersOff();
turnFormOff();

createMap(INIT_LOCATION);

getData((otherAds) => {
  renderSimilarAds(otherAds);
  onAnyFieldChange(debounce(() => filterAll(otherAds), RERENDER_DELAY));
});

setFormSubmit(showSuccessMessage);
