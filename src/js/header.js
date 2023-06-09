(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('scroll-lock');
  };

  const checkForBackdropClick = evt => {
    if (evt.target.classList.contains('js-menu-container')) {
      toggleMenu();
    }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  mobileMenu.addEventListener('click', checkForBackdropClick);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    document.body.classList.remove('scroll-lock');
  });

  const storageKey = 'theme';

  const getColorPreference = () => {
    if (localStorage.getItem(storageKey))
      return localStorage.getItem(storageKey);
    else {
      const theme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

      localStorage.setItem(storageKey, theme);
      return theme;
    }
  };

  const onThemeSwitch = () => {
    document.body.classList.toggle('light-theme');

    window.localStorage.setItem(
      storageKey,
      document.body.classList.contains('light-theme') ? 'light' : 'dark'
    );
  };

  const themeSwitcherBtn = document.querySelector('.js-theme-switcher');
  const theme = getColorPreference();

  if (theme === 'light') document.body.classList.add('light-theme');

  themeSwitcherBtn.addEventListener('click', onThemeSwitch);

  const setActiveLink = list => {
    const activeLink = [...list.children].find(item => {
      const currentLocation = location.pathname.endsWith('/')
        ? location.origin + location.pathname + '/index.html'
        : location.origin + location.pathname;

      return item.querySelector('a').href === currentLocation;
    });
    activeLink.querySelector('a').classList.add('active');
  };

  const linkListEls = document.querySelectorAll('.js-link-list');

  linkListEls.forEach(setActiveLink);
})();
