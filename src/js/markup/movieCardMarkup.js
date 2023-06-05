import genres from '../genres.json';

export default ({
  poster_path,
  title,
  vote_average,
  genre_ids,
  release_date,
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

  return `<li class='item-movie-card' data-genres='${genre_ids}'>
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
};
