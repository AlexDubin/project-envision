import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWYwYzIyMWE2YTRjMTZkOTRjZTUwMDIzYjU4MzMzYiIsInN1YiI6IjY0NGZiYzBhMjNhMzE0MDJlNTdjM2Q0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kZBqemQQaP5AfqtlQ7E69qa116O60SNbbfSuHzK1gjU',
    accept: 'application/json',
  },
};

const poster = document.querySelector('.hero__wrap');
const heroContainer = document.querySelector('.hero');

const fetchTrendingMoviesByDay = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/rending/movie/day?language=en-US`,
      options
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const markupRandomTrendingMovie = () => {
  let markup = '';

  fetchTrendingMoviesByDay()
    .then(({ results }) => {
      // heroContainer.classList.remove('hero--bg');
      const randomNum = Math.floor(Math.random() * 20) + 0;

      let posterUrl = '';
      console.log(results[randomNum]);
      const { title, overview, poster_path, backdrop_path, vote_average } =
        results[randomNum];
      const ratingValue = vote_average * 10;

      window.innerWidth > 768
        ? (posterUrl = `https://image.tmdb.org/t/p/original/${backdrop_path}`)
        : (posterUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`);

      markup = `
      <div class="hero__thumb" style="background: linear-gradient(86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%), url(${posterUrl}); background-size: cover; background-repeat: no-repeat;">
        

        <div class="hero__inner">
          <div class="hero__content">
            <h1 class="hero__title">${title}</h1>
            <div class="rating">
              <div class="rating__body">
                <div class="rating__active" style="width: ${ratingValue}%;"></div>
                <div class="rating__items">
                  <input type="radio" class="rating__item" value="1" name="rating" />
                  <input type="radio" class="rating__item" value="2" name="rating" />
                  <input type="radio" class="rating__item" value="3" name="rating" />
                  <input type="radio" class="rating__item" value="4" name="rating" />
                  <input type="radio" class="rating__item" value="5" name="rating" />
                </div>
              </div>
            </div>
            <p class="hero__text hero__text--truncate">
              ${overview}
            </p>
            <div class="hero__nav">
              <button class="hero__btn hero__btn--primary">Watch trailer</button>
              <button class="hero__btn hero__btn--secondary">More details</button>
            </div>
          </div>
        </div>

      </div>`;
      poster.innerHTML = markup;
    })
    .catch(() => {
      heroContainer.classList.toggle('hero--bg');
      markup = `
      <div class="hero__thumb hero__thumb--bg">
        <div class="hero__inner">
          <div class="hero__content">
            <h1 class="hero__title default">Let’s Make Your Own Cinema</h1>
            <p class="hero__text">
              Is a guide to creating a personalized movie theater experience.
              You'll need a projector, screen, and speakers.
            </p>
            <div class="hero__nav">
              <a href="./library.html">
                <button class="hero__btn hero__btn--primary">
                  Get Started
                </button>
              </a>
              <button class="hero__btn-secondary vhidden">More details</button>
            </div>
          </div>
        </div>

        <div class="hero__overlay"></div>
      </div>`;
      poster.innerHTML = markup;
    });
};

markupRandomTrendingMovie();
