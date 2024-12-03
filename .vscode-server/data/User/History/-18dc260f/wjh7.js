class Dokter {
    constructor(nama, spesialisasi) {
        this.nama = nama;
        this.spesialisasi = spesialisasi;
    }   
}

class Pasien {
    constructor(nama, usia) {
        this.nama = nama;
        this.usia = usia;
    }
}

class JadwalKonsultasi {
    constructor(dokter, pasien, waktuKonsultasi) {
        this.dokter = dokter;  // menyimpan objek Dokter
        this.pasien = pasien;  // menyimpan objek Pasien
        this.waktuKonsultasi = waktuKonsultasi;
    }

    tampilInformasi() {
        console.log(`${this.dokter.nama} berspesialisasi ${this.dokter.spesialisasi} sedang menangani pasien ${this.pasien.nama} berusia ${this.pasien.usia} tahun pada ${this.waktuKonsultasi}`);
    }
}

// Membuat objek
const dokter1 = new Dokter("Dr. Budi", "Kardiologi");
const pasien1 = new Pasien("Andi", 45);
const konsultasi1 = new JadwalKonsultasi(dokter1, pasien1, "10:00 Pagi, 5 Juni 2024");

// Menampilkan informasi
konsultasi1.tampilInformasi();