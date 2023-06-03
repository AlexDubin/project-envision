const STORAGE_KEY = 'movies-library';

// Максимально простая версия
// TODO: Сделать `movie` более конкретным
/**
 * Saves movie object to localStorage
 * @param {Object} movie - movie to save
 * @param {number} movie.id - id of movie (Required)
 * @throws Will throw an error if movie already in library
 * @throws {SyntaxError} Can throw this error cause JSON
 */
export function saveMovie(movie) {
  const movies = loadMovies();

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
  let movies = loadMovies();

  movies = movies.filter(movie => movie.id !== id);
  saveMovies(movies);
}

/**
 * Loads movies from localStorage
 * @returns Array of movies
 * @throws {SyntaxError} Can throw this error cause JSON
 */
export function loadMovies() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
}

function saveMovies(movies) {
  const moviesString = JSON.stringify(movies);
  localStorage.setItem(STORAGE_KEY, moviesString);
}
