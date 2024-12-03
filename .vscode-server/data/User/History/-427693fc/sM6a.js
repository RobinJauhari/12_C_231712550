class Buku {
    #idBuku;
    #judul;

    constructor(idBuku, judul) {
        this.#idBuku = idBuku;
        this.#judul = judul;
    }
    
    judulbuku() {
        console.log(`Buku berjudul ${this.#judul} memiliki ID Buku ${this.#idBuku}.`);        
    }

    getnama() {
        return this.#judul
    }
    
}
