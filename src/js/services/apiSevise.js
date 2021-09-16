// Класс запросов на REST API
import { BASE_FETCH_URL, API_KEY } from '../const';

class ApiService {
  constructor() {
    this.query = '';
    // this.id = 1;
  }

  async fetchGetMediaTrending(page) {
    const response = await fetch(
      `${BASE_FETCH_URL}/trending/movie/week?page=${page}&api_key=${API_KEY}`,
    );
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


  async searchMovie(page) {
    const response = await fetch(
      `${BASE_FETCH_URL}search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${this.query}`,
    );
    const movies = await response.json();
    console.log(movies);
    return movies;
  }
  set searchQuery(value) {
    this.query = value;
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
