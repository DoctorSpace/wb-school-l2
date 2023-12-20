import { dateUrlMemeTemplate } from "./dateUrlMemeTemplate.js";

dateUrlMemeTemplate.forEach((item, index) => {
  let gallery = document.createElement("div");

  gallery.classList.add("gallery");

  gallery.innerHTML = `
    <img id="memeTemplate${dateUrlMemeTemplate[index]}" src="./assets/img/memeTemplate/${dateUrlMemeTemplate[index]}">
  `;

  document.getElementById("galleryContainer").appendChild(gallery);
});
