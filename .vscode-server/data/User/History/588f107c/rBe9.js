class Order {
    constructor(id, customername, items) {
        this.id = id;
        this.customername = customername;
        this.items = items;
        this.status = "Pending";
    }

    calculateTotal() {
        let total = 0;
        for (let i = 0; i < this.items.length; i++) {
            total += this.items[i].quantity * this.items[i].price;
        }
        return total;
    }
}

class OrderOperation {
    perform(order) {
        throw new Error("This method must be implemented by subclasses");
    }
}

class PrintBill extends OrderOperation {
    perform(order) {
        console.log(`ID Pesanan: ${order.id} \nCustomer: ${order.customername} `);
        order.items.forEach(item => {
        console.log(`${item.item} - Jumlah: ${item.quantity} - Harga: ${item.price}`);
        });
        const total = order.calculateTotal();
        const totalppn = total + total * 0.1
        console.log(`Total Harga setelah Ppn: ${totalppn}`);
    }
}

class ProcessOrder extends OrderOperation {
    perform(order) {
        console.log(`Status ID Pesanan ${order.id} sekarang adalah pending`)
    }
}

class TrackOrder extends OrderOperation {
    perform(order) {

    }
}



const order = new Order( 12550, "Robin", [
    { item: "Kopi Susu", quantity: 2, price: 10000 },
    { item: "Kue Lapis", quantity: 1, price: 4000}
]);

const printbill = new PrintBill();
const processorder = new ProcessOrder();
const trackOrder = new TrackOrder();

printbill.perform(order);
trackOrder.perform(order);
processorder.perform(order);
trackOrder.perform(order);