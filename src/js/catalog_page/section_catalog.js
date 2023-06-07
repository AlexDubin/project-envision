import Notiflix from 'notiflix';
import Pagination from 'tui-pagination'; 
import axios from 'axios';
import initRatings from '../utils/initRating';
import genres from '../genres.json';



const URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWQzY2MzZDA1Nzk2OGE0YWJlZGY1MzVkOGNiZDIwMiIsInN1YiI6IjY0N2EzNjI3Y2FlZjJkMDExOWJmMDc3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vnk9Mx4FCU9-aMju8ubwqMt0iiZWjWxQo-T3KlsNAWg';


const gallery = document.querySelector('.gallery');
const pagaContainer = document.getElementById('tui-pagination-container');
const Pagination = require('tui-pagination');


let currentPage = 1;



function scrollToAnchor() {
    gallery.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
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



export function buildGallery(movies) {
    return movies
    .filter((movies) => !Object.values(movies).includes(null))
    .map(({
        poster_path,
        title,
        vote_average,
        genre_ids,
        release_date,
        id,
      }) => {
        const genresObject = {};
        let genreNames = '';
      
        genres.genres.forEach(genre => {
          genresObject[genre.id] = genre.name;
        });
      
        if (genre_ids.length > 0) {
          if (genre_ids.length === 1 || genre_ids.join(', ').length <= 20) {
            genreNames = genresObject[genre_ids[0]];
          } else {
            genreNames = `${genresObject[genre_ids[0]]}, ${
              genresObject[genre_ids[1]]
            }`;
          }
        }
        
        if(release_date) {
            return `<li class='item-movie-card' data-genres='${genre_ids}' data-id='${id}'><button class="button" data-action="open-modal">
            <img
            class='poster-movie-card'
            src='https://image.tmdb.org/t/p/original${poster_path}'
            srcset='https://image.tmdb.org/t/p/w342${poster_path} 342w,
            https://image.tmdb.org/t/p/w500${poster_path} 500w,
            https://image.tmdb.org/t/p/w780${poster_path} 780w,
            https://image.tmdb.org/t/p/original${poster_path} 1500w'
            sizes='(max-width:767px) 280px,
            (max-width:1279px) 224px,
            395px'
            width='395'
            height='574'
            alt='${title} poster'
            loading='lazy'
            >
            <div class='overlay-movie-card'></div>
            <div class='info-movie-card'>
              <h4 class='title-movie-card'>${title}</h4>
              <div class='wrapper-movie-card'>
                <div class='genre-year-movie-card'>
                  <p class='genre-movie-card span'>${genreNames}</p>
                  <span class='divider-movie-card'>&#124</span>
                  <p class='year-movie-card span'>${release_date.slice(0, 4)}</p>
                </div>
                  <div class="rating">
                    <div class="rating-body">
                      <div class="rating-active"></div>
                      <div class="rating-items">
                        <input type="radio" class="rating-item" value="1" name="rating" />
                        <input type="radio" class="rating-item" value="2" name="rating" />
                        <input type="radio" class="rating-item" value="3" name="rating" />
                        <input type="radio" class="rating-item" value="4" name="rating" />
                        <input type="radio" class="rating-item" value="5" name="rating" />
                      </div>
                    </div>
                  <div class="rating-value">${vote_average}</div>
              </div>
            </div>
          <button>
          </li>`;
        } 
    })
    .join('');
}

export async function galleryOfWeek() {
    try {
        let result = await fetchMoviesOfweek();
        const addingMovies = buildGallery(result.results);
        gallery.innerHTML = addingMovies;
        initRatings();
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
    const instance = new Pagination(pagaContainer, {
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


