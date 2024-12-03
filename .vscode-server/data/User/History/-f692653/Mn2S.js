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
}


