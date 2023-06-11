import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryElem = document.querySelector("ul.gallery");

galleryItems.forEach((item) => {
    const newLi = document.createElement("li");
    newLi.classList.add("gallery__item");

    const newLiLink = document.createElement("a");
    newLiLink.classList.add("gallery__link");
    newLiLink.href = item.original; 
    // newLiLink.addEventListener("click", (event) => {
    //     event.preventDefault();
    //     const instance = basicLightbox.create(`
    //     <img id="modal-img" src="${item.original}">
    //     `);
    //     instance.show(() => { 
    //         const callback = (event) => {
    //             const key = event.key; 
    //             console.log(key);
    //             if (key === "Escape") {
    //                 instance.close();
    //                 document.removeEventListener("keydown", callback) 
    //             }
    //         };                   
    //         document.addEventListener("keydown", callback);
    //     });
    // });

    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.src = item.preview;
    img.alt = item.description;
    img.setAttribute("data-source",item.original);

    newLiLink.append(img);
    newLi.append(newLiLink);
    galleryElem.append(newLi);
});

const aElems = document.querySelectorAll("ul a");
aElems.forEach((elem) => {
    elem.addEventListener("click", (event) => {
        event.preventDefault();
        const instance = basicLightbox.create(`
        <img id="modal-img" src="${event.currentTarget.href}">
        `);
        instance.show(() => { 
            const callback = (event) => {
                const key = event.key;
                
                if (key === "Escape") {
                    instance.close();
                    document.removeEventListener("keydown", callback) 
                }

            };                   
            document.addEventListener("keydown", callback);
        });
    });
})





