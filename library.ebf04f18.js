!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},n=t.parcelRequire34ff;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequire34ff=n),n("i8Q71");var s=n("XcJ0g"),l=n("4DnXZ"),s=n("XcJ0g"),d=({poster_path:t,title:a,vote_average:i,genre_ids:n,release_date:l,id:d})=>{let r={},o="";return e(s).genres.forEach(e=>{r[e.id]=e.name}),n.length>0&&(o=1===n.length||n.join(", ").length<=20?r[n[0]]:`${r[n[0]]}, ${r[n[1]]}`),`<li class='item-movie-card' data-genres='${n}' data-id='${d}'>
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
        <p class='genre-movie-card span'>${o}</p>
        <span class='divider-movie-card'>&#124</span>
        <p class='year-movie-card span'>${l.slice(0,4)}</p>
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
</li>`},r=n("6JpON");function o(e=-1){let t=JSON.parse(localStorage.getItem("movies-library")??"[]");return e>0?t.slice(0,e):t}document.getElementById("lib-empty"),document.getElementById("lib-catalog");var c=n("14Rx2"),m=n("dIxxU");let g={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjE3NzU3ZjU2ZDg1NmM5YzE2MmE1OWEzZWZlMmY5MyIsInN1YiI6IjY0NzhkNWZjOWI2ZTQ3MDBkZThlOTBlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BE22YVTai34Dh5C1jSxEZ2DzzjnxJfKFgEIpWS2JFcI",accept:"application/json"}},p=document.getElementById("genres-select"),u=document.getElementById("library-movie-list"),v=document.getElementById("lib-empty"),h=document.getElementById("lib-catalog"),f=document.getElementById("lib-load-more"),y=1;function b(e){u.insertAdjacentHTML("beforeend",e.map(d).join("")),(0,c.default)()}function w(e){let t=u.childNodes,a=e.target.value;"-1"===a?t.forEach(e=>e.classList.remove("is-hidden")):t.forEach(e=>{e.dataset.genres.split(",").includes(a)?e.classList.remove("is-hidden"):e.classList.add("is-hidden")})}async function E(){try{let e=o();if(0===e.length){v.classList.remove("is-hidden"),h.classList.add("is-hidden");return}let t=[];e.length<=9?(f.classList.add("is-hidden"),t=await Promise.all(e.map(I))):t=await Promise.all(e.slice(0,9).map(I)),b(t)}catch(e){$(e)}}async function I({id:e}){let t=await (0,m.default).get(`https://api.themoviedb.org/3/movie/${e}?language=en-US`,g),{data:{poster_path:a,title:i,vote_average:n,release_date:s,genres:l}}=t,d=l.map(({id:e})=>e);return{genre_ids:d,poster_path:a,title:i,vote_average:n,release_date:s,id:e}}async function x(){try{let e=o(),t=[],a=9*y;e.length-a<=9?(f.classList.add("is-hidden"),t=await Promise.all(e.slice(a).map(I))):(t=await Promise.all(e.slice(a,a+9).map(I)),y+=1),b(t)}catch(e){$(e)}}function $(e){console.error(e),(0,r.Notify).failure(e.message)}window.addEventListener("DOMContentLoaded",function(){(function(e){e.forEach(e=>{let t=document.createElement("option");t.textContent=e.name,t.value=e.id,p.appendChild(t)})})(e(s).genres),E();let t=e(l)(p)[0];t.select.addEventListener("change",w),f.addEventListener("click",x)}),n("bf8lc"),n("7hKzD"),n("cs2b8")}();
//# sourceMappingURL=library.ebf04f18.js.map
