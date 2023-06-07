const refs = {
  openModalBtn: document.querySelector('.footer-link'),
  closeModalBtn: document.querySelector('.modal-team-close'),
  backdrop: document.querySelector('.backdrop'),
  bodyEl: document.querySelector('body'),
  teamItems: document.querySelectorAll('.modal-team-item'),
  svgEl: document.querySelector('.close-icon'),
  useEl: document.querySelector('.use-close'),
};

refs.openModalBtn.addEventListener('click', onButtonClick);
refs.backdrop.addEventListener('click', onButtonClick);
refs.closeModalBtn.addEventListener('click', onButtonClick);
window.addEventListener('keydown', clickOnEscape);

function openModal() {
  refs.bodyEl.classList.add('hidden');
  refs.backdrop.classList.remove('is-hidden');
}
function closeModal() {
  refs.bodyEl.classList.remove('hidden');
  refs.backdrop.classList.add('is-hidden');
}

function onButtonClick(event) {
  if (
    event.target === refs.backdrop ||
    event.target === refs.svgEl ||
    event.target === refs.closeModalBtn ||
    event.target === refs.useEl ||
    event.code === 'Escape'
  ) {
    closeModal();
  } else if (event.target === refs.openModalBtn) {
    openModal();
    animateTeamItems();
  }
  return;
}

function clickOnEscape(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}

function animateTeamItems() {
  refs.teamItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('animate');
    }, index * 200); // Додайте затримку між анімаціями кожного елемента
  });
}
