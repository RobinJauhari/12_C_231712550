console.log("231712550")
console.log("Kelas: C")
console.log('_'.repeat(25));
console.log("[1]")

class Kucing {
    constructor(nama, warna) {
    this.nama = nama;
    this.warna = warna;
    }
    perkenalan() {
    console.log(`Halo, nama saya ${this.nama} dan saya berwarna ${this.warna}`);
    }
}
const kucing1 = new Kucing("Tom", "Hitam");
const kucing2 = new Kucing("Jerry", "Putih");
kucing1.perkenalan();
kucing2.perkenalan();

console.log('_'.repeat(25));
console.log("[1]")

function buatMobil(roda, mesin, merek) {
    return {
    roda, mesin, merek, jumlahRoda() {
    return roda;
    }, ccMesin() {
    return mesin;
    },
    detailmobil(){
        console.log(`mobil ini merek ${this.merek}, memiliki ${this.roda} roda, dan kapasitas mesin ${this.mesin}`)
    }
    };
    }
    const mobil1 = buatMobil("Toyota", 4, '1500cc');
    console.log(mobil1.detailmobil())
    console.log(mobil1.jumlahRoda())
    console.log(mobil1.ccMesin())