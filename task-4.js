// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
"use strict";

let counterRef = document.querySelector("#value");
let counterValue = counterRef.textContent;
const decBtnRef = document.querySelector('[data-action="decrement"]');
const incBtnRef = document.querySelector('[data-action="increment"]');

const decrement = () => {
  document.querySelector("#value").textContent = counterValue--;
};

const increment = () => {
  document.querySelector("#value").textContent = counterValue++;
};

decBtnRef.addEventListener("click", decrement);
incBtnRef.addEventListener("click", increment);
