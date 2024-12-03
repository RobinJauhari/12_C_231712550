function divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number" || b === 0) {
        throw new Error("Invalid input for division");
    }
    return a / b;
}

try {
    const result = divide("10", 2);
    console.log("Result:", result);
}   catch (error) {
    console.error("An error occurred:", error.message);
}