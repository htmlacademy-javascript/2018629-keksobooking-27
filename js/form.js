const form = document.querySelector('.ad-form');

const turnFormOff = () => {
  form.classList.add('ad-form--disabled');
  form.querySelectorAll('.ad-form__element').forEach((fieldset) => {
    fieldset.disable = true;
  });
};

const turnFormOn = () => {
  form.classList.remove('ad-form--disabled');
  form.querySelectorAll('.ad-form__element').forEach((fieldset) => {
    fieldset.disable = false;
  });
};

export {turnFormOn, turnFormOff};
