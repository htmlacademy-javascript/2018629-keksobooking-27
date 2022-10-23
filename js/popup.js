const map = document.querySelector('#map-canvas');
const popupTemplate = document.querySelector('#card').content.querySelector('.popup');

const popupTypes = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house : 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const renderPhotos = (popupElement, photos) => {
  const photoBlock = popupElement.querySelector('.popup__photos');
  const photoTemplate = popupElement.querySelector('.popup__photo').cloneNode(true);
  photoBlock.innerHTML = '';
  if (photos) {
    const photosList = photos;
    photosList.forEach((photo) => {
      const newPhoto = photoTemplate.cloneNode(true);
      newPhoto.src = photo;
      photoBlock.append(newPhoto);
    });} else {
    photoBlock.remove();
  }
};

const renderDescription = (popupElement, description) => {
  const newDescription = popupElement.querySelector('.popup__description');
  if (description) {
    newDescription.textContent = description;
  } else {
    newDescription.remove();
  }
};

const renderFeatures = (popupElement, features) => {
  const popupFeatures = features;
  const featuresList = popupElement.querySelector('.popup__features').querySelectorAll('.popup__feature');
  const modifiers = popupFeatures.map((feature) => `popup__feature--${feature}`);

  featuresList.forEach((featuresListItem) => {
    const modifier = featuresListItem.classList[1];
    if (!modifiers.includes(modifier)) {
      featuresListItem.remove();
    }
  });

};

const createPopups = (addsData) => {
  addsData.forEach(({author, offer}) => {
    const newPopup = popupTemplate.cloneNode(true);
    newPopup.querySelector('.popup__avatar').src = author.avatar;
    newPopup.querySelector('.popup__title').textContent = offer.title;
    newPopup.querySelector('.popup__text--address').textContent = offer.address;
    newPopup.querySelector('.popup__text--price').querySelector('[data-price]').textContent = offer.price;
    newPopup.querySelector('.popup__type').textContent = popupTypes[offer.type];
    newPopup.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
    newPopup.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

    renderDescription(newPopup, offer.description);
    renderFeatures(newPopup, offer.features);
    renderPhotos(newPopup, offer.photos);

    map.append(newPopup);
  });
};

export {createPopups};

