// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

"use strict";

const categoryItemRef = document.querySelectorAll("li.item");

console.log(`В списке ${categoryItemRef.length} категории`);

categoryItemRef.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryAmount = item.querySelectorAll("li").length;
  const message = ` Категория: ${categoryName}\n Количество элементов: ${categoryAmount}`;
  console.log(message);
});
