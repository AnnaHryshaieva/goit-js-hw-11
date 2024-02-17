import { myGallery } from './js/render-functions';
import { getPictures } from './js/pixabay-api';

const form = document.querySelector('.form');
const loader = document.querySelector('span');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  myGallery.innerHTML = '';

  const inputValue = event.target.elements.search.value;

  if (inputValue === '') {
    return;
  }
  showLoader();

  getPictures(inputValue);

  event.target.reset();
}

function showLoader() {
  loader.classList.add('loader');
}

export function hideLoader() {
  if (loader) {
    loader.classList.remove('loader');
  }
}
