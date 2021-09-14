import { homeLink, libraryLink, inputLink, buttonsLink, headerLink } from '../const/refs';

function homeInputHeader() {
  inputLink.classList.remove('is-hidden');
  buttonsLink.classList.add('is-hidden');
  homeLink.classList.add('navigation__link--active');
  libraryLink.classList.remove('navigation__link--active');
  headerLink.classList.remove('is-hidden');
}

function homeLibraryHeader() {
  buttonsLink.classList.remove('is-hidden');
  inputLink.classList.add('is-hidden');
  homeLink.classList.remove('navigation__link--active');
  libraryLink.classList.add('navigation__link--active');
  headerLink.classList.add('is-hidden');
}

homeLink.addEventListener('click', homeInputHeader);
libraryLink.addEventListener('click', homeLibraryHeader);
