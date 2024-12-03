class Shape {
    calculateArea() {
        throw new Error("Method 'calculateArea' must be implemented");
    }
}
class Rectangle_2550 extends Shape {
    constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
    }
    
    calculateArea() {
        return this.width * this.height;
    }

    hitungkeliling() {
        return 2 * (this.height + this.width);
    }
}
class Square_2550 extends Shape {
    constructor(side) {
    super();
    this.side = side;
    }
    
    calculateArea() {
        return this.side * this.side;
    }

    hitungkeliling() {
        return 4 * this.side;
    }
}

class Segitiga_2550 extends Shape {
    constructor(height, base, side) {
        super();
        this.height = height;
        this.base = base;
        this.side = side;
    }

    calculateArea() {
        return 0.5 * this.base * this.height;
    }

    hitungkeliling() {
        return this.side + this.side + this.side;
    }
}

function printArea(shape) {
    console.log(shape.calculateArea());
}

const rectangle = new Rectangle_2550(5, 10);
const square = new Square_2550(5);
const segitiga = new Segitiga_2550(5,10, );

printArea(rectangle);
printArea(square);
printArea(segitiga);