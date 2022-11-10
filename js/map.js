import { turnFormOn } from './form.js';
import { turnFiltersOn } from './filters.js';
import { createPopups } from './popup.js';

const INIT_LOCATION = {
  lat: 35.68211,
  lng: 139.75364,
};

const addressField = document.querySelector('#address');

const map = L.map('map-canvas');
const mainMarker = L.marker([0,0], {draggable: true});
const markerGroup = L.layerGroup().addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const createMainMarker = (coordinate) => {
  mainMarker
    .setLatLng(coordinate)
    .setIcon(mainPinIcon)
    .addTo(map);

  mainMarker.on('moveend', (evt) => {
    const newAddress = evt.target.getLatLng();
    addressField.value = `${newAddress.lat.toFixed(5)}, ${newAddress.lng.toFixed(5)}`;
  });
};

const generalIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const createMarkers = ({author, offer, location}) => {
  const marker = L.marker(
    location,
    {
      icon: generalIcon
    },
  );
  marker
    .addTo(markerGroup)
    .bindPopup(createPopups({author, offer}));
};

const createMap = (coordinate) => {
  map.on('load', () => {
    turnFiltersOn();
    turnFormOn();
  });

  map.setView(
    coordinate,
    12
  );

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  createMainMarker(coordinate);
};

const resetMap = () => {
  map.setView(
    INIT_LOCATION, 12);
  mainMarker.setLatLng(
    INIT_LOCATION
  );
  map.closePopup();
};

export {INIT_LOCATION, createMarkers, createMap, resetMap};
