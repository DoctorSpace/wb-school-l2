export function deleteProduct(targetId) {
  let currentItems = JSON.parse(localStorage.getItem("foods"));


  // Используем метод filter для создания нового массива без объекта с искомым id
  let newArray = currentItems.filter((obj) => obj.id != targetId);

  // Преобразуем массив обратно в JSON и сохраняем в localStorage
  localStorage.setItem("foods", JSON.stringify(newArray));
}
