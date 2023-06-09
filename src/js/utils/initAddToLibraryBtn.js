import { checkMovie, removeMovie, saveMovie } from '../api/libraryAPI';
import { onCloseModalFilm } from '../modals/modal_film';
import loaderWrapper from '../loader';
import { loadMovie } from '../api/libraryAPI';
import refs from '../refs/library-refs';
import movieCardMarkup from '../markup/movieCardMarkup';

const PAGE_SIZE = 9;

/**
 * Initialize button "Add to library"
 * @param {HTMLButtonElement} btnEl - Button "Add to library"
 */
export default btnEl => {
  const id = Number.parseInt(btnEl.dataset.id);

  if (checkMovie(id)) {
    btnEl.textContent = 'Remove from my library';
    btnEl.addEventListener('click', onRemoveFromLibrary);
    return;
  }

  btnEl.addEventListener('click', onAddToLibrary);
};

const onAddToLibrary = evt => {
  const target = evt.target;

  const id = Number.parseInt(target.dataset.id);
  saveMovie({ id });

  target.textContent = 'Remove from my library';
  target.removeEventListener('click', onAddToLibrary);
  target.addEventListener('click', onRemoveFromLibrary);
};

const onRemoveFromLibrary = evt => {
  const target = evt.target;

  const id = Number.parseInt(target.dataset.id);
  removeMovie(id);

  target.textContent = 'Add to my library';
  target.removeEventListener('click', onRemoveFromLibrary);
  target.addEventListener('click', onAddToLibrary);

  if (location.pathname.includes('library')) {
    if (document.body.classList.contains('modal-open')) {
      onCloseModalFilm();
    }

    removeMovieFromLibrary(id);
  }
};

async function removeMovieFromLibrary(id) {
  const movieCardToRemove = refs.moviesListEl.querySelector(
    `li.item-movie-card[data-id="${id}"]`
  );
  movieCardToRemove?.remove();

  const moviesLength = refs.moviesListEl.children.length;
  const page = refs.moviesListEl.dataset.page;

  if (moviesLength < PAGE_SIZE * page) {
    loaderWrapper(loadMovie(moviesLength))
      .then(movie => {
        if (!movie) {
          refs.loadMoreBtnEl.classList.add('is-hidden');
          return;
        }

        refs.moviesListEl.insertAdjacentHTML(
          'beforeend',
          movieCardMarkup(movie)
        );
      })
      .catch(console.log);
  }

  if (moviesLength === 0) {
    refs.emptyLibEl.classList.remove('is-hidden');
    refs.libCatalogEl.classList.add('is-hidden');
  }
}
