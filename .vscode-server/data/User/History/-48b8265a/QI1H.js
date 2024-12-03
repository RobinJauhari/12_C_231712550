class Hewan {
    constructor(nama) {
    this.nama = nama;
    }
    
    suara() {
    console.log(`${this.nama} mengeluarkan suara.`);
    }
    }
    // Kelas Anak (Child Class)
    class Kucing extends Hewan {
    constructor(nama, ras) {
    super(nama); // Memanggil konstruktor kelas induk
    this.ras = ras;
    }
    
    keterangan() {
    console.log(`${this.nama} adalah seekor kucing ras ${this.ras}.`);
    }
    }
    
    // Kelas Anak Lainnya (Another Child Class)
    class Anjing extends Hewan {
    constructor(nama, jenis) {
    super(nama); // Memanggil konstruktor kelas induk
    this.jenis = jenis;
    }
    30    31 keterangan() {
    32 console.log(`${this.nama} adalah seekor anjing jenis ${this.jenis}.`);
    33 }
    34 }
    35
    36 // Membuat objek dari kelas anak
    37 const kucing1 = new Kucing("Tom", "Persia");
    38 kucing1.suara(); // Output: Tom mengeluarkan suara.
    39 kucing1.keterangan(); // Output: Tom adalah seekor kucing ras Persia.
    40
    41 const anjing1 = new Anjing("Spike", "Bulldog");
anjing1.suara(); // Output: Spike mengeluarkan suara.
anjing1.keterangan(); // Output: Spike adalah seekor anjing jenis Bulldog.
    