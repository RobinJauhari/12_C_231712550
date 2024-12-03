class Payment_2550 {
    prosesPembayaran(amount) {
        throw new Error("Metode 'prosesPembayaran' harus diimplementasikan");   
    }
}

class Notifikasi_2550 {
    kirimNotifikasi(Pesan) {
        throw new Error("Metode 'kirimNotifikasi' harus diimplementasikan");
    }
}

class KartuKredit_2550 extends Payment_2550 {
    prosesPembayaran(amount) {
        console.log(`Pembayaran sebesar ${amount} menggunakan Kartu Kredit diproses.`);
    }
}

