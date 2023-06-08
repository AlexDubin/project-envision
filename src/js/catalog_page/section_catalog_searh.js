import Notiflix from 'notiflix';
import Pagination from 'tui-pagination';
import customSelect from 'custom-select';
import axios from 'axios';
import initRatings from '../utils/initRating';
import 'custom-select/build/custom-select.css';
import { buildGallery } from './section_catalog';
import { galleryOfWeek } from './section_catalog';
import populateOptions from '../utils/populateOptions';
import Pagination from '../utils/pagination';
import { API_KEY } from '../api/catalogAPI';
import { URL } from '../api/catalogAPI';
import { refs } from './catalog-refs';
import dataGenres from '../genres.json';



let formData = '';
let yearParam = '';

const years = [];

for (let year = 2023; year >= 1895; year -= 1) {
  years.push({
    id: year,
    name: year
  });
}

populateOptions(years, refs.yearSelectEl);
const yearSelect = customSelect(refs.yearSelectEl)[0];
yearSelect.select.addEventListener('change', filterMoviesYear);

populateOptions(dataGenres.genres, refs.genreSelectEl);
const genresSelect = customSelect(refs.genreSelectEl)[0];

function filterMoviesByGenre(evt) {
  const movies = refs.gallery.childNodes;
  let filter = evt.target.value;

  if (filter === '-1') {
    movies.forEach(movie => movie.classList.remove('is-hidden'));
  } else {
    movies.forEach(movie => {
      movie.dataset.genres.split(',').includes(filter)
        ? movie.classList.remove('is-hidden')
        : movie.classList.add('is-hidden');
    });
  }
}

genresSelect.select.addEventListener('change', filterMoviesByGenre);






function filterMoviesYear(evt) {
  let year = evt.target.value;
  yearParam = `&primary_release_year=${year}`;
  console.log(yearParam);
}


function noMovie() {
  refs.paginationContainer.innerHTML = '';
  refs.gallery.innerHTML = `
    <div class="gallery-empty"
        <h2 class="title-empty">OOPS...</h2>
        <p class="text-empty">We are very sorry!
        We don’t have any results matching your search.</p>
    </div>   
    `;
}


async function fetchMoviesSearch(currentPage) {
  try {
    const { data } = await axios.get(
      `${URL}search/movie?query=${formData}&page=${currentPage}${yearParam}`,
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
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
}



function paginationSearh(props) {
  new Pagination({
    container: refs.paginationContainer,
    count: Math.min(props.total_pages, 197),
    index: 1,
    callback: searchMovie,
  });
}


 async function searchMovie(currentPage) {
  try {
    const result = await fetchMoviesSearch(currentPage);
    const addingMovies = buildGallery(result.results);
    if (result.total_results === 0) {
      return noMovie();
    }
    refs.gallery.innerHTML = addingMovies;
    initRatings();
  } catch (error) {
    console.log(error);
  }
}

async function initSearchMovie() {
  try {
    const result = await fetchMoviesSearch(1);
    const addingMovies = buildGallery(result.results);
    if (result.total_results === 0) {
      return noMovie();
    }

    paginationSearh(result);
    refs.gallery.innerHTML = addingMovies;
    initRatings();
  } catch (error) {
    console.log(error);
  }
}

function inputSubmit(event) {
  event.preventDefault();
  refs.gallery.innerHTML = '';
  formData = refs.searchInput.value.trim();
  if (formData === '' || formData === ' ') {
    galleryOfWeek();
    return Notiflix.Notify.failure('Type something, please.');
  }
  currentPage = 1;
  initSearchMovie();
}

function clearInput() {
  refs.searchInput.addEventListener('input', function () {
    if (refs.searchInput.value) {
      refs.clearBtn.classList.add('is-active');
    }
    if (refs.searchInput.value === '' || refs.searchInput.value === ' ') {
      refs.clearBtn.classList.remove('is-active');
      currentPage = 1;
      galleryOfWeek();
    }
  });
  refs.clearBtn.addEventListener('click', function () {
    refs.searchInput.value = '';
    refs.clearBtn.classList.remove('is-active');
    refs.gallery.innerHTML = '';
    currentPage = 1;
    galleryOfWeek();
  });
}

clearInput();

refs.form.addEventListener('submit', inputSubmit);

