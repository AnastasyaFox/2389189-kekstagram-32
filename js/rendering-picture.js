import {createObject} from './data.js';

const picturesContainer = document.querySelector('.pictures');

const templateFragment = document.querySelector('#picture').content.querySelector('.picture');
const template = templateFragment.querySelector('a');
const fragment = document.createDocumentFragment();
const picture = createObject;

picture.forEach(({id, url, description, likes, comments}) => {
  const pictureElement = template.cloneNode(true);
  pictureElement.querySelector('.picture__img').dataset.id = id;
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  fragment.appendChild(pictureElement);
});

picturesContainer.append(fragment);
