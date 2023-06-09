import { checkMovie, removeMovie, saveMovie } from '../api/libraryAPI';
import { removeMovieFromLibrary } from '../libraru_page/section_library';
import { onCloseModalFilm } from '../modals/modal_film';

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
