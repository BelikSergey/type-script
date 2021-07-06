// const invoice: number = 100;
// const stock: number = 100;

// let message: string = "";
// if (stock >= invoice) {
//   message = "Заказ оформлен, с вами свяжется менеджер";
// } else message = "На складе недостаточно товаров!";
// console.log(message);

//если invoice равен 100
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 50
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 150
// то значение message будет равно
// 'На складе недостаточно товаров!'

// ++++++++++++++++++++++++++++++++++++++++++++++
// // task 2
// const ADMIN_PASSWORD: string = "jqueryismyjam";

// const CANCELED_BY_USER: string = "Отменено пользователем!";
// const ACCESS_IS_ALLOWED: string = "Добро пожаловать!";
// const ACCESS_DENIED: string = "Доступ запрещен, неверный пароль!";
// let message1: string;
// let userPassword: string | null = prompt("Введите пароль");
// if (userPassword === null) {
//   message1 = CANCELED_BY_USER;
// } else if (userPassword === ADMIN_PASSWORD) {
//   message1 = ACCESS_IS_ALLOWED;
// } else {
//   message1 = ACCESS_DENIED;
// }
// // Write code under this line

// console.log(message1);

// ==================================================
// task 4


const orderPieces: number = 4;
const credits: number = 23580;
const pricePerDroid: number = 3000;
const CANCELED_BY_USER: string = "Отменено пользователем!";
const ACCESS_DENIED: string = "Недостаточно средств на счету!";

let totalPrice; // Write code on this line
let balanceCredit; // Write code on this line
let message;

// Write code under this line
// 1.сравнить введенное число и при null вывести отменено пользователем
totalPrice = pricePerDroid * orderPieces;
balanceCredit = credits - totalPrice;
if (orderPieces === null) {
  message = CANCELED_BY_USER;
} else if (credits < totalPrice) {
  message = ACCESS_DENIED;
} else {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
}

console.log(message);



// ==============================================
// task 5


// const countryName: string = "ЧИЛИ";

// const CANCELED_BY_USER: string = "Отменено пользователем!";
// const NO_DELIVERY: string = "В выбранную страну доставка недоступна.";
// const CHINA: string = "Китай";
// const AUSTRALIA: string = "Австралия";
// const INDIA: string = "Индия";
// const JAMAICA: string = "Ямайка";
// const CHILLI: string = "Чили";
// let message: string = '';
// let price: number = 0;
// let country: string = '';
// if (countryName === null) {
//   message = CANCELED_BY_USER;
// } else {
//   country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line
//   switch (country) {
//     case CHINA:
//       price = 100;
//       country = CHINA;
//       break;
//     case AUSTRALIA:
//       price = 170;
//       country = AUSTRALIA;
//       break;
//     case INDIA:
//       price = 80;
//       country = INDIA;
//       break;
//     case JAMAICA:
//       price = 120;
//       country = JAMAICA;
//       break;
//     case CHILLI:
//       price = 250;
//       country = CHILLI;
//       break;
//     default:
//       message = NO_DELIVERY;
//   }
// }
// if (message !== CANCELED_BY_USER && message !== NO_DELIVERY) {
//   // Write code on this line
//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
// }

// // console.log(country);
// console.log(message);

//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'


// ========================================
// task 7

// interface IbtnAdd {
//   listener: EventListenerOrEventListenerObject,
//   options?: boolean | AddEventListenerOptions | undefined
// }

// const btnAdd: IbtnAdd = document.querySelector("button[data-add]");
// const inputValeu = document.querySelector("input[data-input] ");
// const outputEl = document.querySelector("span");

// let total = 0;

// btnAdd.addEventListener("click", function () {
//   console.log("click kkkkk");
//   const value: number = Number(inputValeu.value);
//   total += value;
//   outputEl.textContent = total;
//   inputValeu.value = "";
// });

// let total = 0;
// const CANCELED_BY_USER = "Отменено пользователем!";
// let input = prompt("Введите число");
// input = input * 1;

// if (input !== NaN) {
//   for (let i = 0; (i = null); i += 1) {
//     total += input;
//     alert(`Сумма введенных данных ${total}`);
//   }
//   alert(CANCELED_BY_USER);
// } else {
//   alert("Некорректный ввод");
// }

// if (input !== NaN) {
//   total = total + input;
//   alert(`Сумма введенных данных ${total}`);
// } else {
//   alert("Некорректный ввод");
// }










export { }