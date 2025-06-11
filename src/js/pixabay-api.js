import axios from 'axios';

const myPixabayKey = '50674285-d69cfe0c44a4bfde391ce2dd2';
const url = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const params = {
    key: myPixabayKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(url, { params }).then(response => {
    if (response.data.hits.length === 0) {
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }
    return response.data;
  });
}
