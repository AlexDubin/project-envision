const refs = {
  openModalBtn: document.querySelector('.footer-link'),
  closeModalBtn: document.querySelector('.modal-team-close'),
  backdrop: document.querySelector('.backdrop'),
  bodyEl: document.querySelector('body'),
  teamItems: document.querySelectorAll('.modal-team-item'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.backdrop.addEventListener('click', closeModal);

refs.closeModalBtn.addEventListener('click', toggleModal);

function closeModal(event) {
  if (event.target === refs.backdrop) {
    refs.backdrop.classList.add('is-hidden');
  }
  return;
}
function toggleModal() {
  refs.backdrop.classList.toggle('is-hidden');
  animateTeamItems();
  refs.bodyEl.classList.toggle('hidden');
}

function animateTeamItems() {
  refs.teamItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('animate');
    }, index * 200); // Додайте затримку між анімаціями кожного елемента
  });
}
