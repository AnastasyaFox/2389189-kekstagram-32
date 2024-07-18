import { picture } from "./rendering-picture";
const bigPicture = document.querySelector('.big-picture');
const closeButtonPicture = bigPicture.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

function openBigPicture () {
  bigPicture.classList.remove('hidden');
  picture();
  document.addEventListener('keydown', onDocumentKeydown);
}

bigPicture.addEventListener('click', () => {
  openBigPicture();
});

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  picture();
  document.removeEventListener('keydown', onDocumentKeydown);
}

closeButtonPicture.addEventListener('click', () => {
  closeBigPicture();
});
