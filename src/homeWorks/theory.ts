// общая информация Типы переменных number ,  boolean, null , undefined, any и object

let age: number = 5
const name: string = 'mango'

let value: any = 6  /* плохая практика, если тип any то проверяй свой код,
примерно такая же фигня с чистым object - слишком размытый тип */
 
//  несколько вариантов примитивов

let id: string | number | boolean = 5

// id = null;


// ---====----=====-----===
// массивы 
// Нотация  тип[]
const arr: number[] = [1, 2, 3, 3, 4,]
// ли строк или типов
const arr2: (number | string)[] = [1, 2, 2, 3, 3, 'csdc', 'fvsfv']
// только для чтения 
const arr3: readonly number[] = [1,3,3,3,4,]
//Tuple массив в определенной полседовательности и определенного кол-ва переменных координаты - 2 значения rgb - 3 значения
const coords: [number, number ] = [50.374, 30.474857]
 
// Типы 
type ID = number | string;
//тип пишеться с большой буквы
const userId: ID = 'vsdfvnksdflv'
type Coords = [number, number];
const coords2: Coords = [50.374, 30.474857]
type Reqstatus = "error" | 'succes' | 'request'
// принимает одно из 3-х значений, другое записать нельзя.
const requestStatus: Reqstatus = 'succes'

// -----=======-------
// конструкция interface для описания объектов

interface PluginConfig {
    readonly selector: number;
    // если необязательное свойство ставится знак ?
    perPage?: number;
    name: string
}

const config: PluginConfig = {
    selector: 5678,
    name: 'mango'
}

interface Empl {
    [key: string]: number;
// это описание объекта с ключем стракой и значением число, если не понятно сколько их всего будет
}


const employes: Empl = { 
    mango: 4,
    poly: 7,
    wikw: 8,

}
// -----=======-----=====
// enum перечисление
enum PizzaSize {
    Small = 's',
    Medium = 'm',
    Large = 'l',
}

// -----=======----- 
// функции

const addExpression = function (x: number, y: number) {
    return x+y
}
//  если возврат нужно явно указать то  - const addExpression = function (x: number, y: number): string {}

const addArrow = (x: number, y: number): number => {
    return x + y;
}
// такой синтаксис для Типа функции
type AddFn = (a: number, b: number) => number
// сли по умолчанию из функции ничего не возвращается то это тип void     type AddFn = (a: number, b: number) => void

const addArrow1: AddFn = function (x, y) {
    return x + y
}



console.log(age,name,value, id,arr,arr2,arr3,userId,coords, coords2,requestStatus);
console.log(config,employes, PizzaSize,addExpression, addArrow,addArrow1);

// -----------------------======================
// классы 

interface Params {
    size: string;
    toppings: string[];
}

interface IPizza {
    size: string;
    addToppings(topping: string): void;
}


class Pizza implements IPizza {
    public size: string;
    //  public - публичное свойство
    private toppings: string[];
    // private приватное свойство. можно readonly


    constructor({size, toppings = []}: Params) {
        this.size = size;
        this.toppings = toppings;
    }
    public addToppings(topping: string) {
        this.toppings.push(topping);
    }

}

console.log(Pizza);


export { };