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
        return this.gajipokok * 30 + 500000;
    }
}

class Manager extends Karyawan {
    constructor(nama, gajipokok, jabatan) {
        super();
        this.nama = nama;
        this.gajipokok = gajipokok;
        this.jabatan = jabatan;
    }
     hitungPendapatan() {
        return this.gajipokok * 30 + 1000000;
     }
}

const manager = new Manager("Nama_Mahasiswa", 3000000);
const staff = new Staff("Nama_Teman", 2000000);

console.log("\n==============================");
console.log("\tInformasi Karyawan");
manager.infoKaryawan();
console.log("===============================");

console.log("===============================");
console.log("\tInformasi Karyawan");
staff.infoKaryawan();
console.log("===============================");
