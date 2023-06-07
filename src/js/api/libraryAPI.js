import axios from 'axios';
import { Notify } from 'notiflix';

const STORAGE_KEY = 'movies-library';
const BASE_URL = 'https://api.themoviedb.org/3';
const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjE3NzU3ZjU2ZDg1NmM5YzE2MmE1OWEzZWZlMmY5MyIsInN1YiI6IjY0NzhkNWZjOWI2ZTQ3MDBkZThlOTBlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BE22YVTai34Dh5C1jSxEZ2DzzjnxJfKFgEIpWS2JFcI',
    accept: 'application/json',
  },
};

/*
Возможности:
- Добавлять фильмы в библиотеку
- Удалять фильмы из библиотеки
- Загружать массив фильмов из библиотеки

При использовании надо обрабатывать возможные ошибки с try catch
Формат сохранения максимально свободный - нужно лишь id
*/

// Максимально простая версия
/**
 * Saves movie object to localStorage
 * @param {Object} movie - movie to save
 * @param {number} movie.id - id of movie (Required)
 * @throws Will throw an error if movie already in library
 */
export function saveMovie(movie) {
  const movies = loadMoviesFromStorage();

  if (movie.id === undefined) throw new Error('No id');

  if (movies.some(savedMovie => savedMovie.id === movie.id))
    throw new Error('Already in library');

  movies.push(movie);

  saveMoviesToStorage(movies);
}

/**
 * Removes movie from localStorage by id
 * @param {number} id - id of movie to delete
 */
export function removeMovie(id) {
  const movies = loadMoviesFromStorage();
  const moviesToSave = movies.filter(movie => movie.id !== id);

  saveMoviesToStorage(moviesToSave);
}

/**
 * Loads movies from localStorage
 * @param {number} limit - Limit of returned movies
 * @returns Array of movies
 */
export async function loadMovies(limit = 0, page = 0) {
  try {
    const previousMovies = page * limit;
    const savedMovies = loadMoviesFromStorage();

    const moviesToLoad =
      page === 0
        ? savedMovies.slice(0, limit)
        : savedMovies.slice(previousMovies, previousMovies + limit);

    return await Promise.all(moviesToLoad.map(fetchMovie));
  } catch (err) {
    Notify.failure("Can't load movies.");
    console.error(err);
    return [];
  }
}

function saveMoviesToStorage(movies) {
  try {
    const moviesString = JSON.stringify(movies);
    localStorage.setItem(STORAGE_KEY, moviesString);
  } catch (err) {
    Notify.failure("Can't save movies to storage.");
    console.error(err);
  }
}

function loadMoviesFromStorage() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
  } catch (err) {
    Notify.failure("Can't load saved movies.");
    console.error(err);
    return [];
  }
}

async function fetchMovie({ id }) {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?language=en-US`,
    options
  );
  const {
    data: { poster_path, title, vote_average, release_date, genres },
  } = response;
  const genre_ids = genres.map(({ id }) => id);

  return { genre_ids, poster_path, title, vote_average, release_date, id };
}
