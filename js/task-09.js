function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change - color і
// виводить значення кольору в span.color.

const nameOfB_G_C = document.querySelector(".color");

// console.log(nameOfB_G_C);

const butoonChangeB_G_C = document.querySelector(".change-color");

// console.log(butoonChangeB_G_C);

let newB_G_C = getRandomHexColor();

butoonChangeB_G_C.addEventListener(`click`, changeB_G_C);

function changeB_G_C() {

let newB_G_C = getRandomHexColor();

  document.body.style.backgroundColor = newB_G_C;

  nameOfB_G_C.textContent = newB_G_C;
};

