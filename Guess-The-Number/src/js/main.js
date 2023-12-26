import getRandomInt from "./setRandomNumber.js";

// Setting
const settingPage = document.getElementById("settingPage");
const minBorderNumber = document.getElementById("minBorderNumber");
const maxBorderNumber = document.getElementById("maxBorderNumber");
const btnStartGame = document.getElementById("btnStartGame");

// Game
const gamePage = document.getElementById("gamePage");
// input
const InputPlace = document.getElementById("InputPlace");
const warningText = document.getElementById("warningText");
const mainGameInput = document.getElementById("mainGameInput");
const attemptNumPlace = document.getElementById("attemptNumPlace");
const attemptNum = document.getElementById("attemptNum");

const gameMinBorderNumber = document.getElementById("gameMinBorderNumber");
const gameMaxBorderNumber = document.getElementById("gameMaxBorderNumber");
const btnCheckNum = document.getElementById("btnCheckNum");

// Границы поиска чисел
let minBorder = 1;
let maxBorder = 100;
let countAttempt = 0;
// let wrongNumbers = []; // Предупреждение о том что вы вводили уже это число
let randomNumber = getRandomInt(minBorder, maxBorder);

// Кнопка настройки
btnStartGame.addEventListener("click", () => {
  minBorder = minBorderNumber.value ? Number(minBorderNumber.value) : 1;
  maxBorder = maxBorderNumber.value ? Number(maxBorderNumber.value) : 100;

  settingPage.classList.toggle("dNone");
  gamePage.classList.toggle("dNone");

  gameMinBorderNumber.innerText = minBorder;
  gameMaxBorderNumber.innerText = maxBorder;

  randomNumber = getRandomInt(minBorder, maxBorder);
});

// Game
mainGameInput.addEventListener("input", (event) => {

  InputPlace.classList.remove("red");
  // Проверка на лимиты
  if (
    Math.round(mainGameInput.value) > maxBorder ||
    (Math.round(mainGameInput.value) < minBorder &&
      Math.round(mainGameInput.value) != "")
  ) {
    warningText.classList.remove("dNone");
  } else {
    warningText.classList.add("dNone");
  }
});

// Проверка числа
btnCheckNum.addEventListener("click", () => {

  if (Math.round(mainGameInput.value) == "") {
    InputPlace.classList.add("red");
  } else {
    countAttempt = countAttempt + 1;

    let element = document.createElement("div");
    element.classList.add("gameSteps__step");

    // Условие победы
    if (randomNumber == Math.round(mainGameInput.value)) {
      btnCheckNum.disabled = true;
      element.innerText = `Ура, правильное число!`;
      element.classList.add("win");

      if (countAttempt == 1) {
        attemptNumPlace.classList.remove("dNone");
      }

      attemptNum.innerText = countAttempt;
    }

    // Загаданное число больше
    if (randomNumber > Math.round(mainGameInput.value)) {
      element.innerText = `это не ${Math.round(mainGameInput.value)} - число больше`;
    //   wrongNumbers.push(Math.round(mainGameInput.value));

      if (countAttempt == 1) {
        attemptNumPlace.classList.remove("dNone");
      }

      attemptNum.innerText = countAttempt;
    }

    // Загаданное число меньше
    if (randomNumber < Math.round(mainGameInput.value)) {
      element.innerText = `это не ${Math.round(mainGameInput.value)} - число меньше`;
    //   wrongNumbers.push(Math.round(mainGameInput.value));

      if (countAttempt == 1) {
        attemptNumPlace.classList.remove("dNone");
      }
      attemptNum.innerText = countAttempt;
    }


    // Подсказка чёрное или не чётное чило
    if (countAttempt % 3 == 0 && !(element.classList.contains('win'))) {
      let element2 = document.createElement("div");
      element2.classList.add("gameSteps__step");

      element2.classList.add("warning");
      if (randomNumber % 2 === 0) {
        element2.innerText = `число чётное`;
      }

      if (randomNumber % 2 !== 0) {
        element2.innerText = `число нечётное`;
      }

      gameSteps.appendChild(element2);
    }

    mainGameInput.value = ''
    gameSteps.appendChild(element);
  }
});


// Рестарт
btnRestart.addEventListener("click", () => {
    settingPage.classList.toggle("dNone");
    gamePage.classList.toggle("dNone");
    btnCheckNum.disabled = false;

    mainGameInput.value = ''
    gameSteps.innerText = ''
    warningText.classList.add('dNone')
    attemptNumPlace.classList.add('dNone')
    countAttempt = 0
})
