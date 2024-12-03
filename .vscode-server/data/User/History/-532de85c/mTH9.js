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
        console.log("Mobi ini sedang bergerak.")
    }

    hidupkanMesin() {
        console.log("Mobil ini sedang di hidupkan")
    }
}