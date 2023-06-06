var e,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},s=t.parcelRequire34ff;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return a[e]=s,t.call(s.exports,s,s.exports),s.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},t.parcelRequire34ff=s),s("bUb57");var n=s("2shzp"),r=s("3OIsu");const o={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWYwYzIyMWE2YTRjMTZkOTRjZTUwMDIzYjU4MzMzYiIsInN1YiI6IjY0NGZiYzBhMjNhMzE0MDJlNTdjM2Q0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kZBqemQQaP5AfqtlQ7E69qa116O60SNbbfSuHzK1gjU",accept:"application/json"}},l=document.querySelector(".hero"),c=async()=>{try{let e=await (0,n.default).get("https://api.themoviedb.org/3/trending/movie/day?language=en-US",o);return e.data}catch(e){console.log(e)}},d=async()=>{let e="";try{let{results:t}=await c(),{id:a,title:i,overview:s,poster_path:n,backdrop_path:r,vote_average:o}=t[Math.floor(20*Math.random())+0];e=`
      <div class="hero__wrap" style="background: linear-gradient(86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%), url(${window.innerWidth>320?`https://image.tmdb.org/t/p/original/${r}`:`https://image.tmdb.org/t/p/w400/${n}`}); background-size: cover; background-repeat: no-repeat;">
        <div class="container">
          <div class="hero__inner" >
            <h1 class="hero__title">${i}</h1>
            <div class="rating">
              <div class="rating__body">
                <div class="rating__active" style="width: ${10*o}%;"></div>
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
              ${s}
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
      </div>`}finally{l.innerHTML=e;let t=document.getElementById("watch-trailer");t&&t.addEventListener("click",e=>{(0,r.onTrailerBtnClick)(e)})}};d();var n=s("2shzp");s("2eUFK");const h=document.querySelector(".upcoming"),p={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2FhN2IzMjk5NmM0N2RhMTQxZWI1N2IwZTVjZTQ3NiIsInN1YiI6IjY0N2M5OTdkZTMyM2YzMDEyNzUyM2IzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Blrs7t4WoJ6-3sy6A_Vz3twkTCmEg9nM0JyuAHg88WM"}};(async function(){try{let e=await (0,n.default).get("https://api.themoviedb.org/3/movie/upcoming",p);return console.log(e.data),e.data}catch(e){console.log(e)}})().then(e=>{console.log(e),function({results:e}){let t=Math.floor(Math.random()*e.length),{adult:a,backdrop_path:i,genre_ids:s,id:n,original_language:r,original_title:o,overview:l,popularity:c,poster_path:d,release_date:p,title:u,video:g,vote_average:v,vote_count:_}=e[t];h.innerHTML=`<div class="container">
  
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
            <p class="">${p}</p>
          </div>
          <div class="">
            <p class="">Vote / Votes</p>
            <p class="">
              <span class="">${v}</span> /
              <span class="">${_}</span>
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
            <p class="">${s}</p>
          </div>
        </li>
      </ul>
      <h4 class="">About</h4>
      <p class="">${l}</p>
      <button class="xbutton" type="button" id="addToMyLibrary"><p>Add to my library</p></button>
      </div>
  </div>
</div>`}(e)}).catch(e=>console.log(e));var u=s("2eUFK"),n=s("2shzp"),g=s("hmX5O"),v=s("76tat");const _={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmFhZDQ4MjlkYjI1ZWQ1Mjc0NmY0NmY4YzQ1NzRlYSIsInN1YiI6IjY0NzIzZDc3OWFlNjEzMDBjNGM3NmY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v_Pd0M6hpO0qy1_8-nNBGtFxbeHjE8i8mgfszlHvjZc",accept:"application/json"}};async function m(e=1){try{let t=await (0,n.default).get(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=${e}`,_);return t.data}catch(e){console.log(e)}}const y=document.querySelector(".list-movie-card");if(y){let t={};(function(e){return e&&e.__esModule?e.default:e})(u).genres.forEach(e=>{t[e.id]=e.name}),e=t,m().then(e=>{(function({results:e},t){let a=function(e){let t=[];for(;t.length<3;){let a=Math.floor(Math.random()*e.length);t.includes(a)||t.push(a)}return t}(e),i=a.map(t=>e[t]);y.innerHTML=i.map(g.default).join(""),(0,v.default)()})(e,0)}).catch(e=>console.log(e))}s("1Hrz4"),s("epHO8"),s("gjiCh"),s("5kw5v");
//# sourceMappingURL=index.f4b17dde.js.map
