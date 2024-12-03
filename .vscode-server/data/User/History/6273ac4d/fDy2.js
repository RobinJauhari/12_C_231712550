class Produk {
    constructor(nama, jumlah) {
        this.nama = nama;
        this.jumlah = jumlah;
    }
    informasi() {
        console.log(`Produk ${this.nama} ada sebanyak ${this.jumlah} pcs.`);
    }

    getterNama() {
        return this.nama;
    }
}

class Makanan extends Produk {
    constructor(expired, nama, jumlah) {
        super(nama, jumlah);
        this.expired = expired;
    }
    waktuRusak() {
        console.log(`${this.nama} akan rusak pada tanggal ${this.expired}`);
    }
}

class Orang extends Produk {
    constructor(nama, jumlah, size) {
        super(nama, jumlah);
        this.size = size;
    }
    ukuranPakaian() {
        console.log(`${this.nama} memiliki ukuran pakaian ${this.size}.`);
    }
}

const burger = new Makanan("25 September 2024", "BigMac", 1);

burger.informasi();
burger.waktuRusak();
console.log("Makanan ini bernama " + burger.getterNama());

const jaket = new Orang("Jaket Denim", 3, "L");

jaket.informasi();
jaket.ukuranPakaian();
console.log("Pakaian ini bernama " + jaket.getterNama());


            //         Produk
            //         /   \
            //        /     \
            //       /       \
            //    Makanan      