import { picture as pictures } from './rendering-picture';
const picturesContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const closeButtonPicture = bigPicture.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
// ///  if (isEscapeKey(evt)) {
//     evt.preventDefault();
//     closeBigPicture();
//   }
};

function openBigPicture (id) {
  bigPicture.classList.remove('hidden');
  const curentPicture = pictures.filter((item) => item.id === Number(id))[0];
  bigPicture.querySelector('.big-picture__img img').src = curentPicture.url;
  // picture();
  document.addEventListener('keydown', onDocumentKeydown);
}

picturesContainer.addEventListener('click', (evt) => {
  openBigPicture(evt.target.dataset.id);
});

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  // picture();
  document.removeEventListener('keydown', onDocumentKeydown);
}

closeButtonPicture.addEventListener('click', () => {
  closeBigPicture();
});
