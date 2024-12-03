function getProperty(obj, key) {
    if (!obj || typeof obj !== "object" || !key || typeof key !== "string") {
        throw new Error("Invalid input for getting property");
    }
    if (!(key in obj)) {
        throw new Error(`Property "${key}" not found`);
    }
    
    return obj[key];
}
    
const person = { nama: "John", age: 30 };

    try {
        const nama = getProperty(person, "nama")
        console.log("Nama:", nama);
}       catch (error) {
        console.error("An error occurred:", error.message);
}
    
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Data retrieval failed"));
        }, 1000);
    });
}
    
async function getData() {
    try {
        const data = await fetchData();
        console.log("Data retrieved:", data);
        } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

getData();