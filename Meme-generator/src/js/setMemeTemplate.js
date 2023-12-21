import { dateUrlMemeTemplate } from "./dateUrlMemeTemplate.js";

const setMemeTemplate = function () {
  dateUrlMemeTemplate.forEach((item, index) => {
    let gallery = document.createElement("div");
    gallery.classList.add("gallery");

    gallery.innerHTML = `
      <img id="memeTemplate" src="./assets/img/memeTemplate/${dateUrlMemeTemplate[index]}">
    `;

    document.getElementById("galleryContainer").appendChild(gallery);
  });
};

export { setMemeTemplate };
