export function addToLocalStorage(key, objectToAdd) {
  // Получаем текущее значение из localStorage
  let currentItems = localStorage.getItem(key);

  // Если в localStorage еще нет значения, создаем новый массив и добавляем в него объект
  if (!currentItems) {
    currentItems = [objectToAdd];
  } else {
    // Если в localStorage уже есть значение, преобразуем его из JSON в массив
    currentItems = JSON.parse(currentItems);

    // Добавляем новый объект в массив
    currentItems.push(objectToAdd);
  }

  // Преобразуем массив обратно в JSON и сохраняем в localStorage
  localStorage.setItem(key, JSON.stringify(currentItems));
}
