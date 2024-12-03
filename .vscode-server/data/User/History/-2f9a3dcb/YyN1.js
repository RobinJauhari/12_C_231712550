class Food {
    constructor(name) {
        this.name = name;
    }

    serve() {
        return `${this.name} siap disajikan.`;
    }
}

class Pizza extends Food {
    constructor() {
        super("Pizza");
    }
    
    serve() {
        console.log("Pizza disajikan dengan saus tomat.");
    }
}

class Burger extends Food {
    constructor() {
        super("Burger");
    }

    serve() {
        console.log("Burger disajikan dengan kentang goreng.");
    }
}

class FoodFactory {
    createFood(type) {
        switch (type) {
            case "pizza":
                return new Pizza();
            case "burger":
                return new Burger();
            default:
                throw new Error("Invalid food type");       
        }
    }
}

const factory = new FoodFactory();
const pizza = factory.createFood("pizza");
const burger = factory.createFood("burger");

pizza.serve();
burger.serve();