import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryElem = document.querySelector("ul.gallery");

// galleryItems.forEach((item) => {
//     const newLi = document.createElement("li");
//     newLi.classList.add("gallery__item");

//     const newLiLink = document.createElement("a");
//     newLiLink.classList.add("gallery__link");
//     newLiLink.href = item.original; 

//     const img = document.createElement("img");
//     img.classList.add("gallery__image");
//     img.src = item.preview;
//     img.alt = item.description;
//     img.setAttribute("data-source",item.original);

//     newLiLink.append(img);
//     newLi.append(newLiLink);
//     galleryElem.append(newLi);
// });

let listitems= "";

galleryItems.forEach(item => {
  const img = `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
     <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>
</li>`;
  listitems += img;
});

galleryElem.insertAdjacentHTML("afterbegin", listitems);


const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250,
})
