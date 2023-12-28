import { addToLocalStorage } from "./addToLocalStorage.js";
import { productChange } from "./productChange.js";
import { deleteProduct } from "./deleteProduct.js";
import { deleteAll } from "./deleteAll.js";
import { searchProduct } from "./searchProduct.js";
import { filterProducts } from "./filterProducts.js";

const inputMaxCalories = document.getElementById("inputMaxCalories");
const foodPlace = document.getElementById("foodPlace");


const paramsTitle = document.getElementById("paramsTitle");
const paramsSquirrels = document.getElementById("paramsSquirrels");
const paramsFats = document.getElementById("paramsFats");
const paramsCarbohydrates = document.getElementById("paramsCarbohydrates");
const paramsKall = document.getElementById("paramsKall");
const paramsGramm = document.getElementById("paramsGramm");
const btnAddFood = document.getElementById("btnAddFood");

const btnDeleteAll = document.getElementById("btnDeleteAll");

const filterProduct = document.getElementById("filterProduct");
const filterProductIMG = document.getElementById("filterProductIMG");
const searchInput = document.getElementById("searchInput");


let countFood = JSON.parse(localStorage.getItem("foods")) ? JSON.parse(localStorage.getItem("foods")).length : 0 ;


// Первичная загрузка продуктов
productChange()


// Задача лимита калорий
inputMaxCalories.addEventListener("change", () => {
  localStorage.setItem("Calories", inputMaxCalories.value);
  productChange()
});


// Добавление еды
btnAddFood.addEventListener("click", () => {

  const food = {
    id:             countFood,
    title:          paramsTitle.value ? paramsTitle.value : paramsTitle.placeholder,
    squirrels:      paramsSquirrels.value ? paramsSquirrels.value : paramsSquirrels.placeholder,
    fats:           paramsFats.value ? paramsFats.value : paramsFats.placeholder,
    carbohydrates:  paramsCarbohydrates.value ? paramsCarbohydrates.value : paramsCarbohydrates.placeholder,
    Kall:           paramsKall.value ? paramsKall.value : paramsKall.placeholder,
    gramm:          paramsGramm.value ? paramsGramm.value : paramsGramm.placeholder,
  };

  addToLocalStorage("foods", food);
  countFood++;

  productChange()
});



// Поиск продукта
searchInput.addEventListener("input", (event) => {
    searchProduct(event.target.value)
})


// Сортировка по калориям
filterProduct.addEventListener("click", () => {
    filterProductIMG.classList.remove("img_dNone")
    filterProductIMG.classList.toggle('img_upActiv')

    filterProducts(filterProductIMG.classList.contains('img_upActiv'))
})



// Удаление отдельного продукта
document.addEventListener('DOMContentLoaded', function() {
    // Добавляем обработчик события на родительский элемент
    foodPlace.addEventListener('click', function(event) {

        if (event.target.classList.contains('BinButton')){
            deleteProduct(event.target.id)
            productChange()
        }

    });
})

// Удаление всех элементов
btnDeleteAll.addEventListener("click", () => {
    deleteAll()
    productChange()
})