import { createAds } from './data.js';

const map = document.querySelector('#map-canvas');

const popupTemplate = document.querySelector('#card').content.querySelector('.popup');

const similarAds = createAds(1);

const popupTypes = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house : 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

similarAds.forEach(({author, offer}) => {
  const newPopup = popupTemplate.cloneNode(true);
  newPopup.querySelector('.popup__avatar').src = author.avatar;
  newPopup.querySelector('.popup__title').textContent = offer.title;
  newPopup.querySelector('.popup__text--address').textContent = offer.address;
  newPopup.querySelector('.popup__text--price').querySelector('[data-price]').textContent = offer.price;
  newPopup.querySelector('.popup__type').textContent = popupTypes[offer.type];
  newPopup.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  newPopup.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  const description = newPopup.querySelector('.popup__description');
  if (offer.description) {
    description.textContent = offer.description;
  } else {
    description.remove();
  }

  const popupFeatures = offer.features;
  const featuresList = newPopup.querySelector('.popup__features').querySelectorAll('.popup__feature');
  const modifiers = popupFeatures.map((feature) => `popup__feature--${feature}`);

  featuresList.forEach((featuresListItem) => {
    const modifier = featuresListItem.classList[1];
    if (!modifiers.includes(modifier)) {
      featuresListItem.remove();
    }
  });

  const photoBlock = newPopup.querySelector('.popup__photos');
  const photoTemplate = photoBlock.querySelector('.popup__photo').cloneNode(true);
  photoBlock.innerHTML = '';
  if (offer.photos) {
    const photos = offer.photos;
    photos.forEach((photo) => {
      const newPhoto = photoTemplate.cloneNode(true);
      newPhoto.src = photo;
      photoBlock.append(newPhoto);
    });} else {
    photoBlock.remove();
  }

  map.append(newPopup);
});


