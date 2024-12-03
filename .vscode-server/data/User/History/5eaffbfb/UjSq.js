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

class KartuKredit extends Payment_2550 {
    prosesPembayaran(amount) {
        console.log(`Pembayaran sebesar ${amount} menggunakan Kartu Kredit diproses.`);
    }
}

class Ewallet extends Payment_2550 {
    prosesPembayaran(amount) {
        console.log(`Pembayaran sebesar ${amount} menggunakan Ewallet diproses.`);
    }
}

class TransferBank extends Payment_2550 {
    prosesPembayaran(amount) {
        console.log(`Pembayaran sebesar ${amount} menggunakan Transfer Bank diproses.`);
    }
}

class NotifEmail extends Notifikasi_NPM4Digit {
    kirimNotifikasi(pesan) {
        console.log(`Email Notifikasi: ${pesan}`);
    }
}

class NotifSMS extends Notifikasi_NPM4Digit {
    kirimNotifikasi(pesan) {
        console.log(`SMS Notifikasi: ${pesan}`);
    }
}

class PaymentProcessor_NPM4Digit {
    constructor(paymentMethod, notificationMethod) {
        this.paymentMethod = paymentMethod;
        this.notificationMethod = notificationMethod;
    }

    proses(amount) {
        this.paymentMethod.prosesPembayaran(amount);
        this.notificationMethod.kirimNotifikasi('
}


