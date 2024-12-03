class Shape {
calculateArea() {
throw new Error("Method 'calculateArea' must be implemented");
}
}
class Rectangle extends Shape {
constructor(width, height) {
super();
    10 this.width = width;
    11 this.height = height;
    12 }
    13
    14 calculateArea() {
    15 return this.width * this.height;
    16 }
    17 }
    18
    19 class Square extends Shape {
    20 constructor(side) {
    21 super();
    22 this.side = side;
    23 }
    24
    25 calculateArea() {
    26 return this.side * this.side;
    27 }
    28 }
    29
    30 function printArea(shape) {
    31 console.log(shape.calculateArea());
    32 }
    33
    34 const rectangle = new Rectangle(5, 10);
    35 const square = new Square(5);
    36
    37 printArea(rectangle);
    38 printArea(square);