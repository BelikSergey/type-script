// ================
// task 1

// type TArray = (string | number)[];

// let result: string = "";
// const getItemsString = function (array: TArray) {
//   for (let i = 0; i < array.length; i += 1) {
//     result += `${i + 1} - ${array[i]}\n`;
//   }
//   return result;
// };

//  console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
// console.log(getItemsString([5, 10, 15]));

// =================
// task 2

// const calculateEngravingPrice = (message = "", pricePerWord = 0) =>
//   message.split(" ").length * pricePerWord; // Write code in this line

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// ); // 240

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// ); // 120

// console.log(calculateEngravingPrice("Uno", 100)); // 100


// =================================
// task3

// function findLongestWord(string = "") {
//   let arrey = string.split(" ");
//   let longestResult = arrey[0];
//   for (const element of arrey) {
//     if (longestResult.length < element.length) {
//       longestResult = element;
//     }
//   }
//   return longestResult;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// // 'jumped'

// console.log(findLongestWord("Google do a roll"));
// // 'Google'

// console.log(findLongestWord("May the force be with you"));
// // 'force'


// =====================================
//  task 4

// function formatString(string: string, maxLength = 40) {
//   const arrey = string.split("");
//   if (arrey.length > maxLength) {
//     return arrey.slice(0, maxLength).join("") + "...";
//   } else {
//     return arrey.join("");
//   }
// }

// // console.log(formatString);
// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // 'Curabitur ligula sapien, tincidunt non.'

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // 'Vestibulum facilisis, purus nec pulvinar...'

// console.log(
//   formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
// );

// function checkForSpam(str: string) {
//   if (str.toLowerCase().includes("spam")) {
//     return true;
//   } else if (str.toLowerCase().includes("sale")) {
//     return true;
//   }
//   return false;
// }

// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); //true

// ======================================
// task 5

// function mapArray(array: number[]) {
//   const numbers: number[] = new Array(array.length);

//   for (let i = 0; i < array.length; i += 1) {
//     let number = array[i] * 10;
//     numbers.splice(i, 1, number);
//     numbers.length = array.length;
//   }
//   return numbers;
// }

// console.log(mapArray([-2, 0, 2]));
// // [-20, 0, 20]

// console.log(mapArray([-2.5, 0, 2.5]));
// // [-25, 0, 25]


// ==========================
// task 6

// function filterArray<T>(array: T[]) {
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (Number.isFinite(array[i])) numbers.push(array[i]);
//   }
//   return numbers;
// }

// console.log(filterArray([-2, 0, 2]));
// // [-2, 0, 2]

// console.log(filterArray([1, NaN, Infinity]));
// // [1]

// console.log(filterArray([0, -0, 100, "100"]));
// // [0, 0, 100]

// console.log(filterArray([undefined, false, null, [], 1]));
// // [1]

// console.log(filterArray([{}, () => {}, 2]));
// // [2]


// =====================================
// task 7

function reduceArray(array: number[]) {
 
  let total = 0;
  for (let i = 0; i < array.length; i += 1) {
    total += array[i];
  }

  return total;
}

console.log(reduceArray([1, 2, 3]));
// 6

console.log(reduceArray([-2, 0, 2]));
// 0

console.log(reduceArray([1, 2, 2.5]));
// 5.5

// ==============================
// task 8

function isLoginValid(login: string, min = 4, max = 16) {
  return login.length >= min && login.length <= max ? true : false;
  //   if (login.length < min) {
  //     return false;
  //   } else if (login.length > max) {
  //     return false;
  //   }
  //   return true;
}

function isLoginUnique(allLogins: string[], login: string) {
  return allLogins.includes(login) ? false : true;
  //   if (allLogins.includes(login)) {
  //     return false;
  //   }
  //   return true;
}

function addLogin(allLogins: string[] , login: string) {
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message = "";
  if (isLoginValid(login) === false) {
    message = ERROR;
  } else if (isLoginUnique(allLogins, login) === false) {
    message = REFUSAL;
  } else {
    message = SUCCESS;
    allLogins.push(login);
  }
  return message;
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

console.log(addLogin(logins, "1234567890123456"));
// 'Логин успешно добавлен!'
console.log(logins);

console.log(addLogin(logins, "robotGoogles"));
// 'Такой логин уже используется!'

console.log(addLogin(logins, "Zod"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, "jqueryisextremelyfast"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'



export { }