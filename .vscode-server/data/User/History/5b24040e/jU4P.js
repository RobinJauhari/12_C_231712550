class Hewan {
    constructor() {
        if (this.constructor === Hewan) {
            throw new Error(
                "Kelas abstrak 'Hewan' tidak bisa diinstansiasi secara langsung."
            );       
        }
    }
}