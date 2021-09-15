// Класс запросов на REST API
import { BASE_FETCH_URL, API_KEY } from '../const';

class ApiService {
  constructor() {
    // this.id = 1;
  }

  async fetchGetMediaTrending() {
    const response = await fetch(`${BASE_FETCH_URL}/trending/movie/week?api_key=${API_KEY}`);
    const movies = await response.json();
    // console.log(movies)
    return movies;
  }

  async fetchGetGenres() {
    const response = await fetch(
      `${BASE_FETCH_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    const genres = await response.json();
    console.log(genres)
    return genres;
  }

  async fetchOpenModal(id) {
    const response = await fetch(`${BASE_FETCH_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
    const movie = await response.json();
    console.log(movie)
    return movie;
  }
  // get filmId() {
  //   return this.id;
  // }

  // set filmId(newID) {
  //   this.id = newID;
  // }

}
const newApiService = new ApiService();

export default newApiService;
