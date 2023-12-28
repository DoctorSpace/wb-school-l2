export function filterProducts(value) {
  let currentItems = JSON.parse(localStorage.getItem("foods"));

  if (value) {
    currentItems.sort(function (a, b) {
      return b.Kall - a.Kall;
    });
  } else {
    currentItems.sort(function (a, b) {
      return a.Kall - b.Kall;
    });
  }

  foodPlace.innerHTML = "";

  currentItems.forEach((value) => {
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
