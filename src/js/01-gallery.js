import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);

galleryContainer.addEventListener('click', onGalleryClick);


function createGalleryItemsMarkup(items) {
  return items.map(({description, original, preview}) => {
    return `
     <div class="gallery__item">
        <a class="gallery__link" href="${original}">
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

function onGalleryClick(e) {
  e.preventDefault(); 
  const isGalleryImageEl = e.target.classList.contains('gallery__image');
  if (!isGalleryImageEl) {
    return;
  }  
  const currentImage = e.target;
  const currentItem = currentImage.closest(".gallery__item");
  const currentImageSource = currentImage.dataset.source;
  
  const instance = basicLightbox.create(`
      <img src="${currentImageSource}" width="800" height="600">
  `)

  instance.show()

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") {
      return;
    }
    instance.close();
  });
}
