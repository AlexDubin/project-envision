import genres from '../genres.json';
import axios from 'axios';
import movieCardMarkup from '../markup/movieCardMarkup';
import initRatings from '../utils/initRating';
import refs from '../refs/weekly_trends-refs';
// закомитила импорт потому что с ним у меня исчезаеют карточки фильмов
// import onOpenModalFilm from '../modals/modal_film';

const BASE_URL = 'https://api.themoviedb.org/3';
const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmFhZDQ4MjlkYjI1ZWQ1Mjc0NmY0NmY4YzQ1NzRlYSIsInN1YiI6IjY0NzIzZDc3OWFlNjEzMDBjNGM3NmY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v_Pd0M6hpO0qy1_8-nNBGtFxbeHjE8i8mgfszlHvjZc',
    accept: 'application/json',
  },
};

async function getTrendingMoviesByWeek(page = 1) {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/week?language=en-US&page=${page}`,
      options
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

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
  refs.movieList.addEventListener('click', onOpenModalFilm);
  window.addEventListener('keydown', onEscKeyPress);
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
