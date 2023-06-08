import genres from '../genres.json';
// ---to do import
export default ({
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
  let imageMovie = '';
  if (poster_path === null) {
    // ---to do src
    imageMovie = `<img class='poster-movie-card' src='' alt='default poster'>`;
  } else {
    imageMovie = `<img
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
>`;
  }

  return `<li class='item-movie-card m-modal' data-genres='${genre_ids}' data-id='${id}'>
  <button class="button" data-action="open-modal">${imageMovie}
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
</button>
</li>`;
};
