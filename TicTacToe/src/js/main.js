import { restart } from './restart.js'
import { addProgress } from './addProgress.js'
import { setCount } from './setCount.js';


const header = document.getElementById("header");
const board = document.getElementById("board");
const headerMove = document.getElementById("headerMove");
const btnRestart = document.getElementById("btnRestart");


let first = true;
let win = false

let arrNow = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];


// Удаление отдельного продукта
document.addEventListener("DOMContentLoaded", function () {
  // Добавляем обработчик события на родительский элемент
  board.addEventListener("click", function (event) {
    if (event.target.classList.contains("сell") && win == false) {
      let value = event.target.innerText;
      let id = event.target.id;

      if (value == "") {
        first ? (event.target.innerText = "0") : (event.target.innerText = "X");
        first ? event.target.classList.add('blue') : event.target.classList.add('red');

        if (first) {
          header.classList.remove("headP1");
          header.classList.add("headP2");
          headerMove.innerText = "Ходит крестик";
        } else {
          header.classList.remove("headP2");
          header.classList.add("headP1");
          headerMove.innerText = "Ходит нолик";
        }

        let result = setCount(id, first ? (event.target.innerText = "0") : (event.target.innerText = "X"), arrNow)

        arrNow = result[0]
        win = result[1]
      }

      first = !first;
    }
  });
});



btnRestart.addEventListener('click', ()=>{
    first = true;
    win = false;

    arrNow = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];

    restart()
})