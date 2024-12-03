class PackageDelivery {
    constructor(id, weight, distance) {
        this.id = id;
        this.weight = weight;
        this.distance = distance;
    }

    calculate() {
        const baseRate = 1500;
        return this.weight * this.distance * baseRate;
    }
}

class PackageDeliveryPrinter {
    print(item) {
        const cost = this.calculate();
        console.log(`Mencetak label pengiriman
            Berat ${item.weight} kg
            Jarak ${item.distance} km
            Harga Rp.${cost}`);
    }
}

class PackageDeliveryDatabase {
    save(item) {
        console.log(`Menyimpan paket dengan id ${item.id} ke dalam database pengiriman...`);
    }
}

console.log(`SRP2_C_12550`);

const package1 = new PackageDelivery('C_12550', 10, 10);

package1.printDeliveryLabel();
package1.saveToDeliveryDatabase();


