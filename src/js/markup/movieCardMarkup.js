import genres from '../genres.json';

// пропишить значення ціх змінних для своєї секціі
// змінна  randomMovies - це кількість випадкових індексов, які ми хочемо сгенерувати
// змінна  functionFetch - це функція для запита на api

export default ({
  poster_path,
  title,
  vote_average,
  genre_ids,
  release_date,
  id,
}) => {
  if (movieList) {
    const genresObject = {};
    genres.genres.forEach(genre => {
      genresObject[genre.id] = genre.name;
    });
    handlerMoviesWeek(genresObject);
  }

  function handlerMoviesWeek(genresObject) {
    functionFetch
      .then(data => {
        createMarkupMovies(data, genresObject);
      })
      .catch(err => console.log(err));
  }
  function createMarkupMovies({ results }, genresObject) {
    const randomIndexes = getRandomMovieToShow(results);

    const moviesToShow = randomIndexes.map(index => results[index]);
    markupMovie(moviesToShow, genresObject);
  }

  function markupMovie(moviesToShow, genresObject) {
    movieList.innerHTML = moviesToShow
      .map(({ poster_path, title, vote_average, genre_ids, release_date }) => {
        const genreNames = getGenres(genresObject, genre_ids);

        return `<button class="button" data-action="open-modal"><li class='item-movie-card'>
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
        </li><button>`;
      })
      .join('');
    initRatings();
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
    while (randomIndexes.length < randomMovies) {
      const randomIndex = Math.floor(Math.random() * results.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    return randomIndexes;
  }

  function getGenres(genresObject, genre_ids) {
    let genreNames = '';
    const mainGenre = genresObject[genre_ids[0]];
    const anotherGenre = genresObject[genre_ids[1]];

    if (genre_ids.length > 0) {
      if (mainGenre.length > 10) {
        genreNames = mainGenre.split('');
      }
      if (mainGenre.length + anotherGenre.length > 10) {
        genreNames = mainGenre;
      } else {
        genreNames = `${mainGenre}, ${anotherGenre}`;
      }
    }
    return genreNames;
  }
};
