import Notiflix from 'notiflix';
import axios from 'axios';
import initRatings from '../utils/initRating';
import movieCardMarkup from '../markup/movieCardMarkup';
import Pagination from '../utils/pagination';
import movieCardMarkup from '../markup/movieCardMarkup';
import { API_KEY } from '../api/catalogAPI';
import { URL } from '../api/catalogAPI';
import { refs } from './catalog-refs';
import { onOpenModalFilmById } from '../modals/modal_film.js';

export async function fetchMoviesOfweek(currentPage) {
  try {
    const { data } = await axios.get(
      `${URL}trending/all/week?language=en-US&page=${currentPage}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          accept: 'application/json',
        },
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    Notiflix.Notify.failure(
      'Sorry, there are no movies matching your search query. Please try again.'
    );
  }
}

export function buildGallery(movies) {
  return movies
    .map(movie => {
      if (movie.release_date) return movieCardMarkup(movie);
      return '';
    })
    .join('');
}

export async function galleryOfWeek(currentPage) {
  try {
    let result = await fetchMoviesOfweek(currentPage);
    const addingMovies = buildGallery(result.results);
    refs.gallery.innerHTML = addingMovies;
    initRatings();
    if (result.total_results === 0) {
      return noMovie();
    }
  } catch (error) {
    console.log(error);
  }
}

initGalleryOfWeek();

async function initGalleryOfWeek() {
  try {
    let result = await fetchMoviesOfweek(1);
    const addingMovies = buildGallery(result.results);
    refs.gallery.innerHTML = addingMovies;

    // START Добавляем слушателя для открытия модалки
    const catalog = document.querySelector('#anchor');
    catalog.addEventListener('click', e => {
      const closestId = e.target.closest('.m-modal');
      const movieId = closestId.dataset.id;
      onOpenModalFilmById(movieId);
    });
    // END

    initRatings();
    if (result.total_results === 0) {
      return noMovie();
    }
    paginationWeek(result);
  } catch (error) {
    console.log(error);
  }
}

function paginationWeek(props) {
  new Pagination({
    container: refs.paginationContainer,
    count: Math.min(props.total_pages, 197),
    index: 1,
    callback: galleryOfWeek,
  });
}
