import modalTemplateTpl from '../../templates/modal.hbs';
import newApiService from '../services/apiSevise';

const refs = {
  openList: document.querySelector('.media-container'),
  closeModal: document.querySelector('[data-action="close-modal"]'),
  backDrop: document.querySelector('.backdrop'),
  modal: document.querySelector('.modal-wrapper'),
};

console.log(refs.closeModal)

async function onPictureClick(evt) {
  evt.preventDefault();

  const target = evt.target;
  const data = await newApiService.fetchOpenModal(target.dataset.id);
  console.log(data)

  // const arr = data.genres.map(item => item.name)
  // arr.splice(3)
  // console.log(arr)

  // if (!evt.target.classList.contains('film-card')) {
  //   return;
  // }

  window.addEventListener('keydown', onEscKeyPress);
  appendModalMarkup(data);
  refs.backDrop.classList.add('is-open');
  document.body.style.overflow = "hidden";
}

function appendModalMarkup(data) {
  return refs.modal.innerHTML = modalTemplateTpl(data);
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.backDrop.classList.remove('is-open');
  document.body.style.overflow = "auto";g
}

function onbackDropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

function onEscKeyPress(e) {
  const ESC_KEY_CODE = 'Escape';
  if (e.code === ESC_KEY_CODE) {
    onCloseModal();
  }
}

refs.openList.addEventListener('click', onPictureClick)
refs.closeModal.addEventListener('click', onCloseModal);
refs.backDrop.addEventListener('click', onbackDropClick);
