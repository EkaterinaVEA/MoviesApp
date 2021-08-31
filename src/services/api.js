import { BASE_URL, API_KEY } from "../constants/constants";
import axios from "axios";

axios.defaults.baseURL = BASE_URL;

export async function getTranding(page) {
    const url = `/trending/movie/week?api_key=${API_KEY}&page=${page}`;
    const {data} = await axios.get(url);
    return data;
}

export async function getSearchMovies(seacrhQuery, page) {
    const url = `/search/movie?api_key=${API_KEY}&query=${seacrhQuery}&page=${page}&language=en-US&include_adult=false`;
    const { data } = await axios.get(url);
    return data; 
}

export async function getMovieInfoById(id) {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    return data; 
}

export async function getCast(id) {
const { data } = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
    return data.cast;

}

export async function getReviews(id) {
  const { data } = await axios.get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&page=1`
    );
    return data.results;
}

export async function getGenresList() {
    const url = `/genre/movie/list?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
   
    return data.genres;    
}