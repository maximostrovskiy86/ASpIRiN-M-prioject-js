// import modalTemplate from '../../templates/modal.hbs';
// import itemMediaTemplate from '../../templates/item-media.hbs';
// import newApiService from '../services/apiSevise';

const refs = {
  openModal: document.querySelector('.media-container'),
  closeModal: document.querySelector('[data-action="close-modal"]'),
  backDrop: document.querySelector('.backdrop'),
};

function onPictureClick(evt) {
  //   evt.preventDefault();
  //   if (!evt.target.classList.contains('film-card')) {
  //     return;
  //   }
  window.addEventListener('keydown', onEscKeyPress);
  refs.backDrop.classList.add('is-open');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.backDrop.classList.remove('is-open');
}

function onbackDropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

function onEscKeyPress(e) {
  const ESC_KEY_CODE = Escape;
  if (e.code === ESC_KEY_CODE) {
    onCloseModal();
  }
}

refs.openModal.addEventListener('click', onPictureClick);
refs.closeModal.addEventListener('click', onCloseModal);
refs.backDrop.addEventListener('click', onbackDropClick);
