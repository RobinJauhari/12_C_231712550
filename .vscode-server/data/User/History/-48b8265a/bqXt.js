class Hitung {

    berhitung(operasi, ...args) {
        if (operasi === "+") {
            return this.tambahOverload(...args);
        } else if (operasi === "-") {
            return this.kurangOverload(...args);
        }else {
            throw new Error("Simbol tidak didukung.");
        }
    }

    tambahOverload(...args) {
        var tambah1 = function (a, b) {
            return a + b;
        };
        var tambah2 = function (a, b, c) {
            return a + b + c;
        };
        var tambah3 = function (a, b, c, d,) {
            return a + b + c + d;
        };

        if (args.length === 2) {
            return tambah1(args[0], args[1]);
        } else if (args.length === 3) {
            return tambah2(args[0], args[1], args[2]);
        } else if (args.length === 4) {
            return tambah3(args[0], args[1], args[2], args[3]);
        }
    }

    kurangOverload(...args) {
    }
}