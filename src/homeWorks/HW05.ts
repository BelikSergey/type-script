
// interface IParams {
//     speed?: number;
//     price?: number;
//     maxSpeed?: number;
//     isOn?: boolean;
//     distance?: number;
    
// }
// // interface ICar{
// //     speed: number;
// //     _price: number;
// //     maxSpeed: number;
// //     isOn: boolean;
// //     distance: number;
// //     getSpecs(): string;
// //     price(a: number): void;
// // }


// class Car {
//     speed: number;
//     _price: number;
//     maxSpeed: number;
//     isOn: boolean;
//     distance: number;

//   static getSpecs(car: IParams) {
//     return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, _price: ${car.price}`;
//   }
//   constructor({ speed = 0, price=0, maxSpeed=0, isOn = false, distance = 0 }: IParams ) {
//     this.speed = speed;
//     this._price = price;
//     this.maxSpeed = maxSpeed;
//     this.isOn = isOn;
//     this.distance = distance;
//   }
//   set price(newPrice: number) {
//     (this._price = newPrice);
//   }
//   get price() {
//     return this._price;
//   }
//   turnOn() {
//     this.isOn = true;
//   }
//   turnOff() {
//     this.speed = 0;
//     this.isOn = false;
//   }
//   accelerate(value: number) {
//     if (this.speed + value < this.maxSpeed) {
//       this.speed += value;
//     } else {
//       this.speed = this.maxSpeed;
//     }
//   }
//   decelerate(value: number) {
//     if (this.speed - value >= 0) {
//       this.speed -= value;
//     } else {
//       this.speed = 0;
//     }
//   }
//     drive(hours: number) {
//     if (this.isOn === true) {
//       this.distance += hours * this.speed;
//     }
//   } 
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

// mustang.decelerate(20);
// mustang.drive(1);
// // mustang.turnOff();

// console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000

// type TFn = (a: string, b: string) => void


// const Account: TFn = function (login, email){
//   this.login = login;
//   this.email = email;
// };
// Account.prototype.getInfo = function () {
//   return `login: ${this.login}, email: ${this.email}`;
//   // login: Poly, email: poly@mail.com
// };

// console.log(typeof Account.prototype.getInfo);
// // 'function'

// const mango = new Account("Mangozedog", "mango@dog.woof");
// console.log(mango.getInfo());
// // 'login : Mangozedog, email: mango@dog.woof'

// const poly = new Account("Poly", "poly@mail.com");
// console.log(poly.getInfo());
// // 'login : Poly, email: poly@mail.com'

// interface IUser {
//     name: string;
//     age: number;
//     followers: number;
//     getInfo(): string
// }

// class User {
//    public name: string;
//    public age: number;
//    public followers: number;

//     constructor(name: string, age: number, followers: number) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }
//   getInfo() {
//     return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
//   }
// }
// console.log(typeof User);
// // 'function'

// const mango = new User("Mango", 2, 20);
// console.log(mango.getInfo());
// // 'User Mango is 2 years old and has 20 followers'

// console.log(typeof mango.getInfo);
// // 'function'

// const poly = new User("Poly", 3, 17);
// console.log(poly.getInfo());
// // 'User Poly is 3 years old and has 17 followers'

// class Storage {
//     items: string[];
//   constructor(items: string[]) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(item: string) {
//     const arrey = this.items.push(item);
//     return arrey;
//   }
//   removeItem(item: string) {
//     const arrey = this.items;
//     for (let i = 0; i < arrey.length; i += 1) {
//       if (item === arrey[i]) {
//         arrey.splice(i, 1);
//         return this.items;
//       }
//     }
//   }
// }

// console.log(typeof Storage);
// // 'function'

// const goods = ["Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор"];

// const storage = new Storage(goods);
// console.log(storage);

// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор'
// ] */

// storage.addItem("Дроид");
// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
//   'Дроид'
// ] */

// storage.removeItem("Пролонгер");
// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Железные жупи',
//   'Антигравитатор',
//   'Дроид'
// ] */

// type Str = string;

// class StringBuilder {
//     _value: Str
//   constructor(value: Str) {
//     this._value = value;
//   }
//   get value() {
//     return this._value;
//   }
//   set value(str: Str) {
//     this._value = str;
//   }
//   append(str: Str) {
//     return (this._value = this._value + str);
//   }
//   prepend(str: Str) {
//     return (this._value = str + this._value);
//   }
//   pad(str: Str) {
//     return this.prepend(str) + this._value + this.append(str);
//   }
// }
// // console.log(typeof StringBuilder);
// // 'function'

// const builder = new StringBuilder(".");

// builder.append("^");
// console.log(builder.value); // '.^'

// builder.prepend("^");
// console.log(builder.value); // '^.^'

// builder.pad("=");
// console.log(builder.value); // '=^.^='





export {}