import { checkWinner } from "./checkWinner.js";
import { addProgress } from "./addProgress.js";

const header = document.getElementById("header");

export function setCount(id, figure, arrNow) {

  let win = false

  switch (id) {
    case "1":
      arrNow[0][0] = figure;
      break;
    case "2":
      arrNow[0][1] = figure;
      break;
    case "3":
      arrNow[0][2] = figure;
      break;
    case "4":
      arrNow[1][0] = figure;
      break;
    case "5":
      arrNow[1][1] = figure;
      break;
    case "6":
      arrNow[1][2] = figure;
      break;
    case "7":
      arrNow[2][0] = figure;
      break;
    case "8":
      arrNow[2][1] = figure;
      break;
    case "9":
      arrNow[2][2] = figure;
      break;
  }


  if (checkWinner(arrNow) != "") {
    header.classList.remove("headP2");
    header.classList.remove("headP1");

    header.classList.add("headWin");

    if (figure == "X") {
      headerMove.innerText = "Победил крестик";
    } else {
      headerMove.innerText = "Победил нолик";
    }
    win = true;
  }

  addProgress(arrNow);

  return [arrNow, win];
}
