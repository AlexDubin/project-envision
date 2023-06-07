(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-menu-open]"),
      closeMenuBtn: document.querySelector("[data-menu-close]"),
      menu: document.querySelector("[data-menu]"),
      body: document.querySelector("body"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
    }
  })();


  const switchTheme = () => {
    const rootEl = document.documentElement;
    let dataTheme = rootEl.getAttribute('data-theme'),
      newTheme;
    newTheme = dataTheme === 'light' ? 'dark' : 'light';
  
    rootEl.setAttribute('data-theme', newTheme);
  
    localStorage.setItem('theme', newTheme);
  };

  document
  .getElementById('theme-switcher')
  .addEventListener('click', switchTheme);


  let localS = localStorage.getItem('theme');

  if (localS === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  };