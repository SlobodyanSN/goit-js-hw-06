// Напиши скрипт управління формою логіна.

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям 
// властивості, а значення поля - значенням властивості.Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.



    
const loginForm = document.querySelector(".login-form");

const loginFormSubmit = (event) => {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  const formData = {
    email,
    password,
  };
  if (email === "" || password.trim() === "") {
    alert("Заповніть форму")
    return
  }
  console.log(formData);
  event.currentTarget.reset();
 
};
loginForm.addEventListener("submit", loginFormSubmit);
