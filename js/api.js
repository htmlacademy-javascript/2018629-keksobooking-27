const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((otherAds) => {
      onSuccess(otherAds);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch (
    'https://27.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: body,
    },
  )
    .then((response) => {
      if(response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};
export {getData, sendData};
