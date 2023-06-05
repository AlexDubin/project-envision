import axios from 'axios';

import { onTrailerBtnClick } from '../modals/modal_trailer.js';

const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWYwYzIyMWE2YTRjMTZkOTRjZTUwMDIzYjU4MzMzYiIsInN1YiI6IjY0NGZiYzBhMjNhMzE0MDJlNTdjM2Q0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kZBqemQQaP5AfqtlQ7E69qa116O60SNbbfSuHzK1gjU',
    accept: 'application/json',
  },
};

const heroContainer = document.querySelector('.hero');

const fetchTrendingMoviesByDay = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?language=en-US`,
      options
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const markupRandomTrendingMovie = () => {
  let markup = '';

  fetchTrendingMoviesByDay()
    .then(({ results }) => {
      let posterUrl = '';
      const randomNum = Math.floor(Math.random() * 20) + 0;
      const { id, title, overview, poster_path, backdrop_path, vote_average } =
        results[randomNum];
      const ratingValue = vote_average * 10;

      window.innerWidth > 320
        ? (posterUrl = `https://image.tmdb.org/t/p/original/${backdrop_path}`)
        : (posterUrl = `https://image.tmdb.org/t/p/w400/${poster_path}`);

      markup = `
        <div class="hero__wrap" style="background: linear-gradient(86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%), url(${posterUrl}); background-size: cover; background-repeat: no-repeat;">
          <div class="container">
            <div class="hero__inner" >
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
              <p class="hero__text hero__text--trunc">
                ${overview}
              </p>
              <div class="hero__btns" id="${id}">
              <button id="watch-trailer" class="hero__btn hero__btn--primary hero__btn--watch-trailer" data-movie-id="${id}">Watch trailer</button>
                <button class="hero__btn hero__btn--secondary">More details</button>
              </div>
            </div>
          </div>
        </div>`;
    })
    .catch(() => {
      heroContainer.classList.toggle('hero--bg');
      markup = `
      <div class="hero__wrap">
        <div class="container">
          <div class="hero__inner">
            <h1 class="hero__title hero__title--default">Let’s Make Your Own Cinema</h1>
            <p class="hero__text">
              Is a guide to creating a personalized movie theater experience.
              You'll need a projector, screen, and speakers. 
              <span class="hero__text--add">Decorate your space, choose your films, and stock up on snacks for the full experience.</span>
            </p>
            
            <div class="hero__btns">
              <a href="./catalog.html">
                <button class="hero__btn hero__btn--primary">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>`;
    })
    .finally(() => (heroContainer.innerHTML = markup));
};

const trailerBtn = document.getElementById('watch-trailer');
if (trailerBtn) {
  trailerBtn.addEventListener('click', event => {
    onTrailerBtnClick(event);
  });
}

markupRandomTrendingMovie();
