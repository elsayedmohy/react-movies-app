export const BASE_URL = "https://api.themoviedb.org/3/movie/";
export const API_KEY = "f827e8f5a61ebf341e83a511889cfb33";
export const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
export const MOVIE_ID = "";
export const MOVIE_DETAILS = `${BASE_URL}${MOVIE_ID}?api_key=${API_KEY}&language=en-US`;

export const POPULAR = `${BASE_URL}popular?api_key=${API_KEY}&language=en-US`;
export const TOP_RATED = `${BASE_URL}top_rated?api_key=${API_KEY}&language=en-US&page=1`;

export const TRENDING = `https://api.themoviedb.org/3/trending/movie/Week?api_key=${API_KEY}&language=en-US`;
export const ACTION = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate`;
export const COMEDY = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate`;
export const HORROR = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate`;
export const ROMANCE = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749&with_watch_monetization_types=flatrate`;
export const DOCUMENTARIES = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99&with_watch_monetization_types=flatrate`;
