import axios from 'axios';

const myPixabayKey = '50674285-d69cfe0c44a4bfde391ce2dd2';
const url = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page, perPage) {
  const params = {
    key: myPixabayKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: perPage,
  };

  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    throw new Error(
      'Sorry, there are no images matching your search query. Please try again!'
    );
  }
}
