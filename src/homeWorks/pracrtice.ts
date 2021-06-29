enum PizzaSize {
    Small = 's',
    Medium = 'm',
    large = 'l',
}

type Size = PizzaSize.Small | PizzaSize.Medium | PizzaSize.large;

interface IPizza {
    size: Size;
    toppings: string[];
    longSize(): void;
    getSize(): string;
    addTopping(topping: string): void;
}


const pizza: IPizza = {
    size: PizzaSize.Small,
    toppings: [],
    longSize() {
        console.log(this.size);
    },
    getSize() {
        return this.size;
    },
    addTopping(topping) {
        this.toppings.push(topping)
    },
};

console.log(pizza);
export { };
    
