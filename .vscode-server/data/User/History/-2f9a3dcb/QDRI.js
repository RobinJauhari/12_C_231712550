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
        console.log();
        
    }
}