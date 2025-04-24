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
