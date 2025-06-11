import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = event.target.elements['search-text'].value.trim();
  if (!query) {
    iziToast.warning({
      title: 'warning',
      message: 'Please enter a search term',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      const { hits } = data;

      if (hits.length === 0) {
        iziToast.info({
          title: 'Info',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        createGallery(hits);
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
});
