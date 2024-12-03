class MataPelajaran {
    constructor(nama) {
        this.nama = nama;
    }
}

class Guru {
    constructor(namaGuru) {
        this.namaGuru = namaGuru;
        this.mataPelajaran = [];
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

const sekolah1 = new Sekolah("SMA 4")
const guru1 = new Guru("Pak Erlan");
const guru2 = new Guru("Bu yeni");
const matapelajaran1 = new MataPelajaran("IPA");
const matapelajaran2 = new MataPelajaran("IPS");
const matapelajaran3 = new MataPelajaran("BINDO");
const matapelajaran4 = new MataPelajaran("BIOLOGI");

sekolah1.tambahkanGuru(guru1);
sekolah1.tambahkanGuru(guru2);
guru1.tambahkanMataPelajaran(matapelajaran1);
guru1.tambahkanMataPelajaran(matapelajaran2);
guru2.tambahkanMataPelajaran(matapelajaran3);
guru2.tambahkanMataPelajaran(matapelajaran4);

sekolah1.tampilkanDaftarGuru();
