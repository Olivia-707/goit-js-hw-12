import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const modalSimpleLightBox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

export const gallery = document.querySelector('.gallery');

export const renderMarkup = images => {
  const markup = images
    .map(
      image => `
      <li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img 
          class="gallery-image"
          src="${image.webformatURL}"
          alt="${image.tags}"
          />
        </a>
        <div class="start-container">
          <div>
            <span class="start-span"><b>Likes</b></span>
            <span class="start-span">${image.likes}</span>
          </div>
          <div>
            <span class="start-span"><b>Views</b></span>
            <span class="start-span">${image.views}</span>
          </div>
          <div>
            <span class="start-span"><b>Comments</b></span>
            <span class="start-span">${image.comments}</span>
          </div>
          <div>
            <span class="start-span"><b>Downloads</b></span>
            <span class="start-span">${image.downloads}</span>
          </div>
        </div>
      </li>
    `
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);

  modalSimpleLightBox.refresh();
};
