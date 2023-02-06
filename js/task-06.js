// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//     перевіряє його вміст щодо правильної кількості введених символів.

//     Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputEll = document.querySelector(`#validation-input`);

const normalInputLength = Number(inputEll.dataset.length);

function replaseClass(addClassName, removeClassName) {
    inputEll.classList.add(addClassName);
     inputEll.classList.remove(removeClassName);
}

inputEll.addEventListener(`blur`, validationByLength);

function validationByLength() {

  
    if (inputEll.value.length === normalInputLength) {

        replaseClass(`valid`, `invalid`);
    
    } else {

         replaseClass(`invalid`,`valid` );   
    }
}