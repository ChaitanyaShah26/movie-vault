import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY; 
const BASE_URL = 'https://api.themoviedb.org/3';

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const fetchTrendingMovies = () => api.get('/trending/movie/week');
export const searchMovies = (query) => api.get('/search/movie', { params: { query } });
export const fetchFullMovieDetails = (id) => api.get(`/movie/${id}`, {
    params: { append_to_response: 'credits' }
});