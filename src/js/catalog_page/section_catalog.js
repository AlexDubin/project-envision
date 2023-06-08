import Notiflix from 'notiflix'; 
import axios from 'axios';
import initRatings from '../utils/initRating';
import movieCardMarkup from '../markup/movieCardMarkup';



const URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWQzY2MzZDA1Nzk2OGE0YWJlZGY1MzVkOGNiZDIwMiIsInN1YiI6IjY0N2EzNjI3Y2FlZjJkMDExOWJmMDc3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vnk9Mx4FCU9-aMju8ubwqMt0iiZWjWxQo-T3KlsNAWg';


const gallery = document.querySelector('.gallery');
const paginationContainer = document.querySelector('.pagination ul');



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
  return movies.map(movie => {
    if (movie.release_date)
      return movieCardMarkup(movie);
    return '';
      
    }).join('');
}

export async function galleryOfWeek(currentPage) {
  debugger;
  try {
    let result = await fetchMoviesOfweek(currentPage);
    const addingMovies = buildGallery(result.results);
    gallery.innerHTML = addingMovies;
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
  debugger;
  try {
    let result = await fetchMoviesOfweek(1);
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




import Pagination from '../utils/pagination';
import movieCardMarkup from '../markup/movieCardMarkup';







function paginationWeek(props) {
    new Pagination({
      container: paginationContainer,
      count: Math.min(props.total_pages, 197),
      index: 1,
      callback: galleryOfWeek,
    });
  
}


