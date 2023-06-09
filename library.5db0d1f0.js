!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},t={},a=e.parcelRequire34ff;null==a&&((a=function(e){if(e in i)return i[e].exports;if(e in t){var a=t[e];delete t[e];var r={id:e,exports:{}};return i[e]=r,a.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,i){t[e]=i},e.parcelRequire34ff=a),a("i8Q71");var r=a("8yl2Y"),n=a("faU4B"),o=a("6U7c4"),l=a("16wVm");let d=async()=>{let e="",i="background-size: cover";try{let{results:t}=await (0,r.fetchTrendingMoviesByDay)(),{id:a,title:d,overview:s,backdrop_path:c,vote_average:h}=t[Math.floor(20*Math.random())+0],_=`https://image.tmdb.org/t/p/original/${c}`;window.innerWidth<768&&(i="background-size: 768px; background-position: center"),e=`
      <div class="hero__wrap" style="background: linear-gradient(86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%), url(${_}); ${i}; background-repeat: no-repeat;">
        <div class="container">
          <div class="hero__inner" >
            <h1 class="hero__title">${d}</h1>
            <div class="hrating">
              <div class="hrating__body">
                <div class="hrating__active" style="width: ${10*h}%;"></div>
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
              ${s}
            </p>
            <div class="hero__btns" id="${a}">
              <button id="watch-trailer" class="hero__btn hero__btn--primary hero__btn--watch-trailer" data-movie-id="${a}">Watch trailer</button>
              <button class="hero__btn hero__btn--secondary m-modal data-movie-id="${a}" data-id="${a}" >More details</button>
            </div>
          </div>
        </div>
      </div>`,o.heroRefs.heroContainer.innerHTML=e;let g=document.getElementById("watch-trailer");g.addEventListener("click",e=>(0,n.onTrailerBtnClick)(e));let u=document.querySelector(".hero__btn.m-modal");u.addEventListener("click",e=>(0,l.onOpenModalFilm)(e))}catch(i){(0,o.heroRefs).heroContainer.classList.toggle("hero--bg-lib"),e=`
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
      </div>`,o.heroRefs.heroContainer.innerHTML=e}finally{}};d(),a("lQkPo"),a("bf8lc"),a("7hKzD"),a("cs2b8")}();
//# sourceMappingURL=library.5db0d1f0.js.map
