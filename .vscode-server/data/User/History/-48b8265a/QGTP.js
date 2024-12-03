class Berren{
    #nama
    constructor(nama, gender, umur){
        this.#nama = nama;
        this.gender = gender;
        this.umur = umur;
    }
    birahi() {
        console.log(`${this.#nama} suka dengan ${this.gender} berumur ${this.umur} tahun`);
    }
}
const Berren1 = new Berren ("berren", "wanita", "10");
Berren1.birahi();`````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
