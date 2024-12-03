class Kendaraan {
    bergerak() {
        console.log("Kendaraan ini sedang bergerak.")
    }

    berhenti() {
        console.log("Kendaraan ini sedang berhenti")
    }
}

class Mobil extends Kendaraan {
    bergerak() {
        console.log("Mobi")
    }
}