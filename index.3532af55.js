var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},t={},i=e.parcelRequire34ff;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in t){var i=t[e];delete t[e];var n={id:e,exports:{}};return a[e]=n,i.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,a){t[e]=a},e.parcelRequire34ff=i),i("bUb57");var n=i("2shzp");const r={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWYwYzIyMWE2YTRjMTZkOTRjZTUwMDIzYjU4MzMzYiIsInN1YiI6IjY0NGZiYzBhMjNhMzE0MDJlNTdjM2Q0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kZBqemQQaP5AfqtlQ7E69qa116O60SNbbfSuHzK1gjU",accept:"application/json"}},o=document.querySelector(".hero__wrap"),s=document.querySelector(".hero"),l=async()=>{try{let e=await (0,n.default).get("https://api.themoviedb.org/3/rending/movie/day?language=en-US",r);return e.data}catch(e){console.log(e)}};(()=>{let e="";l().then(({results:a})=>{let t=Math.floor(20*Math.random())+0;console.log(a[t]);let{title:i,overview:n,poster_path:r,backdrop_path:s,vote_average:l}=a[t];e=`
      <div class="hero__thumb" style="background: linear-gradient(86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%), url(${window.innerWidth>768?`https://image.tmdb.org/t/p/original/${s}`:`https://image.tmdb.org/t/p/w500/${r}`}); background-size: cover; background-repeat: no-repeat;">
        

        <div class="hero__inner">
          <div class="hero__content">
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
            <p class="hero__text hero__text--truncate">
              ${n}
            </p>
            <div class="hero__nav">
              <button class="hero__btn hero__btn--primary">Watch trailer</button>
              <button class="hero__btn hero__btn--secondary">More details</button>
            </div>
          </div>
        </div>

      </div>`,o.innerHTML=e}).catch(()=>{s.classList.toggle("hero--bg"),e=`
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
      </div>`,o.innerHTML=e})})();var d={};d=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}');var n=i("2shzp");const c={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmFhZDQ4MjlkYjI1ZWQ1Mjc0NmY0NmY4YzQ1NzRlYSIsInN1YiI6IjY0NzIzZDc3OWFlNjEzMDBjNGM3NmY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v_Pd0M6hpO0qy1_8-nNBGtFxbeHjE8i8mgfszlHvjZc",accept:"application/json"}};async function v(e=1){try{let a=await (0,n.default).get(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=${e}`,c);return console.log(a.data),a.data}catch(e){console.log(e)}}const m=document.querySelector(".list-movie-card");if(m){let e={};(function(e){return e&&e.__esModule?e.default:e})(d).genres.forEach(a=>{e[a.id]=a.name}),v().then(a=>{console.log(a),function({results:a}){console.log({results:a});let t=[];for(;t.length<3;){let e=Math.floor(Math.random()*a.length);t.includes(e)||t.push(e)}let i=t.map(e=>a[e]);m.innerHTML=i.map(({poster_path:a,title:t,vote_average:i,genre_ids:n,release_date:r})=>{console.log(5,i,r);let o="";return n.length>0&&(o=1===n.length||n.join(", ").length<=20?e[n[0]]:`${e[n[0]]}, ${e[n[1]]}`),`<li class='item-movie-card'>
          <img class='poster-movie-card' src='https://image.tmdb.org/t/p/original${a}' alt='${t}'>
          <div class='overlay-movie-card'></div>
          <div class='info-movie-card'>
            <h4 class='title-movie-card'>${t}</h4>
            <div class='wrapper-movie-card'>
              <div class='genre-year-movie-card'>
                <p class='genre-movie-card span'>${o}</p>
                <span class='divider-movie-card'>&#124</span>
                <p class='year-movie-card span'>${r.slice(0,4)}</p>
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
                <div class="rating-value">${i}</div>
              </div>
            </div>
          </div>
        </li>`}).join(""),function(){console.log(4);let e=document.querySelectorAll(".rating");e.forEach(e=>{(function(e){var a;let t=e.querySelector(".rating-active"),i=e.querySelector(".rating-value");console.log(i,t),i&&(a=i.innerHTML,console.log(4),t.style.width=`${a/10*100}%`,console.log(4))})(e)})}()}(a)}).catch(e=>console.log(e))}i("1Hrz4"),i("epHO8"),i("gjiCh"),i("5kw5v");
//# sourceMappingURL=index.3532af55.js.map
