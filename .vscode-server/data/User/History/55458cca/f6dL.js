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
        this.#jumlahStok++;
        console.log(`Produk ${this.#namaProduk} telah dibeli!`);
    }

    jual() {
        if (this.cekStok()) {
            this.#jumlahStok--;
            console.log(`Produk ${this.#namaProduk} telah dijual!`);
        }
    }

    infoProduk() {
        console.log(`Produk: ${this.#namaProduk}\nHarga: ${this.#harga}\nJumlah Stok: ${this.#jumlahStok}`);
    }
    
    cekStok() {
        if (this.#jumlahStok > 0) {
            return true;
        } else {
            console.log(`Stok ${this.#namaProduk} sedang tidak tersedia!`);
            return false;
        }
    }

    getNamaProduk() {
        return this.#namaProduk;
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
        console.log(`Transaksi: Oleh Pelanggan ${pelanggan.getNama()}`);
        if (produk.cekStok()) {
            produk.jual();
        }
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
        this.#Modal -= produk.getHarga();  // Mengurangi modal dengan harga produk
        produk.beli();
        console.log(`Stok Produk telah ditambahkan!`);
    }
}

// Variabel harus konsisten
const produk1 = new Produk("Buku", 10000, 10);
const produk2 = new Produk("Pulpen", 5000, 0);

const pelanggan1 = new Pelanggan("Joko");
const kasir1 = new Kasir("Robin Jauhari", 231712550);

// Tes jual produk (posisi argumen produk dan pelanggan telah dibalik)
kasir1.jualProduk(produk1, pelanggan1);
kasir1.jualProduk(produk2, pelanggan1);
