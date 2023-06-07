import axios from 'axios';
import Notiflix from 'notiflix';
import Pagination from 'tui-pagination';
import customSelect from 'custom-select';
import initRatings from '../utils/initRating';
import dataYears from '../years.json';
import { buildGallery } from './section_catalog';
import { API_KEY } from '../api/catalogAPI';
import { URL } from '../api/catalogAPI';
import { buildGallery } from './catalog_gallery_markup';
import { galleryOfWeek } from './section_catalog';
import { noMovie } from './catalog_gallery_markup';
import { refs } from './catalog-refs';
import Pagination from '../utils/pagination';
import 'custom-select/build/custom-select.css';

const Pagination = require('tui-pagination');

let formData = '';
let yearParam = '';
let currentPage = 1;


populateYearsOptions(dataYears.year);
const yearSelect = customSelect(refs.yearSelectEl)[0];

yearSelect.select.addEventListener('change', filterMoviesYear);

function populateYearsOptions(years) {
  years.forEach(year => {
    const optionEl = document.createElement('option');

    optionEl.textContent = year.name;
    optionEl.value = year.id;

    refs.yearSelectEl.appendChild(optionEl);
  });
}

function filterMoviesYear(evt) {
  let year = evt.target.value;
  yearParam = `&primary_release_year=${year}`;
  console.log(yearParam);
}

async function fetchMoviesSearch() {
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

function paginationSeach(props) { 
  const pageCount = props.total_pages;
  let pageIndex = currentPage;

  new Pagination({
    container: refs.paginationContainer,
    count: pageCount,
    index: pageIndex,
    
  });
}

async function searchMovie() {
  try {
    const result = await fetchMoviesSearch();
    const addingMovies = buildGallery(result.results);
    if (result.total_results === 0) {
      return noMovie();
    }
    paginationSeach(result);
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
  if (yearParam === '') {
    galleryOfWeek();
    return Notiflix.Notify.failure('Choose Year, please.');
  }
  if (formData === '' || formData === ' ') {
    galleryOfWeek();
    return Notiflix.Notify.failure('Type something, please.');
  }
  currentPage = 1;
  searchMovie();
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

