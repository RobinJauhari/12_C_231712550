class Karyawan {
    constructor(nama, gajipokok, jabatan) {
        this.nama = nama;
        this.gajipokok = gajipokok;
        this.jabatan;
    }

    infoKaryawan() {
        console.log(`Nama: ${this.nama}`);
        console.log(`Jabatan: ${this.jabatan}`);
        console.log(`Pendapatan: ${this.hitungPendapatan()}`);
    }

    hitungPendapatan() {
        throw new Error("Metode 'hitungPendapatan()' harus diimplementasikan di kelas turunan.")
    }
}

class Staff extends Karyawan {
    constructor(nama, gajipokok, jabatan) {
        super();
        this.nama = nama;
        this.gajipokok = gajipokok;
        this.jabatan = jabatan;
    }

    hitungPendapatan() {
        return this.gajipokok * 30 + 500000
    }
}
