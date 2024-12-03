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