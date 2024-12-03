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

    getjudul() {
        return this.#judul
    }
    
}

class Novel extends Buku {
    constructor(idBuku, judul, genre) {
        super(idBuku, judul, genre);
        this.genre = genre; 
    }

    informasinvl() {
        console.log(`Novel ini berjudul ${this.getjudul()} dan bergenre ${this.genre}.`);
    }
}

class Komik extends Buku {
    constructor(idBuku, judul, jumlahHalaman) {
        super(idBuku, judul);
        this.jumlahHalaman = jumlahHalaman; 
    }

    informasikmk() {   
        console.log(`Komik ini berjudul ${this.getjudul()} memiliki ${this.jumlahHalaman} halaman.`);
    }
}

class Kisah extends Novel {
    #tahunterbit
    constructor(idBuku, judul, genre, tahunterbit) {
        super(idBuku, judul, genre);
        this.#tahunterbit = tahunterbit;
    }

    informasicrt () {
        console.log(`Novel bergenre ${this.genre} terbit tahun ${this.#tahunterbit}.`);
    }
}

class Kartun extends Komik {
    #Illustrator
    constructor(idBuku, judul, jumlahHalaman, Illustrator) {
        super(idBuku, judul, jumlahHalaman, Illustrator);
        this.#Illustrator = Illustrator;
    }

    informasikart() {
        console.log(`Komik di gambar oleh ${this.#Illustrator} dan memiliki ${this.jumlahHalaman} halaman. `)
    }
}

const buku1 = new Kisah(2550, "Kisah Tanah Jawa", "Horor", 1945 )
buku1.judulbuku();
buku1.informasinvl();
buku1.informasicrt();

const buku2 = new Kartun(2550, "One Piece", 1000, "Oda")
buku2.judulbuku();
buku2.informasikmk();
buku2.informasikart();

console.log(``)
// console.log(buku1.#judul);