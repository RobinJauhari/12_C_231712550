class Hitung {

    berhitung(operasi, ...args) {
        return this.tambahOverload(...args);
    } else if (operasi === "") {
        return this.kurangOverload(...args);
    }else {
        throw new Error("Simbol tidak didukung.");
    }
}