import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { hideLoader } from '../main';

const myGallery = document.querySelector('.gallery');

function galleries(object) {
  const markup = object.hits
    .map(hit => {
      return `<li class="gallery-item">
  <a href="${hit.largeImageURL}">
    <img src="${hit.webformatURL}" class="gallery-image" alt="${hit.tags}" />
  </a>
  <div class="info">
    <p class="info-item">
      <b>Likes</b> </br>${hit.likes}
    </p>
    <p class="info-item">
      <b>Views</b> </br>${hit.views}
    </p>
    <p class="info-item">
      <b>Comments</b> </br>${hit.comments}
    </p>
    <p class="info-item">
      <b>Downloads</b> </br>${hit.downloads}
    </p>
  </div>
</li>`;
    })
    .join('');
  hideLoader();
  myGallery.insertAdjacentHTML('afterbegin', markup);

  const lightbox = new SimpleLightbox('.gallery a', {
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
  });

  lightbox.refresh();
}

export { myGallery, galleries };
