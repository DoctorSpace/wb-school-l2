export function searchProduct(text) {
  let currentItems = JSON.parse(localStorage.getItem("foods"));

  // Преобразование всех свойств "name" и "color" к нижнему регистру
  let lowArr = currentItems.map((obj) => ({
    title: obj.title.toLowerCase(),
    Kall: obj.Kall,
    squirrels: obj.squirrels,
    fats: obj.fats,
    carbohydrates: obj.carbohydrates,
    gramm: obj.gramm,
    id: obj.id,
  }));

  // Создаем новый массив на основе входного слова или буквы
  let newArray = lowArr.filter((obj) => obj.title.includes(text));

  foodPlace.innerHTML = "";

  newArray.forEach((value) => {
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
