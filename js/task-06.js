// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//     перевіряє його вміст щодо правильної кількості введених символів.

//     Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputEll = document.querySelector(`#validation-input`);

// console.log(inputEll);

const normalInputLength = Number(inputEll.dataset.length);

// console.log(normalInputLength);



inputEll.addEventListener(`blur`, validationByLength);

function validationByLength() {

    // console.log(inputEll.value.length); 

    // console.log(normalInputLength)

    if (inputEll.value.length === normalInputLength) {

        inputEll.classList.add(`valid`)

        inputEll.classList.remove(`invalid`)
        
    } else {

        inputEll.classList.add(`invalid`)
        inputEll.classList.remove(`valid`)
    }
}