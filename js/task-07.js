// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const input = document.querySelector("#font-size-control");

const txt = document.querySelector("#text");

console.dir(txt);



input.addEventListener(`input`, (event) => {
    const currentFontSize = event.currentTarget.value;

    console.log(currentFontSize);

    txt.style.fontSize = `${currentFontSize}px`
}
);



