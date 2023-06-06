import Notiflix from 'notiflix';
import Pagination from 'tui-pagination'; 
import axios from 'axios';

import movieCardMarkup from '../markup/movieCardMarkup';
import initRatings from '../utils/initRating';

const URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWQzY2MzZDA1Nzk2OGE0YWJlZGY1MzVkOGNiZDIwMiIsInN1YiI6IjY0N2EzNjI3Y2FlZjJkMDExOWJmMDc3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vnk9Mx4FCU9-aMju8ubwqMt0iiZWjWxQo-T3KlsNAWg';
const base_img_url = 'https://image.tmdb.org/t/p/original';

const form = document.querySelector('#search-form');
const searchInput = document.querySelector('[name="searchQuery"]');
const gallery = document.querySelector('.gallery');
const clearBtn = document.querySelector('.clear-btn');
const pagContainer = document.getElementById('tui-pagination-container');
const Pagination = require('tui-pagination');

let formData = '';
let currentPage = 1;

function scrollToAnchor() {
    gallery.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
}

function noMovie() {
    pagContainer.innerHTML = '';
    gallery.innerHTML = `
    <div class="gallery-empty"
        <h2 class="title-empty">OOPS...</h2>
        <p class="text-empty">We are very sorry!
        We don’t have any results matching your search.</p>
    </div>   
    `;
}

async function fetchMoviesOfweek() {
    try {
        const {data} = await axios.get(`${URL}trending/all/week?language=en-US&page=${currentPage}`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                accept: 'application/json',
            },
        });
        console.log(data);
        return data;
    } catch (error) {
        Notiflix.Notify.failure('Sorry, there are no movies matching your search query. Please try again.');
    }
}

async function fetchMoviesSearch() {
    try {
        const {data} = await axios.get(`${URL}search/movie?query=${formData}&page=${currentPage}`, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWQzY2MzZDA1Nzk2OGE0YWJlZGY1MzVkOGNiZDIwMiIsInN1YiI6IjY0N2EzNjI3Y2FlZjJkMDExOWJmMDc3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vnk9Mx4FCU9-aMju8ubwqMt0iiZWjWxQo-T3KlsNAWg',
                accept: 'application/json'
            }
        });
        console.log(data);
        return data;
    } catch (error) {
        Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
    }
}

function buildGallery(movies) {
    return movies
    .filter((movies) => !Object.values(movies).includes(null))
    .map((movies) => {
        return `<li class="photo-card">
            <a class="gallery__link" href="${base_img_url}${movies.poster_path}"><img class="card-image" src="${base_img_url}${movies.poster_path}" alt="${movies.media_type}" loading="fast">

            
            </a>
        </li>`;
    })
    .join("");
    
}

async function galleryOfWeek() {
    try {
        let result = await fetchMoviesOfweek();
        const addingMovies = buildGallery(result.results);
        gallery.innerHTML = addingMovies;
        if (result.total_results === 0) {
            return noMovie();
        }
        paginationWeek(result);
    } catch (error) {
        console.log(error);
    }
}

galleryOfWeek();

function paginationWeek(props) {
    const instance = new Pagination(pagContainer, {
        page: currentPage,
        totalItems: props.total_pages,
        visiblePages: 4,
        centerAlign: true
    });
    instance.on("beforeMove", (eventData) => {
        const perPage = eventData;
        currentPage = perPage.page;
        galleryOfWeek();
        scrollToAnchor();
    });
    instance.getCurrentPage();
    
}

function paginationSeach(props) {
    const instance = new Pagination(pagContainer, {
        page: currentPage,
        totalItems: props.total_pages,
        visiblePages: 4,
        centerAlign: true
    });
    instance.on("beforeMove", (eventData) => {
        const perPage = eventData;
        currentPage = perPage.page;
        searchMovie();
        scrollToAnchor();
    });
    instance.getCurrentPage(); 
}

async function searchMovie() {
    try {
        const result = await fetchMoviesSearch();
        const addingMovies = buildGallery(result.results);
        if (result.total_results === 0) {
            return noMovie();
        }
        paginationSeach(result);
        gallery.innerHTML = addingMovies;  
    } catch (error) {
        console.log(error);
    } 
}


function inputSubmit(event) {
    event.preventDefault();
    gallery.innerHTML = '';
    formData = searchInput.value.trim();  
    if(formData === '' || formData === ' ') {
        return Notiflix.Notify.failure('Type something, please.');
    }
    currentPage = 1;
    searchMovie();
}

function clearInput() {
    searchInput.addEventListener("input", function() {
        if (searchInput.value) {
            clearBtn.classList.add('is-active');
        }
        if (searchInput.value === '' || searchInput.value === ' ') {
            clearBtn.classList.remove('is-active');
            currentPage = 1;
            galleryOfWeek();
        }
    });
    clearBtn.addEventListener('click', function() {
        searchInput.value = '';
        clearBtn.classList.remove('is-active');
        gallery.innerHTML = '';
        currentPage = 1;
        galleryOfWeek();
    });
}

clearInput();

form.addEventListener('submit', inputSubmit);
