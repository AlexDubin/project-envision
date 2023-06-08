import genres from '../genres.json';
let genresNames = '';
const genresArray = genres.genres;
const upcoming = document.querySelector('.upcoming');

// export { markupUpcomingMovies, connectLibraryBtn, convertGenresToNames };

export default function markupUpcomingMovies({ results }) {
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

  convertGenresToNames(genre_ids, genresArray);

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
              <span class="upcoming__vote--value-average">${vote_average}</span>
              /
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
            <p class="upcoming__genre--value">${genresNames}</p>
          </div>
        </li>
      </ul>
      <h4 class="upcoming__about">About</h4>
      <p class="upcoming__overview">${overview}</p>
      <button
        class="upcoming__addToLibrary-button"
        type="button"
        id="addToMyLibrary"
      >
        <p>Add to my library</p>
      </button>
    </div>
  </div>
</div>
`;
  connectLibraryBtn();
}

function connectLibraryBtn() {
  const upcomingBtn = document.querySelector('#addToMyLibrary');
  // upcomingBtn.addEventListener('click', functionAddToMyLibrary);
  // console.log(upcomingBtn);
}

function convertGenresToNames(array, arrayOfObjects) {
  let genresNamesArray = [];

  array.forEach(code => {
    arrayOfObjects.forEach(number => {
      if (code === number.id) {
        genresNamesArray.push(number.name);
      }
    });
  });

  if (genresNamesArray.length > 2) {
    genresNames = `${genresNamesArray[0]} and others...`;
  } else if (genresNamesArray.length === 2) {
    genresNames = `${genresNamesArray[0]}, ${genresNamesArray[1]}`;
  } else {
    genresNames = `${genresNamesArray[0]}`;
  }
}
