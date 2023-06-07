!function(){function e(e){return e&&e.__esModule?e.default:e}var t,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},o=i.parcelRequire34ff;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return a[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},i.parcelRequire34ff=o),o("i8Q71");var r=o("8yl2Y"),s=o("faU4B"),l=o("6U7c4");let c=async()=>{let e="",t="background-size: cover";try{let{results:i}=await (0,r.fetchTrendingMoviesByDay)(),{id:a,title:n,overview:o,backdrop_path:s,vote_average:l}=i[Math.floor(20*Math.random())+0],c=`https://image.tmdb.org/t/p/original/${s}`;window.innerWidth<768&&(t="background-size: 768px; background-position: center"),e=`
      <div class="hero__wrap" style="background: linear-gradient(86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%), url(${c}); ${t}; background-repeat: no-repeat;">
        <div class="container">
          <div class="hero__inner" >
            <h1 class="hero__title">${n}</h1>
            <div class="hrating">
              <div class="hrating__body">
                <div class="hrating__active" style="width: ${10*l}%;"></div>
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
              ${o}
            </p>
            <div class="hero__btns" id="${a}">
              <button id="watch-trailer" class="hero__btn hero__btn--primary hero__btn--watch-trailer" data-movie-id="${a}">Watch trailer</button>
              <button class="hero__btn hero__btn--secondary" data-movie="info">More details</button>
            </div>
          </div>
        </div>
      </div>`}catch(t){(0,l.heroRefs).heroContainer.classList.toggle("hero--bg"),e=`
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
      </div>`}finally{l.heroRefs.heroContainer.innerHTML=e;let t=document.getElementById("watch-trailer");t&&t.addEventListener("click",e=>{(0,s.onTrailerBtnClick)(e)})}};c();var d=o("dIxxU"),p=o("XcJ0g");let g="",u=document.querySelector(".upcoming"),v={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2FhN2IzMjk5NmM0N2RhMTQxZWI1N2IwZTVjZTQ3NiIsInN1YiI6IjY0N2M5OTdkZTMyM2YzMDEyNzUyM2IzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Blrs7t4WoJ6-3sy6A_Vz3twkTCmEg9nM0JyuAHg88WM"}};(async function(){try{let e=await (0,d.default).get("https://api.themoviedb.org/3/movie/upcoming",v);return console.log(e.data),e.data}catch(e){console.log(e)}})().then(t=>{console.log(t),function({results:t}){let i=Math.floor(Math.random()*t.length),{adult:a,backdrop_path:n,genre_ids:o,id:r,original_language:s,original_title:l,overview:c,popularity:d,poster_path:v,release_date:_,title:h,video:m,vote_average:y,vote_count:f}=t[i];(function(t){let i={};e(p).genres.forEach(e=>{i[e.id]=e.name}),t.length>0&&(g=1===t.length||t.join(", ").length<=20?i[t[0]]:`${i[t[0]]}, ${i[t[1]]}`)})(o),u.innerHTML=`<div class="container">
  <h2 class="upcoming__section-title">UPCOMING THIS MONTH</h2>
  <div class="upcoming__block">
    <div class="upcoming__poster">
      <img
        class="upcoming__picture"
        src="https://image.tmdb.org/t/p/original${n}"
        alt="${h}"
      />
    </div>
    <div class="upcoming__info">
      <h3 class="upcoming__title">${h}</h3>
      <ul class="list upcoming__list-info">
        <li class="upcoming__list-info--left">
          <div class="upcoming__release-date">
            <p class="upcoming__release-date--title">Release date</p>
            <p class="upcoming__release-date--value">${_}</p>
          </div>
          <div class="upcoming__vote">
            <p class="upcoming__vote--title">Vote / Votes</p>
            <p class="upcoming__vote--value">
              <span class="upcoming__vote--value-average">${y}</span> /
              <span class="upcoming__vote--value-count">${f}</span>
            </p>
          </div>
        </li>
        <li class="upcoming__list-info--right">
          <div class="upcoming__popularity">
            <p class="upcoming__popularity--title">Popularity</p>
            <p class="upcoming__popularity--value">${d}</p>
          </div>
          <div class="upcoming__genre">
            <p class="upcoming__genre--title">Genre</p>
            <p class="upcoming__genre--value">${g}</p>
          </div>
        </li>
      </ul>
      <h4 class="upcoming__about">About</h4>
      <p class="upcoming__overview">${c}</p>
      <button class="upcoming__addToLibrary-button" type="button" id="addToMyLibrary">
        <p>Add to my library</p>
      </button>
    </div>
  </div>
</div>`,function(){let e=document.querySelector("#addToMyLibrary");console.log(e)}()}(t)}).catch(e=>console.log(e));var p=o("XcJ0g"),d=o("dIxxU"),p=o("XcJ0g"),_=({poster_path:t,title:i,vote_average:a,genre_ids:n,release_date:o,id:r})=>{let s={},l="";return e(p).genres.forEach(e=>{s[e.id]=e.name}),n.length>0&&(l=1===n.length||n.join(", ").length<=20?s[n[0]]:`${s[n[0]]}, ${s[n[1]]}`),`<li class='item-movie-card' data-genres='${n}' data-id='${r}'>
  <button class="button" data-action="open-modal">${null===t?"<img class='poster-movie-card' src='' alt='default poster'>":`<img
  class='poster-movie-card'
  src='https://image.tmdb.org/t/p/original${t}'
  srcset='https://image.tmdb.org/t/p/w342${t} 342w,
  https://image.tmdb.org/t/p/w500${t} 500w,
  https://image.tmdb.org/t/p/w780${t} 780w,
  https://image.tmdb.org/t/p/original${t} 1500w'
  sizes='(max-width:767px) 280px,
  (max-width:1279px) 224px,
  395px'
  width='395'
  height='574'
  alt='${i} poster'
  loading='lazy'
>`}
  <div class='overlay-movie-card'></div>
  <div class='info-movie-card'>
    <h4 class='title-movie-card'>${i}</h4>
    <div class='wrapper-movie-card'>
      <div class='genre-year-movie-card'>
        <p class='genre-movie-card span'>${l}</p>
        <span class='divider-movie-card'>&#124</span>
        <p class='year-movie-card span'>${o.slice(0,4)}</p>
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
        <div class="rating-value">${a}</div>
    </div>
  </div>
</button>
</li>`},h=o("14Rx2");let m={movieList:document.querySelector(".list-movie-card")},y={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmFhZDQ4MjlkYjI1ZWQ1Mjc0NmY0NmY4YzQ1NzRlYSIsInN1YiI6IjY0NzIzZDc3OWFlNjEzMDBjNGM3NmY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v_Pd0M6hpO0qy1_8-nNBGtFxbeHjE8i8mgfszlHvjZc",accept:"application/json"}};async function f(e=1){try{let t=await (0,d.default).get(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=${e}`,y);return t.data}catch(e){console.log(e)}}if(m.movieList){let i={};e(p).genres.forEach(e=>{i[e.id]=e.name}),t=i,f().then(e=>{(function({results:e},t){let i=function(e){let t=[];for(;t.length<3;){let i=Math.floor(Math.random()*e.length);t.includes(i)||t.push(i)}return t}(e),a=i.map(t=>e[t]);m.movieList.innerHTML=a.map(_).join(""),(0,h.default)(),m.movieList.addEventListener("click",onOpenModalFilm),window.addEventListener("keydown",onEscKeyPress)})(e,0)}).catch(e=>console.log(e))}o("bf8lc"),o("7hKzD"),o("cs2b8")}();
//# sourceMappingURL=index.09a226f5.js.map
