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
        }   else if (args.length === 2) {
            return pinjam2(args[0], args[1]);
        }
    }
}

const restoran = new Restoran();
restoran.pesanMakanan("Nasi Goreng");
restoran.pesanMakanan("Pangeran Kecil", "Budi", "10 Agustus", "7 hari ");