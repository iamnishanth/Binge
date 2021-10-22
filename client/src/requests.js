export const BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
export const IMAGE_BASE_URL_HD = "https://image.tmdb.org/t/p/original";
export const API_KEY = "ce153341a8faae98ab0def899c8728a9";

export const requests = {
  Trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  "Action Movies": `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  "Comedy Movies": `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  "Top Rated": `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  "Horror Movies": `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  "Romance Movies": `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
};

export const newRelease = {
  movie: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&sort_by=release_date.desc`,
  tv: `/discover/tv?api_key=${API_KEY}&language=en-US&page=1&sort_by=popularity.desc`,
};

export const popular = {
  movie: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  tv: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export const getById = {
  movie: (id) =>
    `/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=images,videos`,
  tv: (id) =>
    `/tv/${id}?api_key=${API_KEY}&language=en-US&append_to_response=images,videos`,
};
