class MataPelajaran {
    constructor(nama) {
        this.nama = nama;
    }
}

class Guru {
    constructor(namaGuru) {
        this.namaGuru = namaGuru;
        this.MataPelajaran = [];
    }
    tambahkanMataPelajaran(mataPelajaran) {
        this.mataPelajaran.push(mataPelajaran);
    }
    tampilkanInfo() {
        console.log(`Guru: ${this.namaGuru}`);
        console.log("Mata Pelajaran yang diajarkan:");
        this.mataPelajaran.for
    }
}