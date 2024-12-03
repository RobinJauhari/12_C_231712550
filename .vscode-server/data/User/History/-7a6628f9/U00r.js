class Produk {
    #namaProduk;
    #harga;
    #jumlahStok;

    constructor(namaProduk, harga, jumlahStok)  {
        this.#namaProduk = namaProduk;
        this.#harga = harga;
        this.#jumlahStok = jumlahStok;
    }

    beli() {
        this.jumlahStok++;
        console.log(`Produk ${this.#namaProduk} telah dibeli!`)
    }

    jual() {
        this.jumlahStok--;
        console.log(`Produk ${this.#namaProduk} telah dijual!`)
    }

    infoProduk() {
        console.log(`Produk: ${this.#namaProduk}\nHarga: ${this.#harga}\nJumlah Stok: ${this.#jumlahStok}`)
    }
    
    cekStok() {
        if (this.#jumlahStok > 0) {
            return true;
        } else {
            console.log(`Stok ${this.#namaProduk} sedang tidak tersedia!`);
            return false;
        }
    }
}


class Kasir {
    #nama;
    #id;

    constructor(nama, id) {
        this.#nama = nama;
        this.#id = id;
    }

    infoKasir() {
        console.log(`Kasir ${this.#nama}, ID: ${this.#id}`);
    }

    jualProduk(produk, pelanggan) {
        produk.jual();
        console.log(`Transaksi: oleh Pelanggan ${pelanggan.getNama()}`);
    }
}

class Pelanggan {
    #nama;

    constructor(nama)   {
        this.#nama = nama;
    }

    getNama() {
        return this.#nama;
    }
}

class Toko {
    #NamaToko;
    #Modal;
    
    constructor(NamaToko)    {
        this.#NamaToko = NamaToko;
        this.#Modal = 500000;
    }

    InfoToko() {
        console.log(`Toko ${this.#NamaToko} memiliki modal sebesar ${this.#Modal}`);
    }

    beliProduk(produk) {
        this.#Modal -= Produk.harga;
        produk.beli();
        console.log(`Stok Produk telah ditambahkan!`);
    }
}
let produk1 = new Produk("Pensil", 1000, 10);
// let kasir1 = new Kasir("Robin Jauhari", 231712550);
let Pelanggan1 = new Pelanggan("Mega");
let Toko1 = new Toko("FaizGacor88");
let kasir2 = new Kasir("Robin Jauhari", 231712550)
kasir2.infoKasir();
kasir2.id = 999;
kasir2.infoKasir();
// kasir1.infoKasir();
produk1.beli();
produk1.jual();
produk1.infoProduk();
Toko1.InfoToko();

const produk1 = new