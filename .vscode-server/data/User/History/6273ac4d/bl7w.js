class Produk {
    #nama;

    constructor(nama, jumlah) {
        this.#nama = nama;
        this.jumlah = jumlah;
    }
    informasi() {
        console.log(`Produk ${this.#nama} ada sebanyak ${this.jumlah} pcs.`);
    }
}

class Makanan extends Produk {
    #expired;
    #nama;
    constructor(expired, nama, jumlah) {
        super(nama, jumlah);
        this.#nama = nama;
        this.#expired = expired;
    }
    waktuRusak() {
        console.log(`${this.#nama} akan rusak pada tanggal ${this.#expired}`);
    }
}

class Baju extends Produk {
    size;
    nama;
    constructor(nama, jumlah, size) {
        super(nama, jumlah);
        this.nama = nama;
        this.size = size;
    }
    ukuranPakaian() {
        console.log(`${this.nama} memiliki ukuran pakaian ${this.size}.`);
    }
}

const burger = new Makanan("25 September 2024", "BigMac", 1);

burger.informasi();
burger.waktuRusak();

const jaket = new Baju("Jaket Denim", 3, "L");

jaket.informasi();
jaket.ukuranPakaian();


