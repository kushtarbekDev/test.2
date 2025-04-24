// Напишите функцию, которая проверяет, содержит ли строка только цифры. Используйте регулярные выражения
// const regExp = /^\d+$/;

// const containsOnlyDigits = (str) => {
//   if (regExp.test(str)) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(containsOnlyDigits("12345")); // Выведет true
// console.log(containsOnlyDigits("12a45")); // Выведет false

// Напишите функцию, которая каждую секунду выводит в консоль сообщение "Прошла секунда". Используйте setInterval
// const startTimer = () => {
//   setInterval(() => {
//     console.log("Прошла секунда");
//   }, 1000);
// };

// startTimer();

// Вывести числа от 1 до 10 с интервалом в 1 секунду, затем остановить.

// const count = () => {
//   let i = 1;
//   const interval = setInterval(() => {
//     console.log(i);
//     i++;
//     if (i > 10) {
//       clearInterval(interval);
//     }
//   }, 1000);
// };

// count();

// 4) Создать блок 150 на 150 пикселей и получить его через дом элементы при нажатии
//  на которую будет меняться его задний фон при повторном нажатии будет убираться цвет
//  заднего фона - выполните эту задачу с использованием classList и его методов

// const block = document.querySelector(".block");
// const button = document.querySelector(".btn");

// button.addEventListener("click", () => {
//   block.classList.toggle("colorBack");
// });
// Используйте XHR и выведи полученные данные в консоль

// const btnJson = document.querySelector(".btnJson");
// btnJson.onclick = () => {
//   const getTest = new XMLHttpRequest();
//   getTest.open("GET", "index.json");
//   getTest.setRequestHeader("Content-type", "application/json");
//   getTest.send();

//   getTest.onload = () => {
//     const data = JSON.parse(getTest.response);
//     console.log(data);
//   };
// };
//

//
// const API = "https://6809ed4f1f1a52874cde6196.mockapi.io/users";
// const getBtn = document.querySelector("#get");
// const postBtn = document.querySelector("#post");
// const input = document.querySelector("#input");
// const deletUser = document.querySelector("#delete");
// const patchUsers = document.querySelector("#patch");

// const getUsers = async () => {
//   try {
//     const response = await fetch(`${API}`);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// //POST
// const postUser = async () => {
//   try {
//     await fetch(API, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name: input.value }),
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };

// //delete

// const deleteUser = async (id) => {
//   try {
//     await fetch(`${API}/${id}`, {
//       method: "DELETE",
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };

// //  PATCH

// const patchUser = async (id) => {
//   try {
//     await fetch(`${API}/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name: input.value }),
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };

// getBtn.onclick = getUsers;
// postBtn.onclick = postUser;
// deletUser.onclick = () => deleteUser(14);
// patchUsers.onclick = () => patchUser(1);

// 1) Напишите функцию для
// извлечения чисел - это функция которая принимает строку и возвращает массив всех чисел в строке

// const extractNumbers = (str) => {
//   return str.match(/\d/g).map(Number);
// };

// console.log(extractNumbers("a1fg5hj6"));

// 2) Напишите функцию рекурсию которая будет
// // выводить в консоль числа фибоначчи с задержкой в одну секунду (ограничение число 144)

// const counter = (a = 0, b = 1) => {
//   console.log(a);

//   if (b > 144) return;

//   setTimeout(() => {
//     counter(b, a + b);
//   }, 1000);
// };

// counter();

// 3) Сделать запрос на API используя async await и try catch
// Делайте запроса на этот API => https://fakestoreapi.com/products
// Из полученных данных возьмите ключ title у каждого объекта и выведите их в консоль

// const API = " https://fakestoreapi.com/products";
// const task = async () => {
//   try {
//     const response = await fetch(API);
//     const data = await response.json();
//    data.forEach((item)=> {
//     console.log(item.title);

//    })
//   } catch (error) {
//     console.log(error);
//   }
// };

// task();
// 4) Создайте 5 кнопок внутри которого будут названия цветов на английском
// Пример:
// const btn = document.querySelector("#btns");

// btn.addEventListener("click", (event) => {
//   if (event.target.tagName.toLowerCase() === "button") {
//     document.body.style.background = event.target.textContent.toLowerCase();
//   }
// });
//
// const block = document.querySelector(".block");
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   block.classList.toggle("colorBack");
// });

// 6) Отобразите на странице цифру ноль и начните его увеличивать
//  на +1 каждую мили-секунду  - остановите отсчёт когда счётчик дойдёт до 100
// const block = document.querySelector(".block");
// let count = 0;
// const counter = () => {
//   if (count < 100) {
//     count++;
//     block.textContent = count;
//   } else {
//     clearInterval(interval);
//   }
// };
// const interval = setInterval(counter, 1);

// 7) Создайте кнопку при нажатии на которую будет
//  отправляться GET запрос на JSON и полученные данные от туда выводите в консоль (JSON создавайте на своё усмотрение) используйте async await

// const btn = document.querySelector(".btn");
// const getTask = async () => {
//   const response = await fetch("products.json");
//   const data = await response.json();
//   console.log(data);
// };

// btn.addEventListener("click", getTask);
