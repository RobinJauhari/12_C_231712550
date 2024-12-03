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
        this.mataPelajaran.forEach(mp => console.log(`- ${mp.nama}`));
    }
}

class Sekolah {
    constructor(namaSekolah) {
        this.namaSekolah = namaSekolah;
        this.daftarGuru = [];
    }

    tambahkanGuru(guru) {
        this.daftarGuru.push(guru);
    }
    tampilkanDaftarGuru() {
        console.log(`Sekolah: ${this.namaSekolah}`);
        this.daftarGuru.forEach(guru => guru.tampilkanInfo());
    }
}

