class Terbang {
    terbang() {
        throw new Error("Fungsi 'terbang()' harus diimplementasikan");
    }
}

class Berenang {
    berenang() {
        throw new Error("Fungsi 'berenang()' harus diimplementasikan");
    }
}

class Berburu {
    berburu() {
        throw new Error("Fungsi 'berburu()' harus diimplementasikan");
    }
}

class Hewan {
    constructor(nama) {
        this.nama = nama;
    }

    suara() {
        console.log(`${this.nama} membuat suara!`);
    }
}

class Burung extends Hewan {
    constructor(nama) {
        this.nama = nama;
    }

    suara() {
        console.log(`${this.nama} membuat suara!`);
    }

    terbang() {
        console.log(`${this.nama} sedang terbang!`);
    }
}

class Harimau extends Hewan {
    constructor(nama) {
        this.nama = nama;
    }

    suara() {
        console.log(`${this.nama} membuat suara!`);
    }

    berburu() {
        console.log(`${this.nama} sedang berburu!`);
    }
}

class Paus extends Hewan {
    constructor(nama) {
        this.nama = nama;
    }

    suara() {
        console.log(`${this.nama} membuat suara!`);
    }

    berenang() {
        console.log(`${this.nama} sedang berenang!`);
    }
}

const burung = new Burung("Elang");
const harimau = new Harimau("Harimau Sumatra");
const paus = new Paus("Paus Biru");

burung.suara();
burung.terbang();

harimau.suara();
harimau.berburu();

paus.suara();
paus.berenang();