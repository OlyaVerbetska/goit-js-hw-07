// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const makeItem = ingredients.map((ingredient) => {
  let itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  return itemEl;
});
const list = document.querySelector("#ingredients");
list.append(...makeItem);
