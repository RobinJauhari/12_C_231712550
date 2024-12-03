class Shape3D {
    calculateVolume() {
        throw new Error("Method 'calculateVolume' must be implemented")
        
    }
}

class Sphere extends Shape3D {
    constructor(radius) {
        this.radius = radius;
    }

    calculateVolume() {
        return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
    }
}

class Cube extends Shape3D {
    constructor(side) {
        this.side = side;
    }

    calculateVolume() {
        return Math.pow(this.side, 3);
    }
}

class Cone extends Shape3D {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    calculateVolume() {
        return (Math.PI * this.radius * this.radius * this.height) / 3;
    }
}

class 

const threeDimensionalShapes = [
    new Sphere(5),
    new Cube(4),
    new Cone(3, 7)
];

console.log(`OCP1_C_12550`);

    threeDimensionalShapes.forEach(shape => console.log(`Volume :
    ${shape.calculateVolume()}`));
    