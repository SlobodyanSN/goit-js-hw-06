// // Напиши скрипт, який:

// // Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

// // Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст 
// заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// // В результаті, в консолі будуть виведені наступні повідомлення.

// // Number of categories: 3

// // Category: Animals
// // Elements: 4

// // Category: Products
// // Elements: 3

// // Category: Technologies
// // Elements: 5



console.log('Number of categories:' + document.querySelectorAll(`#categories .item`).length);

console.log(`Category: `+ document.querySelector(`ul li h2`).textContent);



console.log(`Elements: `+document.querySelectorAll(` #categories .item > ul > li`).length )

// const category = document.querySelectorAll(`#categories .item `);

// const catName = document.querySelector(`#categories .item`);

// console.log(catName)

// console.log(document.querySelectorAll(`#categories .item `))


// document.querySelectorAll(`#categories .item`).forEach(element => {
    
// });

