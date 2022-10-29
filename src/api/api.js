import axios from 'axios';

export async function fetchImages(searchValue, page) {
    const params = new URLSearchParams({
        key: '29665517-503a19893477763dfc63054fb',
        page: page,
        per_page: 12,
        image_type: 'photo',
        orientation: 'horizontal',
    });

    const URL = `https://pixabay.com/api/?q=${searchValue}&${params}`;

    const response = await axios.get(URL);
    const responseFormat = await response.data;
    return responseFormat;
}

export default fetchImages;