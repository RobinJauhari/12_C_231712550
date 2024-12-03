console.log("[BARATIE RESTAURANT]")
console.log('_'.repeat(50));

function processPayment(hargaTotal, bayar) {
    try {
        // Validasi input: kedua nilai harus angka
        if (typeof hargaTotal !== "number" || typeof bayar !== "number") {
            throw "Both total price and amount given must be numbers";
        }

        // Validasi jumlah uang yang diberikan kurang dari harga total
        if (bayar < hargaTotal) {
            throw "Amount given is less than the total price";
        }

        // Hitung kembalian dan tampilkan pesan berhasil
        let kembalian = bayar - hargaTotal;
        console.log(`Transaction successful. Change to return: ${kembalian}`);
    } catch (error) {
        // Menampilkan pesan error
        console.error(error);
    } finally {
        // Pesan akhir proses
        console.log("Transaction process ended.");
    }
}

const testCases = [
    { label: "[1]", total: 50, bayar: "fifty" }, // Salah input, bukan angka
    { label: "[2]", total: 50, bayar: 35 }, // Kurang bayar
    { label: "[3]", total: 50, bayar: 550 }, // Berhasil
];

testCases.forEach(({ label, total, bayar }) => {
    console.log(label);
    processPayment(total, bayar);
    console.log('_'.repeat(50));
});