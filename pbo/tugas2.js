class Produk {
    _namaProduk;
    _harga;
    _jumlahStok;

    constructor(namaProduk, harga, jumlahStok)  {
        this._namaProduk = namaProduk;
        this._harga = harga;
        this._jumlahStok = jumlahStok;
    }

    beli() {
        this._jumlahStok++;
        console.log(`Produk ${this._namaProduk} telah dibeli!`);
    }

    jual() {
        if (this.cekStok()) {
            this._jumlahStok--;
            console.log(`Produk ${this._namaProduk} telah dijual!`);
        }
    }

    infoProduk() {
        console.log(`Produk: ${this._namaProduk}\nHarga: ${this._harga}\nJumlah Stok: ${this._jumlahStok}`);
    }
    
    cekStok() {
        if (this._jumlahStok > 0) {
            return true;
        } else {
            console.log(`Stok ${this._namaProduk} sedang tidak tersedia!`);
            return false;
        }
    }

    getNamaProduk() {
        return this._namaProduk;
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
        this.#Modal -= produk.getHarga();  
        produk.beli();
        console.log(`Stok Produk telah ditambahkan!`);
    }
}

class Sembako extends Produk {
    #jenis;
    constructor(nama,harga,jumlahStok){
        super(nama,harga,jumlahStok);
        this.#jenis = 'Sembako';
    }
    infoSembako(){
        this.infoProduk();
        console.log(`Jenis: ${this.#jenis}`)
    }
}

class Perabotan extends Produk{
    #jenis;
    constructor(nama,harga,jumlahStok){
        super(nama,harga,jumlahStok);
        this.#jenis = 'Perabotan';
    }
    infoPerabotan(){
        this.infoProduk();
        console.log(`Jenis: ${this.#jenis}`)
    }
}



const produk1 = new Produk("Buku", 10000, 10);
const produk2 = new Produk("Pulpen", 5000, 0);
const produk3 = new Sembako("Roti", 10000, 10);
const produk4 = new Perabotan("Panci", 10000, 10);

const pelanggan1 = new Pelanggan("Joko");
const kasir1 = new Kasir("Robin Jauhari", 231712550);

kasir1.jualProduk(produk1, pelanggan1);
kasir1.jualProduk(produk2, pelanggan1);
produk3.infoSembako();
produk4.infoPerabotan();    