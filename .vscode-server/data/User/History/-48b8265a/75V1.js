class Hewan {
    constructor(nama) {
    4 this.nama = nama;
    5 }
    6
    7 suara() {
    8 console.log(`${this.nama} mengeluarkan suara.`);
    9 }
    10 }
    11
    12 // Kelas Anak (Child Class)
    13 class Kucing extends Hewan {
    14 constructor(nama, ras) {
    15 super(nama); // Memanggil konstruktor kelas induk
    16 this.ras = ras;
    17 }
    18
    19 keterangan() {
    20 console.log(`${this.nama} adalah seekor kucing ras ${this.ras}.`);
    21 }
    22 }
    23
    24 // Kelas Anak Lainnya (Another Child Class)
    25 class Anjing extends Hewan {
    26 constructor(nama, jenis) {
    27 super(nama); // Memanggil konstruktor kelas induk
    28 this.jenis = jenis;
    29 }
    30
    31 keterangan() {
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
    