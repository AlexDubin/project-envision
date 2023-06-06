import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '5708ddba333b2f1cf02bfd604f4dc65c';
const API_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzA4ZGRiYTMzM2IyZjFjZjAyYmZkNjA0ZjRkYzY1YyIsInN1YiI6IjY0N2IyMzdjZTMyM2YzMDEwNjE1MGEyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KNLuh4t4D6TUzou3Igz4ybZyApv3S24FATMSvptojXg';

// Отримує Id та повертає промікс з цим фільмом

function getMovieDetails(movieId) {
  const response = axios.get(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
}

const filmCards = document.querySelector('.gallery'); //ul з каталогу
const modBackdrop = document.querySelector('.modal-backdrop'); //div мій
const closeBtn = document.querySelector('.modal__close-btn'); //моя кнопка
const modalListRef = document.querySelector('.cards-film'); //ul моє з розмітки

const STORAGE_KEY = 'movies-library';

filmCards.addEventListener('click', onOpenModal);
closeBtn.addEventListener('click', onCloseModal);
modBackdrop.addEventListener('click', onBackDropClick);

// OPEN MODAL WINDOW//
export function onOpenModal(event) {
  const getParentalEl = event.target.closest('.gallery');

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
function onCloseModal() {
  modalListRef.innerHTML = '';
  document.body.classList.remove('modal-open');
  modBackdrop.classList.add('is-hidden');
}

// CLOSE MODAL by CLICKING BACKDROP
function onBackDropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

// CLOSE MODAL by CLICKING BACKDROP ESCAPE
function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseModal();
    window.removeEventListener('keydown', onEscapeKeyboard);
  }
}
// отримуємо масив фільмів library
//const library = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
//const movies = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');

// function addToLibraryFilm(data) {
//   const library = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

//   library.push(data);
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(library));
// }

// LOAD CARD
// export async function loadIntoModal(idMovie) {
//   const library = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

//   const filmIdsArr = library.map(item => item.id);

//   try {
//     const data = await getMovieDetails(idMovie);

//     const createModalCard = createCardMarkup(data);
//     modalListRef.innerHTML = createModalCard;

//     const filmAddBtn = document.querySelector('.film-add__btn');

//     if (filmIdsArr.includes(Number(idMovie))) {
//       filmAddBtn.textContent = 'Remove from my library';
//     } else {
//       filmAddBtn.textContent = 'Add to my library';
//     }

//     filmAddBtn.addEventListener('click', () => {
//       if (filmAddBtn.textContent === 'Add to my library') {
//         addToLibraryFilm(data);
//         filmAddBtn.textContent = 'Remove from my library';
//       } else {
//         const library = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
//         const index = library.findIndex(item => item.id === data.id);
//         if (index !== -1) {
//           library.splice(index, 1);
//             localStorage.setItem(STORAGE_KEY, JSON.stringify(library));
//         }
//         filmAddBtn.textContent = 'Add to my library';
//         onCloseModal();
//         location.reload();
//       }
//     });
//   } catch (err) {
//     modalListRef.innerHTML = '<div class="modal__empty">Sorry, info is unavailable</div>';
//     return;
//   }
// }

// // CREATE MARCUP
// function createCardMarkup(data) {
//   const {
//     original_title,
//     id,
//     genre_names,
//     genres,
//     vote_average,
//     poster_path,
//     overview,
//     popularity,
//     vote_count,
//   } = data;

//   const genreName = genres ? genres.map(genre => genre.name) : [];
//   const genresList = genreName.slice(0, 2).join(', ');

//   return `<li class="film--add" data-id="${id}">
//   <div class="film-add__wrap">
//     <img class="film-add__img"
//         src="${poster_path}"
//         alt="${original_title}"
//         loading="lazy" />
//   </div>
//   <div class="film-add__desc">
//     <h2 class="film-add__title">${original_title}</h2>

//     <ul class="film-add__list list">
//       <li class="film-add__item">
//         <span class="film-add__subtitle">Vote / Votes</span
//         ><span class="film-add__span votes average"
//           >${vote_average}</span> / <span class="film-add__span votes count"
//           >${vote_count}</span>
//       </li>
//       <li class="film-add__item">
//         <span class="film-add__subtitle">Popularity</span
//         ><span class="film-add__span">${popularity}</span>
//       </li>
//       <li class="film-add__item">
//         <span class="film-add__subtitle">Genre</span
//         ><span class="film-add__span genres">${genresList}</span>
//       </li>
//     </ul>

//     <div class="film-add__wrap-desc">
//       <h3 class="film-add__about">About</h3>
//       <p class="film-add__text">${overview}</p>
//     </div>

//     <button type="button" class="film-add__btn btn">Add to my library</button>
//   </div>
// </li>`;
// }
