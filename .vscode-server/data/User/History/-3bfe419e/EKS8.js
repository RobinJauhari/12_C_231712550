class IBangunDatar {
    luas() {
        throw new Error("Metode luas() harus diimplementasikan.");
    }

    keliling() {
        throw new Error("Metode keliling() harus diimplementasikan.")
    }
}

class Persegi extends IBangunDatar {
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

class PersegiPanjang {
    constructor(panjang, lebar) {
        super();
        this.panjang = panjang;
        this.lebar = lebar;
    }

    
}
const persegi1 = new Persegi(5);
console.log("Luas Persegi:", persegi1.luas());
console.log("Keliling Persegi:", persegi1.keliling());