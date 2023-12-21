import { setMemeTemplate } from "./setMemeTemplate.js";
import { setText } from "./addText.js";
import { removeImageDisplay } from "./removeImg.js";
import {draggableElements} from "./dataElements.js"

// Загружаем дополнительных картинкок-шаблонов
setMemeTemplate();

// Проверка если изображение или нету
let isPicture = false;
// Фон изображения
let wallpaper = null

// Иницилизация
// canvas
const canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

// Img
const labelPlace = document.querySelector("#labelPlace");
const imagePlace = document.querySelector("#imagePlace");
const inputImage = document.querySelector("#inputImage");
const reset = document.querySelector("#reset");
const infoPlace = document.querySelector('#infoPlace')

// Text
const text = document.querySelector("#text");
const textColor = document.querySelector("#textColor");
const textStroke = document.querySelector('#textStroke')
const textColorStroke = document.querySelector("#textColorStroke");
const buttonAdd = document.querySelector("#buttonAdd");
const textSize = document.querySelector("#textSize");


// --- Картинки

// Находим Мемы-Шаблоны
document.addEventListener("click", function (event) {
  if (event.target.id == "memeTemplate") {

    // isPicture = updateImageDisplay(event.target.src,labelPlace,inputImage,canvas);

    let ctx = canvas.getContext('2d');
    let newImg = new Image();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    newImg.src = event.target.src;
    wallpaper = event.target.src;

    ctx.drawImage(newImg, 0, 0, canvas.width, canvas.height)


    labelPlace.classList.remove("imagePlace");
    labelPlace.classList.add("imagePlace_activ");
    infoPlace.classList.remove("infoPlace");

    // Добавляем другой id чтобы нельзя загрузить своё изображение
    inputImage.id = "inputImageDone";
    isPicture = true;

    redraw();
  }
});

// Добавление своего изображения
inputImage.addEventListener("change", (e) => {

  let reader = new FileReader();

  reader.onload = function (event) {
    let img = new Image();

    img.onload = function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    // Устанавливаем источник изображения
    wallpaper = event.target.result;
    img.src = event.target.result;
  };

  // Читаем файл из input
  reader.readAsDataURL(e.target.files[0]);

  labelPlace.classList.remove("imagePlace");
  labelPlace.classList.add("imagePlace_activ");
  infoPlace.classList.remove("infoPlace");

  // Добавляем другой id чтобы нельзя загрузить своё изображение
  inputImage.id = "inputImageDone";
  isPicture = true;

  redraw();
});

// Убрать изображение
reset.addEventListener("click", function () {
  isPicture = removeImageDisplay(inputImage, imagePlace, canvas);
  infoPlace.classList.add("infoPlace");

  wallpaper = null;

  draggableElements.splice(0,draggableElements.length)
});

// --- Текст


// Добавление текста поверх картинки
buttonAdd.addEventListener("click", () => {
  if (isPicture) {
    if (text.value != "") {

      draggableElements.push({
        x: 400,
        y: 250,
        text: text.value,
        font: `${textSize.value? textSize.value : 42}px Arial`,
        strokeStyle: textColorStroke.value,
        color: textColor.value,
        lineWidth: textStroke.value,
        dragging: false,
        offsetX: 0,
        offsetY: 0
      })

      setText()

      text.value = ''

      redraw()

    } else {
      alert("Введите текст");
    }
  } else {
    alert("Добавьте картинку");
  }
});


// Удаление

document.addEventListener("click", function (event) {
  if (event.target.id == "bin"){
    
    let textToRemove = event.target.parentNode.children[0].childNodes[0].data

    let indexToRemove = draggableElements.findIndex(obj => obj.text === textToRemove);

    // Удалите элемент по индексу
    if (indexToRemove !== -1) {
      draggableElements.splice(indexToRemove, 1);
    }

    setText()

    redraw()
  }
})



// Перемещение

function drawText(x, y, text, font, color, strokeStyle, lineWidth) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.fillText(text, x, y);

  if (lineWidth > 0){
    ctx.lineWidth = lineWidth
    ctx.strokeStyle = strokeStyle;
    ctx.strokeText(text, x, y)

    ctx.stroke();
  }
}


function isInside(x, y, text) {
  const textWidth = ctx.measureText(text).width;
  const textHeight = 32;
  return x > text.x && x < text.x + textWidth && y > text.y - textHeight && y < text.y;
}

export function redraw() {
  if (wallpaper == null){
  } else{
    // Рисуем фоновую картинку
    const backgroundImage = new Image();
    backgroundImage.src = wallpaper; // Укажите путь к вашей фоновой картинке
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    
    // Рисуем текстовые элементы поверх фона
    draggableElements.forEach(element => {
      drawText(element.x, element.y, element.text, element.font, element.color, element.strokeStyle, element.lineWidth);
    });
  }
}


canvas.addEventListener('mousedown', function (e) {
  const mouseX = e.clientX - canvas.getBoundingClientRect().left;
  const mouseY = e.clientY - canvas.getBoundingClientRect().top;

  for (const element of draggableElements) {
    if (isInside(mouseX, mouseY, element)) {
      element.dragging = true;
      element.offsetX = mouseX - element.x;
      element.offsetY = mouseY - element.y;
      break;
    }
  }
});

canvas.addEventListener('mousemove', function (e) {
  const mouseX = e.clientX - canvas.getBoundingClientRect().left;
  const mouseY = e.clientY - canvas.getBoundingClientRect().top;

  draggableElements.forEach(element => {
    if (element.dragging) {
      element.x = mouseX - element.offsetX;
      element.y = mouseY - element.offsetY;
    }
  });

  redraw();
});

canvas.addEventListener('mouseup', function () {
  draggableElements.forEach(element => {
    element.dragging = false;
  });
});



// ---- СОХРАНЕНИЕ СКРИНШОТА

function captureBlockScreenshot() {

  // Получаем данные URL изображения в формате PNG
  let dataURL = canvas.toDataURL("image/png");

  // Создаем элемент <a> для загрузки данных URL как файла
  let link = document.createElement('a');
  link.href = dataURL;

  // Устанавливаем имя файла (можете изменить на свое)
  link.download = 'memes.png';

  // Добавляем элемент <a> в DOM и запускаем событие клика
  document.body.appendChild(link);
  link.click();

  // Удаляем элемент <a> из DOM
  document.body.removeChild(link);

};

buttonCreate.addEventListener("click", () => {
  if (isPicture){
    captureBlockScreenshot();
  } else{
    alert('Добавьте изображение')
  }
});
