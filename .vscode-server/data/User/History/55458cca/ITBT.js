class Atlet {
    latihan() {
        console.log("Atlte sedang berlatih.");
    }
}

class Pelari extends Atlet {
    latihan() {
        console.log("Pelari sedang berlatih lari jarak jauh.");
    }
}

class Perenang extends Atlet {
    latihan() {
        console.log("Perenang sedang berlatih gaya bebas.")
    }
}

function panggilLatihanAtlet(atlet) {
    atlet.latihan();
}

const pelari = new Pelari