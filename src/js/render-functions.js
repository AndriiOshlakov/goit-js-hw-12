import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'top-right',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item"> <a href="${largeImageURL}">
                <img src="${webformatURL}" alt="${tags}" class="image"/>
            </a>
            <div class="description">
                <p class="text">Likes <span class="span">${likes}</span></p>
                <p class="text">Views <span class="span">${views}</span></p>
                <p class="text">Comments <span class="span">${comments}</span></p>
                <p class="text">Downloads <span class="span">${downloads}</span></p>
            </div></li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.style.display = 'flex';
}

export function hideLoader() {
  loader.style.display = 'none';
}
