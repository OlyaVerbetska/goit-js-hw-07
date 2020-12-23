// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
"use strict";

const inputRef = document.querySelector("#validation-input");

const validLength = Number(inputRef.dataset.length);

function inputValidationHandler(event) {
  let inputValue = event.target.value;
  if (inputValue.length === validLength) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}

inputRef.addEventListener("blur", inputValidationHandler);
