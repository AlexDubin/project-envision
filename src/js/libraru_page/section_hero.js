import { fetchTrendingMoviesByDay } from '../api/fetch-api.js';
import { onTrailerBtnClick } from '../modals/modal_trailer.js';
import { heroRefs } from '../refs/hero-refs.js';

export const markupRandomTrendingMovie = async () => {
  let markup = '';
  let posterStyle = 'background-size: cover';
  const randomNum = Math.floor(Math.random() * 20) + 0;

  try {
    const { results } = await fetchTrendingMoviesByDay();
    const { id, title, overview, backdrop_path, vote_average } =
      results[randomNum];
    const ratingValue = vote_average * 10;
    const posterUrl = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

    if (window.innerWidth < 768) {
      posterStyle = 'background-size: 768px; background-position: center';
    }

    markup = `
      <div class="hero__wrap" style="background: linear-gradient(86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%), url(${posterUrl}); ${posterStyle}; background-repeat: no-repeat;">
        <div class="container">
          <div class="hero__inner" >
            <h1 class="hero__title">${title}</h1>
            <div class="hrating">
              <div class="hrating__body">
                <div class="hrating__active" style="width: ${ratingValue}%;"></div>
                <div class="hrating__items">
                  <input type="radio" class="hrating__item" value="1" name="rating" />
                  <input type="radio" class="hrating__item" value="2" name="rating" />
                  <input type="radio" class="hrating__item" value="3" name="rating" />
                  <input type="radio" class="hrating__item" value="4" name="rating" />
                  <input type="radio" class="hrating__item" value="5" name="rating" />
                </div>
              </div>
            </div>
            <p class="hero__text hero__text--trunc">
              ${overview}
            </p>
            <div class="hero__btns" id="${id}">
              <button id="watch-trailer" class="hero__btn hero__btn--primary hero__btn--watch-trailer" data-movie-id="${id}">Watch trailer</button>
              <button class="hero__btn hero__btn--secondary" data-movie="info">More details</button>
            </div>
          </div>
        </div>
      </div>`;
  } catch (error) {
    heroRefs.heroContainer.classList.toggle('hero--bg-lib');
    markup = `
      <div class="container">
        <div class="lib-hero__wrap">
          <h1 class="lib-hero__title">Create Your Dream Cinema</h1>
          <p class="lib-hero__text">
            Is a guide to designing a personalized movie theater experience with the
            right equipment, customized decor, and favorite films. This guide helps
            you bring the cinema experience into your own home with cozy seating,
            dim lighting, and movie theater snacks.
          </p>
        </div>
      </div>`;
  } finally {
    heroRefs.heroContainer.innerHTML = markup;
    const trailerBtn = document.getElementById('watch-trailer');
    if (trailerBtn) {
      trailerBtn.addEventListener('click', event => {
        onTrailerBtnClick(event);
      });
    }
  }
};

markupRandomTrendingMovie();
