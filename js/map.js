import { turnFormOn } from './form.js';
import { createPopup } from './popup.js';

const DEFAULT_ZOOM = 12;
const DIGITS_IN_COORDINATE = 5;
const MAIN_PIN_ICON_SIZE = 52;
const MAIN_PIN_IMAGE = 'img/main-pin.svg';
const GENERAL_PIN_ICON_SIZE = 40;
const GENERAL_PIN_IMAGE = 'img/pin.svg';
const InitLocation = {
  LAT: 35.68211,
  LNG: 139.75364,
};

const addressField = document.querySelector('#address');

const map = L.map('map-canvas');
const mainMarker = L.marker([0,0], {draggable: true});
const markerGroup = L.layerGroup();
const openStreetMapLayer = L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
);

const mainPinIcon = L.icon({
  iconUrl: MAIN_PIN_IMAGE,
  iconSize: [MAIN_PIN_ICON_SIZE, MAIN_PIN_ICON_SIZE],
  iconAnchor: [MAIN_PIN_ICON_SIZE / 2, MAIN_PIN_ICON_SIZE],
});

const createMainMarker = (coordinate) => {
  mainMarker
    .setLatLng(
      {
        lat: coordinate.LAT,
        lng: coordinate.LNG,
      })
    .setIcon(mainPinIcon)
    .addTo(map);

  mainMarker.on('moveend', (evt) => {
    const newAddress = evt.target.getLatLng();
    addressField.value = `${newAddress.lat.toFixed(DIGITS_IN_COORDINATE)}, ${newAddress.lng.toFixed(DIGITS_IN_COORDINATE)}`;
  });
};

const generalIcon = L.icon({
  iconUrl: GENERAL_PIN_IMAGE,
  iconSize: [GENERAL_PIN_ICON_SIZE, GENERAL_PIN_ICON_SIZE],
  iconAnchor: [GENERAL_PIN_ICON_SIZE / 2, GENERAL_PIN_ICON_SIZE],
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
    .bindPopup(createPopup({author, offer}));
};

const createMap = (coordinate) => {
  map
    .on('load', turnFormOn)
    .setView(
      {
        lat: coordinate.LAT,
        lng: coordinate.LNG,
      },
      DEFAULT_ZOOM
    );

  openStreetMapLayer.addTo(map);

  markerGroup.addTo(map);

  createMainMarker(coordinate);
};


const closePopup = () => map.closePopup();
const resetMarkersLayerGroup = () => markerGroup.clearLayers();

const resetMap = () => {
  map.setView(
    {
      lat: InitLocation.LAT,
      lng: InitLocation.LNG,
    },
    DEFAULT_ZOOM
  );
  mainMarker.setLatLng(
    {
      lat: InitLocation.LAT,
      lng: InitLocation.LNG,
    }
  );
  map.closePopup();
  closePopup();
};

export {InitLocation, createMarkers, createMap, resetMap, closePopup, resetMarkersLayerGroup};
