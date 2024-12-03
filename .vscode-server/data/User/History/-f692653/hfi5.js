class Hewan {
    suara() {
        console.log("Hewan ini membuat suara.");
    }
}

class Anjing extends Hewan {
    suara() {
        console.log("Anjing menggonggong: Woof woof!");
    }
}

class Kucing extends Hewan {
    suara() {
        console.log("Kucing mengiau: Meow meow!");
    }
}

function panggilSuaraHewan(hewan) {
    hewan.suara();
}

const anjing = new Anjing();
const kucing = new Kucing();