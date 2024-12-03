function divide(a, b) {
    2 if (typeof a !== "number" || typeof b !== "number" || b === 0) {
    3 throw new Error("Invalid input for division");
    4 }
    5 return a / b;
    6 }
    7
    8 try {
    9 const result = divide("10", 2);
    10 console.log("Result:", result);    11 } catch (error) {
console.error("An error occurred:", error.message);
}