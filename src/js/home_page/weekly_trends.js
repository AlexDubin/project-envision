import genres from '../genres.json';
import movieCardMarkup from '../markup/movieCardMarkup';
import initRatings from '../utils/initRating';
import refs from '../refs/weekly_trends-refs';
import { getTrendingMoviesByWeek } from '../api/weekly_trends-api';
import { onOpenModalFilmById } from '../modals/modal_film.js';

if (refs.movieList) {
  const genresObject = {};
  genres.genres.forEach(genre => {
    genresObject[genre.id] = genre.name;
  });
  handlerMoviesWeek(genresObject);
}

function handlerMoviesWeek(genresObject) {
  getTrendingMoviesByWeek()
    .then(data => {
      createMarkupMovies(data, genresObject);
    })
    .catch(err => console.log(err));
}
function createMarkupMovies({ results }, genresObject) {
  const randomIndexes = getRandomMovieToShow(results);
  const moviesToShow = randomIndexes.map(index => results[index]);
  markupMovie(moviesToShow, genresObject);
}

function markupMovie(moviesToShow) {
  refs.movieList.innerHTML = moviesToShow.map(movieCardMarkup).join('');
  initRatings();
  // refs.movieList.addEventListener('click', onOpenModalFilm);
  // window.addEventListener('keydown', onEscKeyPress);

  // START Добавляем слушателя для открытия модалки
  const catalog = document.querySelector('.list-movie-card.js-gallery');
  catalog.addEventListener('click', e => {
    const closestId = e.target.closest('.m-modal');
    const movieId = closestId.dataset.id;
    onOpenModalFilmById(movieId);
  });
  // END
}

function getRandomMovieToShow(results) {
  const randomIndexes = [];
  while (randomIndexes.length < 3) {
    const randomIndex = Math.floor(Math.random() * results.length);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }
  return randomIndexes;
}
