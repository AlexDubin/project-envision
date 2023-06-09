import axios from 'axios';
import initAddToLibraryBtn from '../utils/initAddToLibraryBtn';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '5708ddba333b2f1cf02bfd604f4dc65c';
const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzA4ZGRiYTMzM2IyZjFjZjAyYmZkNjA0ZjRkYzY1YyIsInN1YiI6IjY0N2IyMzdjZTMyM2YzMDEwNjE1MGEyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KNLuh4t4D6TUzou3Igz4ybZyApv3S24FATMSvptojXg',
    accept: 'application/json',
  },
};
// Отримує Id та повертає промікс з цим фільмом

async function getMovieDetails(movieId) {
  const response = await axios.get(`${BASE_URL}${movieId}`, options);
  return response.data;
}

const filmTrendsCards = document.querySelector('.list-movie-card'); //ul трендів
const filmCatalogCards = document.querySelector('.gallery'); //li з каталогу
const modBackdrop = document.querySelector('.modal-backdrop'); //div мій
const closeBtn = document.querySelector('.modal__close-btn'); //моя кнопка
const modalListRef = document.querySelector('.cards-film'); //ul моє з розмітки

// filmTrendsCards.addEventListener('click', onOpenModalFilm);
// filmCatalogCards.addEventListener('click', onOpenModalFilm);
closeBtn.addEventListener('click', onCloseModalFilm);
modBackdrop.addEventListener('click', onBackDropClick);

// OPEN MODAL WINDOW//
export function onOpenModalFilm(event) {
  const getParentalEl = event.target.closest('.m-modal');
  document.body.classList.add('modal-open');

  if (!getParentalEl) {
    return;
  }

  // GET ID
  const movieId = getParentalEl.dataset.id;

  loadIntoModal(movieId);

  modBackdrop.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
  window.addEventListener('keydown', onEscKeyPress);
}

// CLOSE MODAL
export function onCloseModalFilm() {
  modalListRef.innerHTML = '';
  document.body.classList.remove('modal-open');
  modBackdrop.classList.add('is-hidden');
}

// CLOSE MODAL by CLICKING BACKDROP
function onBackDropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModalFilm();
  }
}

// CLOSE MODAL by CLICKING BACKDROP ESCAPE
function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseModalFilm();
    // window.removeEventListener('keydown', onEscapeKeyboard);
  }
}

function loadIntoModal(idMovie) {
  try {
    const data = getMovieDetails(idMovie);

    getMovieDetails(idMovie)
      .then(data => {
        // console.log(data);
        const modalMovie = createCardMarkup(data);

        modalListRef.innerHTML = modalMovie;

        const addBtnEl = modalListRef.querySelector('.js-add-to-lib-btn');
        initAddToLibraryBtn(addBtnEl);
      })
      .catch(err => console.log(err));
  } catch (err) {
    modalListRef.innerHTML =
      '<div class="modal__empty">Sorry, info is unavailable</div>';
    return;
  }
}
// CREATE MARCUP
function createCardMarkup(data) {
  const {
    original_title,
    id,
    genre_names,
    genres,
    vote_average,
    poster_path,
    overview,
    popularity,
    vote_count,
  } = data;

  const genreName = genres ? genres.map(genre => genre.name) : [];
  const genresList = genreName.slice(0, 2).join(', ');

  return `<li class="film--add" data-id="${id}">
  <div class="film-add__wrap">
    <img class="film-add__img"
        src="https://image.tmdb.org/t/p/original/${poster_path}"
        alt="${original_title}"
        loading="lazy"
    />
  </div>
  <div class="film-add__desc">
    <h2 class="film-add__title">${original_title}</h2>
    <ul class="film-add__list list">
      <li class="film-add__item">
        <span class="film-add__subtitle">Vote / Votes</span>
        <span class="film-add__span-modal votes average">${vote_average}</span>
        <span class="simbol">&#47</span><span class="film-add__span-modal votes count">${vote_count}</span>
      </li>
      <li class="film-add__item">
        <span class="film-add__subtitle">Popularity</span>
        <span class="film-add__span-modal">${popularity}</span>
      </li>
      <li class="film-add__item">
        <span class="film-add__subtitle">Genre</span>
        <span class="film-add__span-modal genres">${genresList}</span>
      </li>
    </ul>
    <div class="film-add__wrap-desc">
      <h3 class="film-add__about">About</h3>
      <p class="film-add__text">${overview}</p>
    </div>
    <button type="button" class="film-add__btn btn js-add-to-lib-btn" data-id="${id}">Add to my library</button>
  </div>
</li>`;
}
// export {onOpenModalFilm}

export function onOpenModalFilmById(id) {
  document.body.classList.add('modal-open');
  loadIntoModal(id);
  modBackdrop.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
  window.addEventListener('keydown', onEscKeyPress);
}
