import { turnFormOn, turnFormOff } from './form.js';
import { turnFiltersOn, turnFiltersOff } from './filters.js';
import { createAds } from './data.js';
import { createPopups } from './popup.js';

const addressField = document.querySelector('#address');
const similarAds = createAds(10);

turnFiltersOff();
turnFormOff();

const map = L.map('map-canvas')
  .on('load', () => {
    turnFiltersOn();
    turnFormOn();
  })
  .setView({
    lat: 35.68211,
    lng: 139.75364,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  {
    lat: 35.68211,
    lng: 139.75364,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  const newAddress = evt.target.getLatLng();
  addressField.value = `${newAddress.lat.toFixed(5)}, ${newAddress.lng.toFixed(5)}`;
});

const generalIcon = L.icon({
  iconUrl: './../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const markerGroup = L.layerGroup().addTo(map);

const createMarker = ({author, offer, location}) => {
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

similarAds.forEach((ad) => {
  createMarker(ad);
});

