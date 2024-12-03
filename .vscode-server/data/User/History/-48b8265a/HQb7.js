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
    
    keterangan() {
    console.log(`${this.nama} adalah seekor anjing jenis ${this.jenis}.`);
    }
    }
    
    // Membuat objek dari kelas anak
    const kucing1 = new Kucing("Tom", "Persia");
    kucing1.suara(); // Output: Tom mengeluarkan suara.
    kucing1.keterangan(); // Output: Tom adalah seekor kucing ras Persia.
    
    const anjing1 = new Anjing("Spike", "Bulldog");
anjing1.suara(); // Output: Spike mengeluarkan suara.
anjing1.keterangan(); // Output: Spike adalah seekor anjing jenis Bulldog.
    