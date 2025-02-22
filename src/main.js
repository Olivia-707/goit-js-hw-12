import './js/pixabay-api';
import './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { userRequest } from './js/pixabay-api';
import { renderMarkup } from './js/render-functions';
import { gallery } from './js/render-functions';
import xmarkSvg from './img/xmark.svg';
import attendSvg from './img/attend.svg';

const searchForm = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');

let userInputValue;
let page = 1;
let per_page = 15;

const showLoader = () => {
  loader.style.display = 'block';
};

const hideLoader = () => {
  loader.style.display = 'none';
};

const endOfGallery = (totalImage, totalHits) => {
  if (totalImage >= totalHits) {
    loadMoreBtn.style.display = 'none';

    iziToast.show({
      message: `We're sorry, but you've reached the end of search results.`,
      messageColor: '#ffffff',
      iconUrl: attendSvg,
      backgroundColor: '#ff7300',
      position: 'topRight',
    });
  }
};

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  loadMoreBtn.style.display = 'none';

  gallery.innerHTML = '';

  userInputValue = e.target.elements.search.value.trim().toLowerCase();

  if (userInputValue === '') {
    iziToast.show({
      message: 'Input field cannot be empty.',
      messageColor: '#ffffff',
      iconUrl: xmarkSvg,
      backgroundColor: '#ff0745',
      position: 'topRight',
    });
    return;
  }

  showLoader();

  page = 1;
  userRequest(userInputValue, page, per_page)
    .then(images => {
      if (images.hits.lengh === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#ffffff',
          backgroundColor: '#ff0745',
          iconUrl: xmarkSvg,
          position: 'topRight',
        });
        return;
      }

      loadMoreBtn.style.display = 'block';

      endOfGallery(page * per_page, images.totalHits);

      renderMarkup(images.hits);
    })
    .catch(error => {
      iziToast.show({
        message: `${error}`,
        messageColor: '#ffffff',
        backgroundColor: '#ff0745',
        iconUrl: xmarkSvg,
        position: 'topRight',
      });
      console.log(error);
    })
    .finally(() => {
      hideLoader();
    });

  searchForm.reset();
});

loadMoreBtn.addEventListener('click', e => {
  loadMoreBtn.style.display = 'none';
  page += 1;

  showLoader();
  userRequest(userInputValue, page, per_page)
    .then(images => {
      loadMoreBtn.style.display = 'block';

      endOfGallery(page * per_page, images.totalHits);

      renderMarkup(images.hits);

      const galleryCard = document.querySelector('.gallery-item');
      const galleryCardRect = galleryCard.getBoundingClientRect();

      window.scrollBy({
        top: galleryCardRect.height * 2,
        behavior: 'smooth',
      });
    })
    .catch(error => {
      iziToast.show({
        message: `${error}`,
        messageColor: '#ffffff',
        backgroundColor: '#ff0745',
        iconUrl: xmarkSvg,
        position: 'topRight',
      });
      console.log(error);
    })
    .finally(() => {
      hideLoader();
    });
});
