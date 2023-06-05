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
    console.log(response.data);
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

  getTrendingMoviesByWeek()
    .then(data => {
      console.log(data);
      markupMovies(data);
    })
    .catch(err => console.log(err));

  function markupMovies({ results }) {
    console.log({ results });
    const randomIndexes = [];
    while (randomIndexes.length < 3) {
      const randomIndex = Math.floor(Math.random() * results.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    const moviesToShow = randomIndexes.map(index => results[index]);
    movieList.innerHTML = moviesToShow
      .map(({ poster_path, title, vote_average, genre_ids, release_date }) => {
        console.log(5, vote_average, release_date);
        let genreNames = '';
        if (genre_ids.length > 0) {
          if (genre_ids.length === 1 || genre_ids.join(', ').length <= 20) {
            genreNames = genresObject[genre_ids[0]];
          } else {
            genreNames = `${genresObject[genre_ids[0]]}, ${
              genresObject[genre_ids[1]]
            }`;
          }
        }
        return `<li class='item-movie-card'>
          <img class='poster-movie-card' src='https://image.tmdb.org/t/p/original${poster_path}' alt='${title}'>
          <div class='overlay-movie-card'></div>
          <div class='info-movie-card'>
            <h4 class='title-movie-card'>${title}</h4>
            <div class='wrapper-movie-card'>
              <div class='genre-year-movie-card'>
                <p class='genre-movie-card span'>${genreNames}</p>
                <span class='divider-movie-card'>&#124</span>
                <p class='year-movie-card span'>${release_date.slice(0, 4)}</p>
              </div>
              <div class="form-item">
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
          </div>
        </li>`;
      })
      .join('');
    initRatings();
  }
  function initRatings() {
    console.log(4);
    const ratings = document.querySelectorAll('.rating');
    ratings.forEach(rating => {
      initRating(rating);
    });
  }
  function initRating(rating) {
    const ratingActive = rating.querySelector('.rating-active');
    const ratingValue = rating.querySelector('.rating-value');
    console.log(ratingValue, ratingActive);

    if (ratingValue) {
      setRatingActiveWidth(ratingActive, ratingValue.innerHTML);
    }
  }

  function setRatingActiveWidth(ratingActive, index) {
    console.log(4);
    const ratingActiveWidth = (index / 10) * 100;
    ratingActive.style.width = `${ratingActiveWidth}%`;
    console.log(4);
  }
}
