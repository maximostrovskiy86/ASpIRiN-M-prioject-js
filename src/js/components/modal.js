import modalTemplateTpl from '../../templates/modal.hbs';
// import itemMediaTemplate from '../../templates/item-media.hbs';
import newApiService from '../services/apiSevise';
import {outputRefs} from "../const/refs";
// import itemMediaTpl from "../../templates/item-media.hbs";

const refs = {
  openList: document.querySelector('.media-container'),
  closeModal: document.querySelector('[data-action="close-modal"]'),
  backDrop: document.querySelector('.backdrop'),
};


async function onPictureClick(evt) {
  evt.preventDefault();

  const target = evt.target;
  const data = await newApiService.fetchOpenModal(target.dataset.id);
   // console.log(data)
  // newApiService.filmId = target.dataset.id;

  // console.log(target.dataset.id)
  // console.log(newApiService.filmId)
  // if (!evt.target.classList.contains('film-card')) {
  //   return;
  // }

  //   window.addEventListener('keydown', onEscKeyPress);
  appendModalMarkup(data);
  refs.backDrop.classList.add('is-open');

}

refs.openList.addEventListener('click', onPictureClick)

function appendModalMarkup(data) {
  console.log(refs.backDrop)
  // console.log(data)
  return refs.backDrop.insertAdjacentHTML('beforeend',modalTemplateTpl(data));
}



// function onCloseModal() {
//   //   window.removeEventListener('keydown', onEscKeyPress);
//   refs.backDrop.classList.remove('is-open');
// }

// function onbackDropClick(e) {
//   if (e.currentTarget === e.target) {
//     onCloseModal();
//   }
// }

// function onEscKeyPress(e) {
//   const ESC_KEY_CODE = Escape;
//   if (e.code === ESC_KEY_CODE) {
//     onCloseModal();
//   }
// }


// refs.closeModal.addEventListener('click', onCloseModal);
// refs.backDrop.addEventListener('click', onbackDropClick);
