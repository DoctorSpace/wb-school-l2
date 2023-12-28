import { addInfochangedProducts } from "./addInfochangedProducts.js";


const foodPlace = document.getElementById("foodPlace");

export function productChange() {
  foodPlace.innerHTML = "";
  let currentItems = localStorage.getItem("foods");

  if (currentItems != undefined) {
    JSON.parse(currentItems).forEach((value) => {
      let element = document.createElement("div");
      element.classList.add("eatenFood");

      element.innerHTML = `
            <div class="eatenFood__info">
              <h5 id="foodName">${value.title}</h5>
              <div class="eatenFood__info-text">
                <p>калории: <span>${value.Kall}</span></p>
                <p>белки: <span>${value.squirrels}</span></p>
                <p>жиры: <span>${value.fats}</span></p>
                <p>углеводы: <span>${value.carbohydrates}</span></p>
                <p>грамм: <span>${value.gramm}</span></p>
            </div>
            </div>
            <button class="BinButton" id="${value.id}">
                <img id="${value.id}" class="BinButton" src="./assets/img/bin.svg" />
            </button>
       `;

      foodPlace.appendChild(element);
    });
  }

  addInfochangedProducts();
}
