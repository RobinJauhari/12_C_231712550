class Atlet {
    panggilLatihanAtlet() {
        console.log("Atlte sedang berlatih.");
    }
}

class Pelari extends Atlet {
    panggilLatihanAtlet() {
        console.log("Pelari sedang berlatih lari jarak jauh.");
    }
}

class Perenang extends Atlet {
    panggilLatihanAtlet() {
        console.log("Perenang sedang berlatih gaya bebas.")
    }
}

function panggilLatihanAtlet