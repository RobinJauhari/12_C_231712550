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
console.log("[2]")

function buatMobil(roda, mesin, merek) {
    return {
    roda, mesin, merek, jumlahRoda() {
    return roda;
    }, ccMesin() {
    return mesin;
    },
    detailmobil(){
        console.log(`mobil ini merek ${this.merek}, memiliki ${this.roda} roda, dan kapasitas mesin ${this.mesin}`);
    }
    };
}
const mobil1 = buatMobil(4, '1000cc', 'Toyota');
const mobil2 = buatMobil(4, '1500cc', 'Toyota');
mobil2.detailmobil();

console.log('_'.repeat(25));
console.log("[3]")

const prototipeMobil = {
    jumlahRoda() {
    return this.roda;
    }, ccMesin() {
    return this.mesin;
    }
    };
    const mobil3 = Object.create(prototipeMobil);
    mobil3.roda = 3;
    mobil3.mesin = '900cc';
    mobil3.warna = 'merah';
    
    
    console.log(mobil3.jumlahRoda())
    console.log(mobil3.ccMesin())
