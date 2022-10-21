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

similarAds.forEach((popup) => {
  const newPopup = popupTemplate.cloneNode(true);
  newPopup.querySelector('.popup__avatar').src = popup.author.avatar;
  newPopup.querySelector('.popup__title').textContent = popup.offer.title;
  newPopup.querySelector('.popup__text--address').textContent = popup.offer.address;
  newPopup.querySelector('.popup__text--price').querySelector('[data-price]').textContent = popup.offer.price;
  newPopup.querySelector('.popup__type').textContent = popupTypes[popup.offer.type];
  newPopup.querySelector('.popup__text--capacity').textContent = `${popup.offer.rooms} комнаты для ${popup.offer.guests} гостей`;
  newPopup.querySelector('.popup__text--time').textContent = `Заезд после ${popup.offer.checkin}, выезд до ${popup.offer.checkout}`;

  const description = newPopup.querySelector('.popup__description');
  if (popup.offer.description) {
    description.textContent = popup.offer.description;
  } else {
    description.remove();
  }

  const popupFeatures = popup.offer.features;
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
  if (popup.offer.photos) {
    const photos = popup.offer.photos;
    photos.forEach((photo) => {
      const newPhoto = photoTemplate.cloneNode(true);
      newPhoto.src = photo;
      photoBlock.append(newPhoto);
    });} else {
    photoBlock.remove();
  }

  map.append(newPopup);
});


