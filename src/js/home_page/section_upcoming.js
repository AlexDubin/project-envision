import axios from 'axios';
import genres from '../genres.json';

const upcoming = document.querySelector('.upcoming');

const API_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2FhN2IzMjk5NmM0N2RhMTQxZWI1N2IwZTVjZTQ3NiIsInN1YiI6IjY0N2M5OTdkZTMyM2YzMDEyNzUyM2IzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Blrs7t4WoJ6-3sy6A_Vz3twkTCmEg9nM0JyuAHg88WM';
const API_KEY = 'ccaa7b32996c47da141eb57b0e5ce476';

const BASE_URL = 'https://api.themoviedb.org/3/movie/upcoming';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2FhN2IzMjk5NmM0N2RhMTQxZWI1N2IwZTVjZTQ3NiIsInN1YiI6IjY0N2M5OTdkZTMyM2YzMDEyNzUyM2IzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Blrs7t4WoJ6-3sy6A_Vz3twkTCmEg9nM0JyuAHg88WM',
  },
};

async function getUpcomingMovies() {
  try {
    const response = await axios.get(BASE_URL, options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

getUpcomingMovies()
  .then(data => {
    console.log(data);
    markupUpcomingMovies(data);
  })
  .catch(err => console.log(err));

function markupUpcomingMovies({ results }) {
  // console.log(results);
  const randomIndex = Math.floor(Math.random() * results.length);
  // console.log(randomIndex);
  // console.log(results[randomIndex]);
  const {
    adult,
    backdrop_path,
    genre_ids,
    id,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    video,
    vote_average,
    vote_count,
  } = results[randomIndex];

  upcoming.innerHTML = `<div class="container">
  
  <h2 class="title-weekly-trends">UPCOMING THIS MONTH</h2>
  <div class="">
    <div class="">
    <img class="" src='https://image.tmdb.org/t/p/original${backdrop_path}' alt='${title}'>
         </div>
    <div class="">
      <h3 class="">${title}</h3>
      <ul class="list">
        <li class="">
          <div class="">
            <p class="">Release date</p>
            <p class="">${release_date}</p>
          </div>
          <div class="">
            <p class="">Vote / Votes</p>
            <p class="">
              <span class="">${vote_average}</span> /
              <span class="">${vote_count}</span>
            </p>
          </div>
        </li>
        <li class="">
          <div class="">
            <p class="">Popularity</p>
            <p class="">${popularity}</p>
          </div>
          <div class="">
            <p class="">Genre</p>
            <p class="">${genre_ids}</p>
          </div>
        </li>
      </ul>
      <h4 class="">About</h4>
      <p class="">${overview}</p>
      <button class="xbutton" type="button" id="addToMyLibrary"><p>Add to my library</p></button>
      </div>
  </div>
</div>`;
}
