const popupButton = document.getElementById('popupButton');
const popupContainer = document.getElementById('popupContainer');
const closePopupButton = document.getElementById('closePopupButton');

popupButton.addEventListener('click', () => {
  popupContainer.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
  popupContainer.style.display = 'none';
});
