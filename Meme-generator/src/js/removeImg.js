export function removeImageDisplay(input, image, canvas) {

  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  // Находим все textBox
  let textBoxElements = document.querySelectorAll(".textBox");

  // Проход по всем textBox и удаление их
  textBoxElements.forEach(function (element) {
    element.parentNode.removeChild(element);
  });

  labelPlace.classList.add("imagePlace");
  labelPlace.classList.remove("imagePlace_activ");

  input.id = "inputImage";

  return false
}
