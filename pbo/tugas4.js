class Hewan {
    suara() {
        console.log("Hewan ini sedang bersuara.");
    }

    berjalan() {
        console.log("Hewan ini berjalan.");
    }
}

class Burung extends Hewan {
    suara() {
        console.log("Burung sedang bersuara: Cuit Cuit!");
    }

    terbang() {
        console.log("Burung ini terbang!");
    }
}

class Lele extends Hewan {
    suara() {
        console.log("Lele sedang bersuara: Blebek Blebek!");
    }

    berenang() {
        console.log("Lele ini berenang!");
    }
}

const hewan = new Hewan();
const burung = new Burung();
const lele = new Lele();

hewan.suara();
hewan.berjalan();
console.log("============================");
burung.suara();
burung.berjalan();
burung.terbang();
console.log("============================");
lele.suara();
lele.berenang();