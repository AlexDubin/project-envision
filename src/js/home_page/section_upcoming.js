import axios from 'axios';
import genres from '../genres.json';
// console.log(genres);

let genreNames = '';
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

getUpcomingMovies()
  .then(data => {
    console.log(data);
    markupUpcomingMovies(data);
  })
  .catch(err => console.log(err));

async function getUpcomingMovies() {
  try {
    const response = await axios.get(BASE_URL, options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

function markupUpcomingMovies({ results }) {
  const randomIndex = Math.floor(Math.random() * results.length);
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

  convertGenreIds(genre_ids);

  upcoming.innerHTML = `<div class="container">
  <h2 class="upcoming__section-title">UPCOMING THIS MONTH</h2>
  <div class="upcoming__block">
    <div class="upcoming__poster">
      <img
        class="upcoming__picture"
        src="https://image.tmdb.org/t/p/original${backdrop_path}"
        alt="${title}"
      />
    </div>
    <div class="upcoming__info">
      <h3 class="upcoming__title">${title}</h3>
      <ul class="list upcoming__list-info">
        <li class="upcoming__list-info--left">
          <div class="upcoming__release-date">
            <p class="upcoming__release-date--title">Release date</p>
            <p class="upcoming__release-date--value">${release_date}</p>
          </div>
          <div class="upcoming__vote">
            <p class="upcoming__vote--title">Vote / Votes</p>
            <p class="upcoming__vote--value">
              <span class="upcoming__vote--value-average">${vote_average}</span> /
              <span class="upcoming__vote--value-count">${vote_count}</span>
            </p>
          </div>
        </li>
        <li class="upcoming__list-info--right">
          <div class="upcoming__popularity">
            <p class="upcoming__popularity--title">Popularity</p>
            <p class="upcoming__popularity--value">${popularity}</p>
          </div>
          <div class="upcoming__genre">
            <p class="upcoming__genre--title">Genre</p>
            <p class="upcoming__genre--value">${genreNames}</p>
          </div>
        </li>
      </ul>
      <h4 class="upcoming__about">About</h4>
      <p class="upcoming__overview">${overview}</p>
      <button class="upcoming__addToLibrary-button" type="button" id="addToMyLibrary">
        <p>Add to my library</p>
      </button>
    </div>
  </div>
</div>`;
connectLibraryBtn();
}

function connectLibraryBtn() {
  const upcomingBtn = document.querySelector('#addToMyLibrary');
  // upcomingBtn.addEventListener('click', functionAddToMyLibrary);
  console.log(upcomingBtn);
}

function convertGenreIds(genre_ids) {
  const genresObject = {};

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
  // console.log(genreNames);
}
