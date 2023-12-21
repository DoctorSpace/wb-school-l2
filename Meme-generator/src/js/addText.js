import { draggableElements } from "./dataElements.js";

export function setText() {
  const textBlock = document.querySelector("#textBlock");
  textBlock.innerHTML = ''

  draggableElements.forEach((item) => {

    let text = document.createElement("div");

    text.classList.add("textBlock__element");

    text.innerHTML = `
            <p id="textBlock">${item.text}</p>
            <img id="bin" src="./assets/img/bin.svg">
        `;

    textBlock.appendChild(text);
  });
}
