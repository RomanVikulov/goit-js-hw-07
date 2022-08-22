import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);
// Change code below this line

const gallerList = document.querySelector(".gallery");
const cardsMarkup = createGalleryMarkup(galleryItems);

gallerList.insertAdjacentHTML("afterbegin", cardsMarkup);
gallerList.addEventListener("click", onPictureClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
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
    })
    .join("");
}

function onPictureClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.containes("gallery__item")) {
    return;
  }
}
