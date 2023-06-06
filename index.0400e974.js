!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=e.parcelRequire34ff;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var i=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,i.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequire34ff=i),i("i8Q71");var r=i("dIxxU"),n=i("faU4B");let s={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWYwYzIyMWE2YTRjMTZkOTRjZTUwMDIzYjU4MzMzYiIsInN1YiI6IjY0NGZiYzBhMjNhMzE0MDJlNTdjM2Q0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kZBqemQQaP5AfqtlQ7E69qa116O60SNbbfSuHzK1gjU",accept:"application/json"}},l=document.querySelector(".hero"),o=async()=>{try{let e=await (0,r.default).get("https://api.themoviedb.org/3/trending/movie/day?language=en-US",s);return e.data}catch(e){console.log(e)}},c=async()=>{let e="";try{let{results:t}=await o(),{id:a,title:i,overview:r,poster_path:n,backdrop_path:s,vote_average:l}=t[Math.floor(20*Math.random())+0];e=`
      <div class="hero__wrap" style="background: linear-gradient(86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%), url(${window.innerWidth>320?`https://image.tmdb.org/t/p/original/${s}`:`https://image.tmdb.org/t/p/w400/${n}`}); background-size: cover; background-repeat: no-repeat;">
        <div class="container">
          <div class="hero__inner" >
            <h1 class="hero__title">${i}</h1>
            <div class="rating">
              <div class="rating__body">
                <div class="rating__active" style="width: ${10*l}%;"></div>
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
              ${r}
            </p>
            <div class="hero__btns" id="${a}">
              <button id="watch-trailer" class="hero__btn hero__btn--primary hero__btn--watch-trailer" data-movie-id="${a}">Watch trailer</button>
              <button class="hero__btn hero__btn--secondary">More details</button>
            </div>
          </div>
        </div>
      </div>`}catch(t){l.classList.toggle("hero--bg"),e=`
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
      </div>`}finally{l.innerHTML=e;let t=document.getElementById("watch-trailer");t&&t.addEventListener("click",e=>{(0,n.onTrailerBtnClick)(e)})}};c();var r=i("dIxxU");i("XcJ0g");let d=document.querySelector(".upcoming"),p={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2FhN2IzMjk5NmM0N2RhMTQxZWI1N2IwZTVjZTQ3NiIsInN1YiI6IjY0N2M5OTdkZTMyM2YzMDEyNzUyM2IzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Blrs7t4WoJ6-3sy6A_Vz3twkTCmEg9nM0JyuAHg88WM"}};(async function(){try{let e=await (0,r.default).get("https://api.themoviedb.org/3/movie/upcoming",p);return console.log(e.data),e.data}catch(e){console.log(e)}})().then(e=>{console.log(e),function({results:e}){let t=Math.floor(Math.random()*e.length),{adult:a,backdrop_path:i,genre_ids:r,id:n,original_language:s,original_title:l,overview:o,popularity:c,poster_path:p,release_date:v,title:u,video:h,vote_average:g,vote_count:m}=e[t];d.innerHTML=`<div class="container">
  
  <h2 class="title-weekly-trends">UPCOMING THIS MONTH</h2>
  <div class="">
    <div class="">
    <img class="" src='https://image.tmdb.org/t/p/original${i}' alt='${u}'>
         </div>
    <div class="">
      <h3 class="">${u}</h3>
      <ul class="list">
        <li class="">
          <div class="">
            <p class="">Release date</p>
            <p class="">${v}</p>
          </div>
          <div class="">
            <p class="">Vote / Votes</p>
            <p class="">
              <span class="">${g}</span> /
              <span class="">${m}</span>
            </p>
          </div>
        </li>
        <li class="">
          <div class="">
            <p class="">Popularity</p>
            <p class="">${c}</p>
          </div>
          <div class="">
            <p class="">Genre</p>
            <p class="">${r}</p>
          </div>
        </li>
      </ul>
      <h4 class="">About</h4>
      <p class="">${o}</p>
      <button class="xbutton" type="button" id="addToMyLibrary"><p>Add to my library</p></button>
      </div>
  </div>
</div>`}(e)}).catch(e=>console.log(e));var v=i("XcJ0g"),r=i("dIxxU");let u={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmFhZDQ4MjlkYjI1ZWQ1Mjc0NmY0NmY4YzQ1NzRlYSIsInN1YiI6IjY0NzIzZDc3OWFlNjEzMDBjNGM3NmY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v_Pd0M6hpO0qy1_8-nNBGtFxbeHjE8i8mgfszlHvjZc",accept:"application/json"}};async function h(e=1){try{let t=await (0,r.default).get(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=${e}`,u);return t.data}catch(e){console.log(e)}}let g=h(),m=document.querySelector(".list-movie-card");if(m){let e={};(v&&v.__esModule?v.default:v).genres.forEach(t=>{e[t.id]=t.name}),function(e){g.then(t=>{(function({results:e},t){let a=function(e){let t=[];for(;t.length<3;){let a=Math.floor(Math.random()*e.length);t.includes(a)||t.push(a)}return t}(e),i=a.map(t=>e[t]);m.innerHTML=i.map(({poster_path:e,title:a,vote_average:i,genre_ids:r,release_date:n})=>{let s=function(e,t){let a="",i=e[t[0]],r=e[t[1]];return t.length>0&&(i.length>15&&(a=i.split("")),a=i.length+r.length>15?i:`${i}, ${r}`),a}(t,r);return`<button class="button" data-action="open-modal"><li class='item-movie-card'>
              <img class='poster-movie-card' src='https://image.tmdb.org/t/p/original${e}' alt='${a}'>
              <div class='overlay-movie-card'></div>
              <div class='info-movie-card'>
                <h4 class='title-movie-card'>${a}</h4>
                <div class='wrapper-movie-card'>
                  <div class='genre-year-movie-card'>
                    <p class='genre-movie-card span'>${s}</p>
                    <span class='divider-movie-card'>&#124</span>
                    <p class='year-movie-card span'>${n.slice(0,4)}</p>
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
        </li><button>`}).join(""),function(){let e=document.querySelectorAll(".rating");e.forEach(e=>{(function(e){var t;let a=e.querySelector(".rating-active"),i=e.querySelector(".rating-value");i&&(t=i.innerHTML,a.style.width=`${t/10*100}%`)})(e)})}()})(t,e)}).catch(e=>console.log(e))}(e)}i("bf8lc"),i("7hKzD"),i("kvC6y"),i("cs2b8")}();
//# sourceMappingURL=index.0400e974.js.map
