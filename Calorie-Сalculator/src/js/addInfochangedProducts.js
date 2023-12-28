import { settingCalorieLimit } from "./settingCalorieLimit.js";


const squirrelsInfo = document.getElementById("squirrelsInfo");
const fatsInfo = document.getElementById("fatsInfo");
const carbohydratesInfo = document.getElementById("carbohydratesInfo");
const caloriesInfo = document.getElementById("caloriesInfo");
const KKAL = document.getElementById("nowCalories");
const inputMaxCalories = document.getElementById("inputMaxCalories");

export function addInfochangedProducts() {
  let countSquirrels = 0;
  let countFats = 0;
  let countCarbohydrates = 0;
  let countCalories = 0;

  let currentItems = localStorage.getItem("foods");
  let Calories = localStorage.getItem("Calories");

  if (currentItems != undefined) {
    JSON.parse(currentItems).forEach((value) => {

      countSquirrels = countSquirrels + Number(value.squirrels);
      countFats = countFats + Number(value.fats);
      countCarbohydrates = countCarbohydrates + Number(value.carbohydrates);
      countCalories = countCalories + Number(value.Kall);
    });
  }



  settingCalorieLimit(countCalories, Calories)

  squirrelsInfo.innerText = countSquirrels
  fatsInfo.innerText = countFats
  carbohydratesInfo.innerText = countCarbohydrates
  caloriesInfo.innerText = countCalories
  KKAL.innerText = countCalories

}
