const circle = document.querySelector(".dailyСalories__circle");
const inputMaxCalories = document.getElementById("inputMaxCalories");
const foodWarning = document.getElementById("foodWarning");

export function settingCalorieLimit(minCalories, maxCalories) {

  let Calories = localStorage.getItem("Calories") != undefined ? localStorage.getItem("Calories") : Number(inputMaxCalories.innerText)

  inputMaxCalories.value = localStorage.getItem("Calories")

  circle.setAttribute("stroke-dasharray",`${(Number(minCalories) / Number(maxCalories)) * 100}, 100`);


  if (Number(minCalories) > Number(maxCalories)){
    foodWarning.classList.remove('dNone')
  } else {
    foodWarning.classList.add('dNone')
  }


}
