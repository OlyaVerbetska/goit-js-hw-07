// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
"use strict";

const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
//textRef.style.fontSize = "50px";
function inputHandler(event) {
  textRef.style.fontSize = event.target.value + "px";
}
inputRef.addEventListener("input", inputHandler);
