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
        const diskon = this.hitungDiskon();
        const ppn = this.HitungPPN();
        const hargaSetelahDiskon = this.hargaPokok - diskon;
        const hargaJual = hargaSetelahDiskon + ppn;

        console.log(`Nama Produk: ${this.nama}`);
        console.log(`Harga Pokok: Rp${this.hargaPokok}`);
        console.log(`Diskon: Rp${diskon}`);
        console.log(`Harga Setelah Diskon: Rp${hargaSetelahDiskon}`);
        console.log(`PPN: Rp${this.ppn}`);
        console.log(`Harga Jual Akhir: Rp${hargaJual}`);
        console.log("=============================");
    }

    hitungDiskon() {
        return this.hargaPokok * 0.1;
    }

    HitungPPN() {
        return this.hargaPokok * 0.11;
    }
}

const 