const IHitunganLuas = (Base) =>
    class extends Base {
        luas() {
            throw new Error(
                "Metode 'luas()' harus diimplementasikan di kelas turunan."
            );
        }
    };

const IHitungKeliling = (Base) =>
    class extends Base {
        keliling() {
            throw new Error(
                "Metode 'keliling()' harus diimplementasikan di kelas turunan."
            );
        }
    };

class Persegi extends IHitungKeliling(IHitunganLuas(Object)) {
    constructor(sisi) {
        super();
        this.sisi = sisi;
    }

    luas() {
        return this.sisi * this.sisi;
    }

    keliling() {
        return 4 * this.sisi;
    }
}

class PersegiPanjang extends IHitungKeliling(IHitunganLuas(Object)){
    constructor(panjang, lebar) {
        super();
        this.panjang = panjang;
        this.lebar = lebar;
    }

    luas() {
        return this.panjang * this.lebar;
    }

    keliling() {
        return 2 * (this.panjang * this.lebar);
    }
}

const persegi = new Persegi(5);
console.log("Luas Persegi:", persegi.luas());
console.log("Keliling Persegi:", persegi.keliling());

const persegi2 = new PersegiPanjang(2550, 2550);
console.log("Luas Persegi Panjang:", persegi2.luas());
console.log("Keliling Persegi Panjang:", persegi2.keliling());