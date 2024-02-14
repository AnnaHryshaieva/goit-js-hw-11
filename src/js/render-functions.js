import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const myGallery = document.querySelector('.gallery');

function galleries(object) {
  const markup = object.hits
    .map(hit => {
      return `<li class="gallery-item">
        <a href="${hit.largeImageURL}">
          <img
            src="${hit.webformatURL}"
            class="gallery-image"
            alt="${hit.tags}"
          />
        </a>
        <p>
          Likes
          <span>${hit.likes}</span>
        </p>
        <p>
          Views
          <span>${hit.views}</span>
        </p>
        <p>
          Comments
          <span>${hit.comments}</span>
        </p>
        <p>
          Downloads
          <span>${hit.downloads}</span>
        </p>
      </li>`;
    })
    .join('');

  myGallery.insertAdjacentHTML('afterbegin', markup);

  const lightbox = new SimpleLightbox('.gallery a', {
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
  });

  lightbox.refresh();
}

export { myGallery, galleries };
