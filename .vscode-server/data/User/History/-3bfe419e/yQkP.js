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

class PersegiPanjang extends IBangunDatar{
    constructor(panjang, lebar) {
        super();
        this.panjang = 2550;
        this.lebar = 2550;
    }

    luas() {
        return this.panjang * this.lebar;
    }

    keliling() {
        return 2 * (this.panjang * this.lebar);
    }
}

const persegi1 = new Persegi(5);
console.log("Luas Persegi:", persegi1.luas());
console.log("Keliling Persegi:", persegi1.keliling());

const persegi2 = new Persegi(5);
console.log("Luas Persegi:", persegi1.luas());
console.log("Keliling Persegi:", persegi1.keliling());



 

