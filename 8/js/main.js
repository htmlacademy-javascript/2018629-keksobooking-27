import { createAds } from './data.js';
import { createPopups } from './popup.js';
import { turnFormOff, turnFormOn } from './form.js';
import { turnFiltersOff, turnFiltersOn } from './filters.js';

const similarAds = createAds(1);

createPopups(similarAds);

// вызовы функций по разу ради молчания линтера, потом уберу
turnFormOff();
turnFormOn();

turnFiltersOff();
turnFiltersOn();
