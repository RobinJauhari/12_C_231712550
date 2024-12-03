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
            console.log(`Komputer Merk: ${this.merk}`);
            console.log("Jenis Memori:");
            console.log(`- Kapasitas: ${this.memori1.kapasitas}`);
            console.log(`- Jenis: ${this.memori1.kapasitas}`);
        }
}

const komputer1 = new Komputer("Lenovo", "16GB", "DDR7");

komputer1.tampilkanSpesifikasi();
