import { fetchRandomTrailerKey } from '../api/fetch-api.js';
import { modalTrailerRefs } from '../refs/modal_trailer-refs.js';

export async function onTrailerBtnClick(event) {
  try {
    const movieId =
      event.currentTarget.dataset.movieId || event.target.dataset.movieId;

    if (!movieId) return;
    showTrailerModal();

    modalTrailerRefs.trailerContainerEl.classList.remove('trailer-is-hidden');
    modalTrailerRefs.noMovieContainerEl.classList.add('trailer-is-hidden');

    await renderTrailer(movieId);
  } catch (error) {
    modalTrailerRefs.noMovieContainerEl.classList.remove('trailer-is-hidden');
    modalTrailerRefs.trailerContainerEl.classList.add('trailer-is-hidden');
  }
}

function showTrailerModal() {
  document.body.classList.add('show-trailer-modal');
  window.addEventListener('keydown', onEscPress);
  modalTrailerRefs.trailerBackdropEl.addEventListener('click', onBackdropClick);
  modalTrailerRefs.trailerCloseBtnEl.addEventListener('click', closeModal);
}

function onEscPress(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

function onBackdropClick(e) {
  const backdrop = e.target;
  if (backdrop.classList.contains('trailer-modal__backdrop')) {
    closeModal();
  }
}

function closeModal() {
  document.body.classList.remove('show-trailer-modal');
  trailerIframe.src = '';
  window.removeEventListener('keydown', onEscPress);
  modalTrailerRefs.trailerBackdropEl.removeEventListener(
    'click',
    onBackdropClick
  );
  modalTrailerRefs.trailerCloseBtnEl.removeEventListener('click', closeModal);

  modalTrailerRefs.trailerContainerEl.classList.add('trailer-is-hidden');
  modalTrailerRefs.noMovieContainerEl.classList.remove('trailer-is-hidden');
}

async function renderTrailer(movieId) {
  let movieTrailerKey = await fetchRandomTrailerKey(movieId);
  if (movieTrailerKey) {
    trailerIframe.setAttribute(
      'src',
      `https://www.youtube.com/embed/${movieTrailerKey}`
    );
  } else {
    modalTrailerRefs.trailerIframe.removeAttribute('src');
  }
}
