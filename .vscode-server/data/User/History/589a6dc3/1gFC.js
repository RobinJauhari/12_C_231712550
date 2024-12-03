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
    Kesimpulan: Dengan modul ini, Anda telah memahami pentingnya pemrograman defensif dalam mencegah Pengecualian di JavaScript.
    Anda telah melihat betapa pentingnya validasi input dan penghindaran potensi masalah kritis dalam menciptakan kode yang kokoh dan
    aman. Dengan mempraktikkan pemrograman defensif, Anda dapat mencegah banyak Pengecualian sebelum mereka terjadi, meningkatkan
    keamanan dan kehandalan kode Anda secara keseluruhan. Jika Anda memiliki pertanyaan lebih lanjut, jangan ragu untuk bertanya!
    14 const name = getProperty(person, "name");
    15 console.log("Name:", name);
    16 } catch (error) {
    17 console.error("An error occurred:", error.message);
    18 }
    