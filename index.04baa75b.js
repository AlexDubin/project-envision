!function(){function e(e){return e&&e.__esModule?e.default:e}var t,a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},o=a.parcelRequire34ff;null==o&&((o=function(e){if(e in i)return i[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return i[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},a.parcelRequire34ff=o),o("i8Q71");var r=o("dIxxU"),s=o("faU4B");let l={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWYwYzIyMWE2YTRjMTZkOTRjZTUwMDIzYjU4MzMzYiIsInN1YiI6IjY0NGZiYzBhMjNhMzE0MDJlNTdjM2Q0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kZBqemQQaP5AfqtlQ7E69qa116O60SNbbfSuHzK1gjU",accept:"application/json"}},c=document.querySelector(".hero"),d=async()=>{try{let e=await (0,r.default).get("https://api.themoviedb.org/3/trending/movie/day?language=en-US",l);return e.data}catch(e){console.log(e)}},p=async()=>{let e="";try{let{results:t}=await d(),{id:a,title:i,overview:n,poster_path:o,backdrop_path:r,vote_average:s}=t[Math.floor(20*Math.random())+0];e=`
      <div class="hero__wrap" style="background: linear-gradient(86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%), url(${window.innerWidth>320?`https://image.tmdb.org/t/p/original/${r}`:`https://image.tmdb.org/t/p/w400/${o}`}); background-size: cover; background-repeat: no-repeat;">
        <div class="container">
          <div class="hero__inner" >
            <h1 class="hero__title">${i}</h1>
            <div class="rating">
              <div class="rating__body">
                <div class="rating__active" style="width: ${10*s}%;"></div>
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
              ${n}
            </p>
            <div class="hero__btns" id="${a}">
              <button id="watch-trailer" class="hero__btn hero__btn--primary hero__btn--watch-trailer" data-movie-id="${a}">Watch trailer</button>
              <button class="hero__btn hero__btn--secondary">More details</button>
            </div>
          </div>
        </div>
      </div>`}catch(t){c.classList.toggle("hero--bg"),e=`
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
      </div>`}finally{c.innerHTML=e;let t=document.getElementById("watch-trailer");t&&t.addEventListener("click",e=>{(0,s.onTrailerBtnClick)(e)})}};p();var r=o("dIxxU"),g=o("XcJ0g");let u="",v=document.querySelector(".upcoming"),_={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2FhN2IzMjk5NmM0N2RhMTQxZWI1N2IwZTVjZTQ3NiIsInN1YiI6IjY0N2M5OTdkZTMyM2YzMDEyNzUyM2IzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Blrs7t4WoJ6-3sy6A_Vz3twkTCmEg9nM0JyuAHg88WM"}};(async function(){try{let e=await (0,r.default).get("https://api.themoviedb.org/3/movie/upcoming",_);return console.log(e.data),e.data}catch(e){console.log(e)}})().then(t=>{console.log(t),function({results:t}){let a=Math.floor(Math.random()*t.length),{adult:i,backdrop_path:n,genre_ids:o,id:r,original_language:s,original_title:l,overview:c,popularity:d,poster_path:p,release_date:_,title:h,video:m,vote_average:y,vote_count:f}=t[a];(function(t){let a={};e(g).genres.forEach(e=>{a[e.id]=e.name}),t.length>0&&(u=1===t.length||t.join(", ").length<=20?a[t[0]]:`${a[t[0]]}, ${a[t[1]]}`)})(o),v.innerHTML=`<div class="container">
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
            <p class="upcoming__genre--value">${u}</p>
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
</div>`,function(){let e=document.querySelector("#addToMyLibrary");console.log(e)}()}(t)}).catch(e=>console.log(e));var g=o("XcJ0g"),r=o("dIxxU"),g=o("XcJ0g"),h=({poster_path:t,title:a,vote_average:i,genre_ids:n,release_date:o,id:r})=>{let s={},l="";return e(g).genres.forEach(e=>{s[e.id]=e.name}),n.length>0&&(l=1===n.length||n.join(", ").length<=20?s[n[0]]:`${s[n[0]]}, ${s[n[1]]}`),`<li class='item-movie-card' data-genres='${n}' data-id='${r}'>
  <button class="button" data-action="open-modal">${null===t?"<img  class='poster-movie-card' src='' alt='default poster'>":`  <img
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
  alt='${a} poster'
  loading='lazy'
>`}
  <div class='overlay-movie-card'></div>
  <div class='info-movie-card'>
    <h4 class='title-movie-card'>${a}</h4>
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
        <div class="rating-value">${i}</div>
    </div>
  </div>
<button>
</li>`},m=o("14Rx2");let y={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmFhZDQ4MjlkYjI1ZWQ1Mjc0NmY0NmY4YzQ1NzRlYSIsInN1YiI6IjY0NzIzZDc3OWFlNjEzMDBjNGM3NmY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v_Pd0M6hpO0qy1_8-nNBGtFxbeHjE8i8mgfszlHvjZc",accept:"application/json"}};async function f(e=1){try{let t=await (0,r.default).get(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=${e}`,y);return t.data}catch(e){console.log(e)}}let b=document.querySelector(".list-movie-card");if(b){let a={};e(g).genres.forEach(e=>{a[e.id]=e.name}),t=a,f().then(e=>{(function({results:e},t){let a=function(e){let t=[];for(;t.length<3;){let a=Math.floor(Math.random()*e.length);t.includes(a)||t.push(a)}return t}(e),i=a.map(t=>e[t]);b.innerHTML=i.map(h).join(""),(0,m.default)()})(e,0)}).catch(e=>console.log(e))}o("bf8lc"),o("7hKzD"),o("kvC6y"),o("cs2b8")}();
//# sourceMappingURL=index.04baa75b.js.map
