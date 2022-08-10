import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);
console.log(galleryItemsMarkup);



function createGalleryItemsMarkup(items) {
  return items.map(({description, original, preview}) => {
    return `
     <div class="gallery__item">
        <a class="gallery__link" href="${original}" target="_blank" rel="nofollow noopener noreferrer">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
  `;
  }).join('');
  
}