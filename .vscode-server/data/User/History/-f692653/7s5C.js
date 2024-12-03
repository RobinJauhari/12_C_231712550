class Restoran {

    pesanMakanan(...args) {
        var namaMakanan = function (makanan) {
            return console.log(`Makanan dengan nama '${makanan}' tidak tersedia.`);
        };

        var namaPesanan = function (makanan, pemesan) {
            return console.log(`Pesanan telah diterima: '${makanan}' untuk ${pemesan}.`);
        };

        if (args.length === 1) {
            return pinjam1(args[0]);
        }   else if (args.length === 4) {
            return pinjam2(args[0], args[1], args[2], args[3]);
        }
    }
}

const perpustakaan = new Perpustakaan();
perpustakaan.pinjamBuku("Harry Potter", "Anita");
perpustakaan.pinjamBuku("Pangeran Kecil", "Budi", "10 Agustus", "7 hari ");