const IHitungDiskon = (Base) =>
    class extends Base {
        hitungDiskon() {
            throw new Error(
                "Metode 'hitungDiskon' harus diimplementasikan di kelas turunan."
            );
        }
    } 