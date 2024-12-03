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

class Sepeda extends Kendaraan {
    bergerak() {
        console.log("Sepeda ini sedang bergerak.")
    }

    gantiGear() {
        console.log("Sepeda ini sedang di ganti gear.")
    }
}

const kendaraan = new Kendaraan();
const mobil = new Mobil();
const sepeda = new Sepeda();

kendaraan.bergerak();
kendaraan.berhenti();

console.log("===========================")

mobil.bergerak();
mobil.hidupkanMesin();
mobil.berhenti();

console.log("===========================")

sepeda.bergerak();
sepeda.gantiGear();
