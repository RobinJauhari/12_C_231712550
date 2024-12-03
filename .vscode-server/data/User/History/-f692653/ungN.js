class Memori {
    constructor(kapasitas, jenis) {
        this.kapasitas = kapasitas;
        this.jenis = jenis;
    }
}

class Komputer {
    constructor(merk, kapasitasMemori, jenisMemori) {
        this.merk = merk;
        this.memori1 = new Memori(kapasitasMemori, jenisMemori);
    }
    tampilkanSpesifikasi() {
        console.log("Spesifikasi Komputer:");
            console.log(`Merk: ${this.merk}`);
            console.log("Memori:");
            console.log(`- Kapasitas: ${this.memori.kapasitas}`);
            console.log(`- Jenis: ${this.memori.jenis}`);
        }
}

const komputer1 = new Komputer("Asus", "16GB", "DDR4");

komputer1.tampilkanSpesifikasi();
