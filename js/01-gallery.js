import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);

galleryContainer.addEventListener('click', onGalleryClick);

const instance = basicLightbox.create(
  `<img src="" width="800" height="600" class="modal-img">`, {
    onShow: instance => {
      // console.log("yes");
      window.addEventListener("keydown", onEscDown);
    },
    onClose: instance => {
      // console.log("no");
      window.removeEventListener("keydown", onEscDown);
    },
});

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
  const currentImageSource = currentImage.dataset.source;
  // const currentItem = currentImage.closest(".gallery__item");
  instance.element().querySelector('img').src = currentImageSource;
  instance.show(); 
}

function onEscDown (e) {
  if (e.key !== "Escape") {
    return;
  }
  instance.close();
  // console.log(e.key);
};