import Notiflix from 'notiflix';
import Pagination from 'tui-pagination';
import customSelect from 'custom-select';
import axios from 'axios';
import initRatings from '../utils/initRating';
import 'custom-select/build/custom-select.css';
import { buildGallery } from './section_catalog';
import { galleryOfWeek } from './section_catalog';
import populateOptions from '../utils/populateOptions';


const URL = 'https://api.themoviedb.org/3/';
const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWQzY2MzZDA1Nzk2OGE0YWJlZGY1MzVkOGNiZDIwMiIsInN1YiI6IjY0N2EzNjI3Y2FlZjJkMDExOWJmMDc3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vnk9Mx4FCU9-aMju8ubwqMt0iiZWjWxQo-T3KlsNAWg';



const form = document.querySelector('#search-form');
const searchInput = document.querySelector('[name="searchQuery"]');
const gallery = document.querySelector('.gallery');
const clearBtn = document.querySelector('.clear-btn');
const yearSelectEl = document.getElementById('year-select');
const paginationContainer = document.querySelector('.pagination ul');


let formData = '';
let yearParam = '';

const years = [];

for (let year = 2023; year >= 1895; year -= 1) {
  years.push({
    id: year,
    name: year
  });
}

populateOptions(years, yearSelectEl);
const yearSelect = customSelect(yearSelectEl)[0];
yearSelect.select.addEventListener('change', filterMoviesYear);




function filterMoviesYear(evt) {
  let year = evt.target.value;
  yearParam = `&primary_release_year=${year}`;
  console.log(yearParam);
}


function noMovie() {
  paginationContainer.innerHTML = '';
  gallery.innerHTML = `
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


import Pagination from '../utils/pagination';





function paginationSearh(props) {
  new Pagination({
    container: paginationContainer,
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
    gallery.innerHTML = addingMovies;
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
    gallery.innerHTML = addingMovies;
    initRatings();
  } catch (error) {
    console.log(error);
  }
}

function inputSubmit(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  formData = searchInput.value.trim();
  if (formData === '' || formData === ' ') {
    galleryOfWeek();
    return Notiflix.Notify.failure('Type something, please.');
  }
  currentPage = 1;
  initSearchMovie();
}

function clearInput() {
  searchInput.addEventListener('input', function () {
    if (searchInput.value) {
      clearBtn.classList.add('is-active');
    }
    if (searchInput.value === '' || searchInput.value === ' ') {
      clearBtn.classList.remove('is-active');
      currentPage = 1;
      galleryOfWeek();
    }
  });
  clearBtn.addEventListener('click', function () {
    searchInput.value = '';
    clearBtn.classList.remove('is-active');
    gallery.innerHTML = '';
    currentPage = 1;
    galleryOfWeek();
  });
}

clearInput();

form.addEventListener('submit', inputSubmit);

