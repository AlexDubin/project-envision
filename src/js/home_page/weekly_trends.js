import genres from '../genres.json';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmFhZDQ4MjlkYjI1ZWQ1Mjc0NmY0NmY4YzQ1NzRlYSIsInN1YiI6IjY0NzIzZDc3OWFlNjEzMDBjNGM3NmY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v_Pd0M6hpO0qy1_8-nNBGtFxbeHjE8i8mgfszlHvjZc',
    accept: 'application/json',
  },
};

async function getTrendingMoviesByWeek(page = 1) {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/week?language=en-US&page=${page}`,
      options
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const movieList = document.querySelector('.list-movie-card');

if (movieList) {
  const genresObject = {};
  genres.genres.forEach(genre => {
    genresObject[genre.id] = genre.name;
  });
  handlerMoviesWeek(genresObject);
}

function handlerMoviesWeek(genresObject) {
  getTrendingMoviesByWeek()
    .then(data => {
      createMarkupMovies(data, genresObject);
    })
    .catch(err => console.log(err));
}
function createMarkupMovies({ results }, genresObject) {
  const randomIndexes = getRandomMovieToShow(results);
  // const randomIndexes = [];
  // while (randomIndexes.length < 3) {
  //   const randomIndex = Math.floor(Math.random() * results.length);
  //   if (!randomIndexes.includes(randomIndex)) {
  //     randomIndexes.push(randomIndex);
  //   }
  // }
  const moviesToShow = randomIndexes.map(index => results[index]);
  markupMovie(moviesToShow, genresObject);
}

function markupMovie(moviesToShow, genresObject) {
  movieList.innerHTML = moviesToShow
    .map(({ poster_path, title, vote_average, genre_ids, release_date }) => {
      const genreNames = getGenres(genresObject, genre_ids);

      return `<li class='item-movie-card'>
              <img class='poster-movie-card' src='https://image.tmdb.org/t/p/original${poster_path}' alt='${title}'>
              <div class='overlay-movie-card'></div>
              <div class='info-movie-card'>
                <h4 class='title-movie-card'>${title}</h4>
                <div class='wrapper-movie-card'>
                  <div class='genre-year-movie-card'>
                    <p class='genre-movie-card span'>${genreNames}</p>
                    <span class='divider-movie-card'>&#124</span>
                    <p class='year-movie-card span'>${release_date.slice(
                      0,
                      4
                    )}</p>
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
            </li>`;
    })
    .join('');
  initRatings();
}

function getGenres(genresObject, genre_ids) {
  let genreNames = '';
  const mainGenre = genresObject[genre_ids[0]];
  const anotherGenre = genresObject[genre_ids[1]];

  if (genre_ids.length > 0) {
    if (mainGenre.length > 17) {
      genreNames = mainGenre.split('');
    }
    if (mainGenre.length + anotherGenre.length > 17) {
      genreNames = mainGenre;
    } else {
      genreNames = `${mainGenre}, ${anotherGenre}`;
    }
  }
  return genreNames;
}

function initRatings() {
  const ratings = document.querySelectorAll('.rating');
  ratings.forEach(rating => {
    initRating(rating);
  });
}
function initRating(rating) {
  const ratingActive = rating.querySelector('.rating-active');
  const ratingValue = rating.querySelector('.rating-value');

  if (ratingValue) {
    setRatingActiveWidth(ratingActive, ratingValue.innerHTML);
  }
}

function setRatingActiveWidth(ratingActive, index) {
  const ratingActiveWidth = (index / 10) * 100;
  ratingActive.style.width = `${ratingActiveWidth}%`;
}

function getRandomMovieToShow(results) {
  const randomIndexes = [];
  while (randomIndexes.length < 3) {
    const randomIndex = Math.floor(Math.random() * results.length);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }
  return randomIndexes;
}
