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
})();
