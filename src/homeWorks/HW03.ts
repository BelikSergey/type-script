// ===============================
// task 1

interface IUser {
    age: number,
    hobby: string,
    name: string,
    premium: boolean,
    mood?: string,
    'full time'?: boolean,
    // index?: number,
    
}

let message = "";
const user: IUser = {
  age: 20,
  hobby: "html",
  name: "Mango",
  premium: true,
};

user.mood = `happy`;
user[`full time`] = true;
user.hobby = "skydiving";
user.premium = false;

//Write code under this line
// type Tkeys = 

// const keys: string[] = Object.keys(user);
// // Write code under this line
// for (const key of keys) {
//   let property = ``;
//   property = `${key} : ${user[key]} \n`;
//   message += property;
//   // console.log(message);
// }

// console.log(keys);
console.log(message);
/*
'age : 20
hobby : skydiving
name : Mango
premium : false
mood : happy
"full time" : true
' */

// interface Empl {
//     [key: string]: number;
// }

// const countProps = function (obj: Empl) {
//   // Write code under this line
//   const keys = Object.keys(obj);
//   return keys.length;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ a: 1, b: 1 })); // 2

// console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5


// // const findBestEmployee = function (employees: Empl) {
  
// //   let winner = ``;
// //   let result = 0;
// //   const keys = Object.keys(employees);
// //   for (const key of keys) {
// //     if (employees[key] > result) {
// //       result = employees[key];
// //       winner = key;
// //     }
// //     console.log(result);
// //   }
// //   return winner;
// // };
// // // Объекты и ожидаемый результат
// // const developers = {
// //   ann: 29,
// //   david: 35,
// //   helen: 1,
// //   lorence: 99,
// // };
// // console.log(findBestEmployee(developers));
// // // 'lorence'

// // const supports = {
// //   poly: 12,
// //   mango: 17,
// //   ajax: 4,
// // };
// // console.log(findBestEmployee(supports));
// // // 'mango'

// // const sellers = {
// //   lux: 147,
// //   david: 21,
// //   kiwi: 19,
// //   chelsy: 38,
// // };
// // console.log(findBestEmployee(sellers));
// // // 'lux'


// const countTotalSalary = function (employees: Empl) {

//   let sum = 0;
//   const values = Object.values(employees);
//   for (const value of values) {
//     sum += value;
//   }
//   return sum;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   mango: 300,
//   poly: 250,
//   alfred: 450,
// };
// console.log(countTotalSalary(developers));
// // 1000

// const supports = {
//   kiwi: 200,
//   lux: 150,
//   chelsy: 150,
// };
// console.log(countTotalSalary(supports));
// // 500

// interface Iempl {
//     [key: string]: number | string;
// }

// type Tarray = Iempl[];

// function getAllPropValues(array: Tarray, prop: string) {

//   const newArray: (string | number)[] = [];

//   for (const arrayItem of array) {
//     if (arrayItem[prop] !== undefined) {
//       newArray.push(arrayItem[prop]);
//     }
//   }

//   return newArray;
// }

// // Объекты и ожидаемый результат
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Радар", price: 1280, quantity: 2 },
//   { name: "Радар", price: 1320, quantity: 1 },
//   { name: "Сканер", price: 2700, quantity: 1 },
//   { name: "Сканер", price: 2500, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// console.log(getAllPropValues(products, "name"));
// // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity"));
// // [4, 2, 1, 1, 3, 7, 2]

// console.log(getAllPropValues(products, "category"));
// //  []

// function calculateTotalPrice(array: Tarray , prop: string) {
//   // Write code under this line
//   let total = 0;
//   for (const itemArray of array) {
//     const keys = Object.values(itemArray);
//     for (const key of keys) {
//       if (key === prop) {
//         total += itemArray.price * itemArray.quantity;
//       }
//     }
//   }
//   return total;
// }

// // Объекты и ожидаемый результат
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Радар", price: 1280, quantity: 2 },
//   { name: "Радар", price: 1320, quantity: 1 },
//   { name: "Сканер", price: 2700, quantity: 1 },
//   { name: "Сканер", price: 2500, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// console.log(calculateTotalPrice(products, "Радар"));
// // 9080

// console.log(calculateTotalPrice(products, "Сканер"));
// // 10200

// console.log(calculateTotalPrice(products, "Захват"));
// // 2400

// //console.log(calculateTotalPrice(products, 'Дроид'));
// // 2800






export { }
