class PackageDelivery {
    constructor(id, weight, distance) {
        this.id = id;
        this.weight = weight;
        this.distance = distance;
    }

    calculateDeliveryCost() {
        const baseRate = 1500;
        return this.weight * this.distance * baseRate;
    }
}

class PackageDeliveryPrinter {
    printDeliveryLabel() {
        const cost = this.calculateDeliveryCost();
        console.log(`Mencetak label pengiriman
            Berat ${this.weight} kg
            Jarak ${this.distance} km
            Harga Rp.${cost}`);
    }
}
    saveToDeliveryDatabase() {
        console.log(`Menyimpan paket dengan id ${this.id} ke dalam database pengiriman...`);
    }


console.log(`SRP1_C_12550`);

const package1 = new PackageDelivery('C_12550', 10, 10);

package1.printDeliveryLabel();
package1.saveToDeliveryDatabase();


