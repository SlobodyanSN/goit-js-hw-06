// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counter = document.querySelector("#value")

let counterValue = 0



const btnDecrement = document.querySelector(`[data-action="decrement"]`);



const btnIncrement = document.querySelector(`[data-action="increment"]`);



btnDecrement.addEventListener(`click`, subtraction );

btnIncrement.addEventListener(`click`, addition );

function subtraction() {
    counterValue -= 1
    counter.textContent = counterValue
}

function addition() {
    counterValue += 1
    counter.textContent = counterValue
}

