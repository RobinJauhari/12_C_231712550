function getProperty(obj, key) {
    if (!obj || typeof obj !== "object" || !key || typeof key !== "string") {
        throw new Error("Invalid input for getting property");
    }
    if (!(key in obj)) {
        throw new Error(`Property "${key}" not found`);
    }
    
    return obj[key];
}
    
const person = { name: "John", age: 30 };

    try {
        
    15 console.log("Name:", name);
    16 } catch (error) {
    17 console.error("An error occurred:", error.message);
    18 }
    