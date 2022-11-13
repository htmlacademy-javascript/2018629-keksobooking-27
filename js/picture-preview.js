const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const createImgForPreview = (previewContainer) => {
  const imgContainer = document.createElement('img');
  imgContainer.setAttribute('alt', 'Выбранная фотография жилья');
  imgContainer.setAttribute('src', '#');
  imgContainer.style.alignSelf = 'center';
  imgContainer.style.marginLeft = 'auto';
  imgContainer.style.marginRight = 'auto';
  imgContainer.style.maxWidth = '100%';
  imgContainer.style.height = 'auto';
  previewContainer.append(imgContainer);

  return imgContainer;
};

const createPhotoPreview = (fileChooser, previewContainer) => {
  fileChooser.addEventListener('change', () => {
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      const preview = previewContainer.querySelector('img');
      if (preview) {
        preview.src = URL.createObjectURL(file);
      } else {
        const newPreview = createImgForPreview(previewContainer);
        newPreview.src = URL.createObjectURL(file);
      }
    }
  });
};

const resetAvatarUrl = (photoContainer, defaultPhoto) => {
  photoContainer.querySelector('img').src = defaultPhoto;
};

const resetPhotoContainer = (photoContainer) => {
  photoContainer.innerHTML = '';
};

export {createPhotoPreview, createImgForPreview, resetAvatarUrl, resetPhotoContainer};
