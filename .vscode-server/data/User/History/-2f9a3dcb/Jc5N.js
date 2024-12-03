class Food {
    constructor(name) {
        this.name = name;
    }

    serve() {

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

    }
}

const factory = new FoodFactory();
const pizza = factory.createFood("Pizza");
const burger = factory.createFood("Burger");

pizza.serve();
burger.serve();