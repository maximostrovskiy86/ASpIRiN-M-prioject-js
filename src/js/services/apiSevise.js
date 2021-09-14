// Класс запросов на REST API
import {BASE_FETCH_URL, API_KEY} from "../const";

class ApiService {
  constructor() {

  }

  async fetchGetMediaTrending() {
    const response = await fetch(`${BASE_FETCH_URL}/trending/movie/week?api_key=${API_KEY}`);
    const movies = await response.json();
    console.log(movies)
    return movies;
  }

  async fetchGetGenres() {
    const response = await fetch(`${BASE_FETCH_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`);
    const genres = await response.json();
    console.log(genres)
    return genres;
  }
}

const newApiService = new ApiService();

export default newApiService;