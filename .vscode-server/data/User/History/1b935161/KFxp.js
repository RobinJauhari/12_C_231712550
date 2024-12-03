const IHitungDiskon = (Base) =>
    class extends Base {
        hitungDiskon() {
            throw new Error(
                "Metode 'hitungDiskon' harus diimplementasikan di kelas turunan."
            );
        }
    };

const IHitungPPN = (Base) =>
    class extends Base {
        HitungPPN() {
            throw new Error(
                "Metode 'HitungPPN' harus diimplementasikan di kelas turunan."
            );
        }
    };

class Produk extends IHitungPPN(IHitungDiskon(Object)) {
    constructor(nama, hargaPokok) {
        super();
        this.nama = nama;
        this.hargaPokok = hargaPokok;
    }

    infoProduk() {
        const diskon = this.
    }
}