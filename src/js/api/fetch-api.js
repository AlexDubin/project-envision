import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWYwYzIyMWE2YTRjMTZkOTRjZTUwMDIzYjU4MzMzYiIsInN1YiI6IjY0NGZiYzBhMjNhMzE0MDJlNTdjM2Q0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kZBqemQQaP5AfqtlQ7E69qa116O60SNbbfSuHzK1gjU',
    accept: 'application/json',
  },
};

export const fetchTrendingMoviesByDay = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?language=en-US`,
      options
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export async function fetchRandomTrailerKey(movieId) {
  try {
    const url = `${BASE_URL}/movie/${movieId}/videos`;

    const responseTrailer = await axios.get(url, options);

    const movieTrailer = await responseTrailer.data;

    if (movieTrailer.results.length === 0) {
      return null;
    }

    const trailers = movieTrailer.results.filter(
      trailer => trailer.type === 'Trailer' && trailer.site === 'YouTube'
    );

    if (trailers.length === 0) {
      return null;
    }

    return trailers[0].key;
  } catch (error) {
    console.error(error);
    return null;
  }
}
