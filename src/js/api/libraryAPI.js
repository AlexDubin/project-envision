const STORAGE_KEY = 'movies-library';
const emptyLibEl = document.getElementById('lib-empty');
const libCatalogEl = document.getElementById('lib-catalog');

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
 * @throws {SyntaxError} Can throw this error cause JSON
 */
export function saveMovie(movie) {
  const movies = loadMovies();

  if (movie.id === undefined) throw new Error('No id');

  if (movies.some(savedMovie => savedMovie.id === movie.id))
    throw new Error('Already in library');

  movies.push(movie);
  saveMovies(movies);
}

/**
 * Removes movie from localStorage by id
 * @param {number} id - id of movie to delete
 * @throws {SyntaxError} Can throw this error cause JSON
 */
export function removeMovie(id) {
  const movieCardToRemove = document.querySelector(`[data-id="${id}"]`);
  movieCardToRemove?.remove();

  let movies = loadMovies();

  movies = movies.filter(movie => movie.id !== id);

  if (movies.length === 0) {
    emptyLibEl?.classList.remove('is-hidden');
    libCatalogEl?.classList.add('is-hidden');
  }

  saveMovies(movies);
}

/**
 * Loads movies from localStorage
 * @param {number} limit - Limit of returned movies
 * @returns Array of movies
 * @throws {SyntaxError} Can throw this error cause JSON
 */
export function loadMovies(limit = -1) {
  const movies = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
  return limit > 0 ? movies.slice(0, limit) : movies;
}

function saveMovies(movies) {
  const moviesString = JSON.stringify(movies);
  localStorage.setItem(STORAGE_KEY, moviesString);
}
