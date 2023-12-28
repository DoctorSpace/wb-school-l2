import { checkColor } from "./checkColor.js";

const sidebar = document.getElementById("sidebar");

export function addProgress(arrNow){
    let element = document.createElement("div");
    element.classList.add("miniBoard");
    element.innerHTML = `
      <div class="miniCell ${checkColor(arrNow[0][0])}" >${arrNow[0][0]}</div>
      <div class="miniCell ${checkColor(arrNow[0][1])}" >${arrNow[0][1]}</div>
      <div class="miniCell ${checkColor(arrNow[0][2])}" >${arrNow[0][2]}</div>
      <div class="miniCell ${checkColor(arrNow[1][0])}" >${arrNow[1][0]}</div>
      <div class="miniCell ${checkColor(arrNow[1][1])}" >${arrNow[1][1]}</div>
      <div class="miniCell ${checkColor(arrNow[1][2])}" >${arrNow[1][2]}</div>
      <div class="miniCell ${checkColor(arrNow[2][0])}" >${arrNow[2][0] }</div>
      <div class="miniCell ${checkColor(arrNow[2][1])}" >${arrNow[2][1]}</div>
      <div class="miniCell ${checkColor(arrNow[2][2])}" >${arrNow[2][2]}</div>
      `;
    sidebar.appendChild(element);
    
}