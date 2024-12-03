class Buku {
    #idBuku;
    #judul;

    constructor(idBuku, judul) {
        this.#idBuku = idBuku;
        this.#judul = judul;
    }
    
    judulbuku() {
        console.log(`Buku berjudul ${this.#judul}.`);        
    }

    getnama() {
        return this.#judul
    }
    
}

class Novel extends Buku {
    constructor(idBuku, judul, genre) {
        super(idBuku, judul, genre);
        this.genre = genre; 
    }

    informasinvl() {
        console.log(`Novel ini berjudul ${this.judul} dan bergenre ${this.genre}.`);
    }
}

class Komik extends Buku {
    constructor(idBuku, judul, jumlahHalaman) {
        super(idBuku, judul);
        this.jumlahHalaman = jumlahHalaman; 
    }

    informasikmk() {   
        console.log(`Komik ini berjudul ${this.judul} memiliki ${this.jumlahHalaman} halaman.`);
    }
}

class KisahTanahJawa extends Novel {
    #penerbit
    constructor(judul, genre, penerbit) {
        super(judul, genre);
        this.#penerbit = penerbit;
    }

    informasicrt () {
        console.log(`Novel bergenre ${this.genre} di terbitkan oleh ${this.#penerbit}.`);
    }
}

class Kartun extends Komik {
    #Illustrator
    constructor(judul, jumlahHalaman, Illustrator) {
        super(judul, jumlahHalaman);
        this.Illustrator = Illustrator;
    }

    informasikart() {
        console.log(`Komik di gambar oleh ${this.#Illustrator} dan memiliki ${this.jumlahHalaman} halaman. `)
    }
}

const 