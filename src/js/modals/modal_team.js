import { modalTeamRefs } from '../refs/modal-team-refs';

modalTeamRefs.openModalBtn.addEventListener('click', onButtonTeamClick);
// modalTeamRefs.backdrop.addEventListener('click', onButtonTeamClick);
// modalTeamRefs.closeModalBtn.addEventListener('click', onButtonTeamClick);
// window.addEventListener('keydown', clickOnEscape);

function openTeamModal() {
  modalTeamRefs.bodyEl.classList.add('hidden');
  modalTeamRefs.backdrop.classList.remove('is-hidden');
}
function closeTeamModal() {
  modalTeamRefs.bodyEl.classList.remove('hidden');
  modalTeamRefs.backdrop.classList.add('is-hidden');
}

function onButtonTeamClick(event) {
  modalTeamRefs.openModalBtn.addEventListener('click', onButtonTeamClick);
  if (
    event.target === modalTeamRefs.backdrop ||
    event.target === modalTeamRefs.svgEl ||
    event.target === modalTeamRefs.closeModalBtn ||
    event.target === modalTeamRefs.useEl ||
    event.code === 'Escape'
  ) {
    closeTeamModal();
    modalTeamRefs.backdrop.removeEventListener('click', onButtonTeamClick);
    modalTeamRefs.closeModalBtn.removeEventListener('click', onButtonTeamClick);
  } else if (event.target === modalTeamRefs.openModalBtn) {
    modalTeamRefs.backdrop.addEventListener('click', onButtonTeamClick);
    modalTeamRefs.closeModalBtn.addEventListener('click', onButtonTeamClick);
    window.addEventListener('keydown', clickOnEscape);
    openTeamModal();

    animateTeamItems();
  }
  return;
}

function clickOnEscape(event) {
  if (event.code === 'Escape') {
    closeTeamModal();
    window.removeEventListener('keydown', clickOnEscape);
  }
}

function animateTeamItems() {
  modalTeamRefs.teamItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('animate');
    }, index * 200); // Додайте затримку між анімаціями кожного елемента
  });
}
