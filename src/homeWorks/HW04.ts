



// const addIndex = (element: number, index: number) => {
//   return element + index;
// };
// // Write code under this line
// const subIndex = (element: number, index: number) => {
//   return element - index;
// };

// function mapArray(array: number[], cb: Function) {

//   // Write code under this line
//   const numbers = new Array(array.length);
//   for (let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//     numbers[i] = cb(element, index);
//   }
//   return numbers;
// }

// const arr = [1, 2, 3, 4, 5];

// console.log(mapArray(arr, addIndex));
// // [1, 3, 5, 7, 9]

// console.log(mapArray(arr, subIndex));
// // [1, 1, 1, 1, 1]



// const isUniq = (element: number, index: number, arr: number[]) =>
//   arr.indexOf(Math.abs(element)) === index;
// const isEven = (element: number) => element % 2 === 0;

// function filterArray(array: number[], cb: Function) {
 
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//     // Write code under this line
//     if (cb(element, index, array)) {
//       numbers.push(element);
//     }
//   }
//   return numbers;
// }

// const arr = [1, 2, 3, 4, 5, 1, 2, 5];
// // const arr = [1, 1, 2];

// console.log(filterArray(arr, isUniq));
// // [1, 2, 3, 4, 5]

// console.log(filterArray(arr, isEven));
// // [2, 4, 2]

// type TMathFn = (a: number, b: number) => number;

// const add: TMathFn = (accum, element) => accum + element;
// const mult: TMathFn = (accum, element) => accum * element;
// const sub: TMathFn = (accum, element) => accum - element;

// function reduceArray(array: number[], cb: Function, initial?: number) {
 
//   let i: number = 0;
//   let accum: number | undefined = 0;
//   if (arguments.length >= 3) {
//     accum = initial;
//     i = 0;
//   }
//   if (arguments.length === 2) {
//     accum = array[0];
//     i = 1;
//   }
//   for (i; i < array.length; i += 1) {
//     const element = array[i];
//     // Write code under this line
//     accum = cb(accum, element);
//   }
//   return accum;
// }

// const arr = [1, 2, 3, 4, 5];

// console.log(reduceArray(arr, add)); // 15
// console.log(reduceArray(arr, add, 10)); // 25

// console.log(reduceArray(arr, mult)); // 120
// console.log(reduceArray(arr, mult, 10)); // 1200

// console.log(reduceArray(arr, sub)); // -13
// console.log(reduceArray(arr, sub, 10)); // -5

// type TOrders = string[]

// interface IAccount{
//     owner: string;
//     balance: number;
//     discount: number;
//     orders: TOrders;
//     changeDiscount(a: number): void;
//     showOrders(): void;
//     addOrder(a: number, order: string): void;

//     }

// const account: IAccount = {
//   owner: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["order-1", "order-2", "order-3"],
//   changeDiscount(value) {
//     // console.log(this);
//     this.discount = value; // Write code in this line
//   },
//   showOrders() {
//     return this.orders; // Write code in this line
//   },
//   addOrder(cost, order) {
//     this.balance -= cost; // Write code in this line
//     this.orders.push(order); // Write code in this line
//   },
// };
// const copyAccount = Object.assign({}, account);
// copyAccount.orders = [...account.orders];
// // копируем для автотестов ссылочные типы

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.log(account.showOrders());
// // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, "order-4");
// console.log(account.balance); // 19000

// console.log(account.showOrders());
// // ['order-1', 'order-2', 'order-3', 'order-4']



interface IInvertory {
    items: string[];
    add(a: string): string;
    remove(a: string): string;
}

const inventory: IInvertory = {
  items: ["Knife", "Gas mask"],
  add(itemName) {
    this.items.push(itemName);
    return `Adding ${itemName} to inventory`;
  },
  remove(itemName) {
    this.items = this.items.filter((item) => item !== itemName);
    return `Removing ${itemName} from inventory`;
  },
};

const invokeInventoryAction = function (itemName: string, action: Function) {
  const act = action(itemName);
  const msg = `Invoking action on ${itemName}`;
  return { act, msg };
};

const invokeAdd = invokeInventoryAction(
  "Medkit",
  inventory.add.bind(inventory) // Write code in this line
);
const arrayAdd = [...inventory.items];

console.log(invokeAdd);
//{ act: 'Adding Medkit to inventory', msg: 'Invoking action on Medkit' }

console.log(arrayAdd);
// ['Knife', 'Gas mask', 'Medkit']

const invokeRemove = invokeInventoryAction(
  "Gas mask",
  inventory.remove.bind(inventory) // Write code in this line
);

const arrayRemove = [...inventory.items];

console.log(invokeRemove);
//{ act: 'Removing Gas mask from inventory', msg: 'Invoking action on Gas mask' }

console.log(arrayRemove);
// ['Knife', 'Medkit']





export { }