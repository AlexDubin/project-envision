!function(){let e;var a,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},s=t.parcelRequire34ff;null==s&&((s=function(e){if(e in i)return i[e].exports;if(e in n){var a=n[e];delete n[e];var t={id:e,exports:{}};return i[e]=t,a.call(t.exports,t,t.exports),t.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,a){n[e]=a},t.parcelRequire34ff=s),s("i8Q71");var r=s("dIxxU");let l={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWYwYzIyMWE2YTRjMTZkOTRjZTUwMDIzYjU4MzMzYiIsInN1YiI6IjY0NGZiYzBhMjNhMzE0MDJlNTdjM2Q0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kZBqemQQaP5AfqtlQ7E69qa116O60SNbbfSuHzK1gjU",accept:"application/json"}},o=document.querySelector(".hero"),c=async()=>{try{let e=await (0,r.default).get("https://api.themoviedb.org/3/trending/movie/day?language=en-US",l);return e.data}catch(e){console.log(e)}};e="",c().then(({results:a})=>{let{id:t,title:i,overview:n,poster_path:s,backdrop_path:r,vote_average:l}=a[Math.floor(20*Math.random())+0];e=`
        <div class="hero__wrap" style="background: linear-gradient(86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%), url(${window.innerWidth>320?`https://image.tmdb.org/t/p/original/${r}`:`https://image.tmdb.org/t/p/w400/${s}`}); background-size: cover; background-repeat: no-repeat;">
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
                ${n}
              </p>
              <div class="hero__btns" id="${t}">
                <button class="hero__btn hero__btn--primary">Watch trailer</button>
                <button class="hero__btn hero__btn--secondary">More details</button>
              </div>
            </div>
          </div>
        </div>`}).catch(()=>{o.classList.toggle("hero--bg"),e=`
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
      </div>`}).finally(()=>o.innerHTML=e);var r=s("dIxxU"),d={};d=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}');let p=document.querySelector(".upcoming"),v={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2FhN2IzMjk5NmM0N2RhMTQxZWI1N2IwZTVjZTQ3NiIsInN1YiI6IjY0N2M5OTdkZTMyM2YzMDEyNzUyM2IzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Blrs7t4WoJ6-3sy6A_Vz3twkTCmEg9nM0JyuAHg88WM"}};(async function(){try{let e=await (0,r.default).get("https://api.themoviedb.org/3/movie/upcoming",v);return console.log(e.data),e.data}catch(e){console.log(e)}})().then(e=>{console.log(e),function({results:e}){let a=Math.floor(Math.random()*e.length),{adult:t,backdrop_path:i,genre_ids:n,id:s,original_language:r,original_title:l,overview:o,popularity:c,poster_path:d,release_date:v,title:g,video:u,vote_average:h,vote_count:m}=e[a];p.innerHTML=`<div class="container">
  
  <h2 class="title-weekly-trends">UPCOMING THIS MONTH</h2>
  <div class="">
    <div class="">
    <img class="" src='https://image.tmdb.org/t/p/original${i}' alt='${g}'>
         </div>
    <div class="">
      <h3 class="">${g}</h3>
      <ul class="list">
        <li class="">
          <div class="">
            <p class="">Release date</p>
            <p class="">${v}</p>
          </div>
          <div class="">
            <p class="">Vote / Votes</p>
            <p class="">
              <span class="">${h}</span> /
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
            <p class="">${n}</p>
          </div>
        </li>
      </ul>
      <h4 class="">About</h4>
      <p class="">${o}</p>
      <button class="xbutton" type="button" id="addToMyLibrary"><p>Add to my library</p></button>
      </div>
  </div>
</div>`}(e)}).catch(e=>console.log(e));var r=s("dIxxU");let g={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmFhZDQ4MjlkYjI1ZWQ1Mjc0NmY0NmY4YzQ1NzRlYSIsInN1YiI6IjY0NzIzZDc3OWFlNjEzMDBjNGM3NmY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v_Pd0M6hpO0qy1_8-nNBGtFxbeHjE8i8mgfszlHvjZc",accept:"application/json"}};async function u(e=1){try{let a=await (0,r.default).get(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=${e}`,g);return console.log(a.data),a.data}catch(e){console.log(e)}}let h=document.querySelector(".list-movie-card");if(h){let e={};((a=d)&&a.__esModule?a.default:a).genres.forEach(a=>{e[a.id]=a.name}),u().then(a=>{console.log(a),function({results:a}){console.log({results:a});let t=[];for(;t.length<3;){let e=Math.floor(Math.random()*a.length);t.includes(e)||t.push(e)}let i=t.map(e=>a[e]);h.innerHTML=i.map(({poster_path:a,title:t,vote_average:i,genre_ids:n,release_date:s})=>{console.log(5,i,s);let r="";return n.length>0&&(r=1===n.length||n.join(", ").length<=20?e[n[0]]:`${e[n[0]]}, ${e[n[1]]}`),`<li class='item-movie-card'>
          <img class='poster-movie-card' src='https://image.tmdb.org/t/p/original${a}' alt='${t}'>
          <div class='overlay-movie-card'></div>
          <div class='info-movie-card'>
            <h4 class='title-movie-card'>${t}</h4>
            <div class='wrapper-movie-card'>
              <div class='genre-year-movie-card'>
                <p class='genre-movie-card span'>${r}</p>
                <span class='divider-movie-card'>&#124</span>
                <p class='year-movie-card span'>${s.slice(0,4)}</p>
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
        </li>`}).join(""),function(){console.log(4);let e=document.querySelectorAll(".rating");e.forEach(e=>{(function(e){var a;let t=e.querySelector(".rating-active"),i=e.querySelector(".rating-value");console.log(i,t),i&&(a=i.innerHTML,console.log(4),t.style.width=`${a/10*100}%`,console.log(4))})(e)})}()}(a)}).catch(e=>console.log(e))}s("bf8lc"),s("7hKzD"),s("kvC6y"),s("cs2b8")}();
//# sourceMappingURL=index.a0b3dfe7.js.map
