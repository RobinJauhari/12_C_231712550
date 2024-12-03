class Hewan {
    constructor() {
        if (this.constructor === Hewan) {
            throw new Error(
                "Kelas abstrak 'Hewan' tidak bisa diinstansiasi secara langsung."
            );       
        }
    }

    bersuara() {
        throw new Error(
            "Metode abstrak 'bersuara' harus diimplementasikan oleh kelas turunan."
        );
    }

    berjalan() {
        throw new Error(
            "Metode abstrak 'berjalan' harus diimplementasikan oleh kelas turunan."
        );
    }

    deskripsi() {
        console.log("Ini adalah hewan.");
    }
}

class Kucing extends Hewan {
    bersuara() {
        console.log("Kucing ini mengeong.");
    }

    berjalan() {
        console.log("Kucing ini berjalan.");
    }
}

class Anjing extends Hewan {
    bersuara() {
        console.log("Anjing ini menggonggong.");
    }
}


