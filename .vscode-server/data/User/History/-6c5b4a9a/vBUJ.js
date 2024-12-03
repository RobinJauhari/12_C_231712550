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
    constructor(nama,pasien,WaktuKonsultasi) {
        this.nama = nama;
        this.pasien = pasien;
        this.WaktuKonsultasi = WaktuKonsultasi;
    }

    tampilInformasi() {
        console.log(`${this.nama} berspesialisasi ${this.spesialisasi} sedang menagani pasien ${this.pasien.nama} berusia ${this.pasien.usia} pada pukul ${this.WaktuKonsultasi}`)
    }
}

const dokter1 = new Dokter("Dr. Budi", "Kardiologi");
const pasien1 = new Pasien("Andi", 45);
const konsultasi1 = new JadwalKonsultasi(dokter1, pasien1, "10:00 Pagi, 5 Juni 2024");

konsultasi1.tampilInformasi();