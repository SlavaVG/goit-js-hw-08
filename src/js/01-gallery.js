import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

let galEl = document.querySelector('.gallery');

const picsList = galleryItems
  .map(
    pic => `<a class="gallery__item" href="${pic.original}">
                <img class="gallery__image" src=${pic.preview} alt=${pic.description} title=${pic.description} />
            </a>`, ).join('');

galEl.insertAdjacentHTML('beforeend', picsList);

const lengthEL = document.getElementsByClassName('gallery__item').length;

for (let i = 0; i < lengthEL; i +=1) {
  document.getElementsByClassName('gallery__item')[i].addEventListener('click', function (event) {
    event.preventDefault();
  });
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'title',
  animationSpeed: 250
});