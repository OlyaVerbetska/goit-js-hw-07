// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

"use strict";

const inputRef = document.querySelector('input[type="number"]');
const renderBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');
const boxContainer = document.querySelector("#boxes");
boxContainer.style.marginTop = "20px";

function createBoxes(amount) {
  const arrayOfBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    let box = document.createElement("div");
    // создание коробок
    arrayOfBoxes.push(box);
    // стилизация коробок
    // размер
    const initialWidth = (arrayOfBoxes[0].style.width = "30px");
    const initialHeigth = (arrayOfBoxes[0].style.height = "30px");
    arrayOfBoxes[i].style.width =
      `${Number.parseInt(initialWidth) + i * 10}` + "px";
    arrayOfBoxes[i].style.height =
      `${Number.parseInt(initialHeigth) + i * 10}` + "px";
    // цвет
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let bgColor = `rgb(${r},${g},${b})`;
    arrayOfBoxes[i].style.backgroundColor = bgColor;
  }
  return boxContainer.append(...arrayOfBoxes);
}

function destroyBoxes() {
  boxContainer.innerHTML = "";
}

renderBtnRef.addEventListener("click", () => {
  const amount = Number(inputRef.value);
  createBoxes(amount);
});

destroyBtnRef.addEventListener("click", destroyBoxes);
