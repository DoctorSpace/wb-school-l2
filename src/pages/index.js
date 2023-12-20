import { dataBlock } from "../date/dateBlock.js";

dataBlock.forEach((item) => {
  let post = document.createElement("a");

  post.href = `./${item.url}/src/imdex.html`;
  post.classList.add("contentBlock__link");

  post.innerHTML = `
    <img src="./src/img/games/${item.img}">
    <p>${item.title}</p>
  `;

  document.getElementById("contentBlock").appendChild(post);
});
