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
    });}
    8
    9 async function getData() {
    10 try {
    11 const data = await fetchData();
    12 console.log("Data retrieved:", data);
    13 } catch (error) {
    14 console.error("An error occurred:", error.message);
    15 }
    16 }
    Kesimpulan: Dengan modul ini, Anda telah memahami tentang penggunaan blok try-catch dalam JavaScript untuk menangani
    Pengecualian dan mencegah program berakhir secara tiba-tiba akibat Pengecualian yang tidak ditangani. Anda juga telah melihat contohcontoh penggunaan blok try-catch dalam kode JavaScript, termasuk menangani Pengecualian dalam kode sinkron dan kode asinkron.
    Dengan menggunakan blok try-catch, Anda dapat lebih efektif dalam mengatasi situasi yang memerlukan penanganan kesalahan. Jika
    Anda memiliki pertanyaan lebih lanjut, jangan ragu untuk bertanya!
    17
    18 getData();