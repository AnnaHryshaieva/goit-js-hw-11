import { myGallery, galleries } from './render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  myGallery.innerHTML = '';

  const inputValue = event.target.elements.search.value;

  if (inputValue === '') {
    return;
  }

  getPictures(inputValue);

  event.target.reset();
}

function getPictures(inputValue) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '34206508-2ad29bd7e91dc1db4e67bd855';
  const PARAMS = `?key=${API_KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true`;
  const url = BASE_URL + PARAMS;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      return galleries(data);
    })
    .catch(error => {
      console.log(error);
    });
}
