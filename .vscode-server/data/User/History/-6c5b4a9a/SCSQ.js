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
    constructor(dokter, spesialisasi, pasien, usia, WaktuKonsultasi) {
        this.dokter = dokter;
        this.spesialisasi = spesialisasi;
        this.pasien = pasien;
        this.usia = usia;
        this.WaktuKonsultasi = WaktuKonsultasi;
    }

    tampilInformasi() {
        console.log(``)
    }
}

const dokter1 = new Dokter("Dr. Budi", "Kardiologi");
const pasien1 = new Pasien("Andi", 45);
const konsultasi1 = new JadwalKonsultasi(dokter1, pasien1, "10:00 Pagi, 5 Juni 2024");

konsultasi1.ta