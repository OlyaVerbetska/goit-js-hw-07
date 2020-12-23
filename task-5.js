// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
"use strict";

const inputRef = document.querySelector("#name-input");
const greetingRef = document.querySelector("#name-output");

inputRef.addEventListener("input", inputNameHandler);

function inputNameHandler(event) {
  if (event.target.value !== "") {
    return (greetingRef.textContent = event.target.value);
  }
  return (greetingRef.textContent = "незнакомец");
}
