// File: 12_C_XXXXX_SORE.js

function kasir(totalHarga, jumlahUang) {
    try {
        // Validasi bahwa input adalah angka
        if (isNaN(totalHarga) || isNaN(jumlahUang)) {
            throw "Both total price and amount given must be numbers";
        }
        
        // Validasi jika jumlah uang kurang dari total harga
        if (jumlahUang < totalHarga) {
            throw "Amount given is less than the total price";
        }

        // Menghitung kembalian
        let kembalian = jumlahUang - totalHarga;
        console.log(`Transaction successful. Change to return: ${kembalian}`);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Transaction process ended.");
    }
}

// Contoh Penggunaan:
kasir(50000, 60000); // Output: Transaction successful. Change to return: 10000
kasir(50000, 30000); // Output: Amount given is less than the total price
kasir("lima ribu", 50000); // Output: Both total price and amount given must be numbers
