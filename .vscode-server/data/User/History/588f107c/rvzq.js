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
        const total = order.calculateTotal() * 1.1; // Tambahkan 10% PPn
        console.log(`Order ID: ${order.id}`);
        console.log(`Customer: ${order.customerName}`);
        console.log('Items:');
        order.items.forEach(item => {
            console.log(`- ${item.item} (Qty: ${item.quantity}, Price: ${item.price})`);
        });
        console.log(`Total (with 10% tax): ${total.toFixed(2)}`);
    }
}

class ProcessOrder extends OrderOperation {
    perform(order) {
        order.status = 'Processed';
        console.log(`Order ${order.id} is now ${order.status}.`);
    }
}

class TrackOrder extends OrderOperation {
    perform(order) {
        console.log(`Order ${order.id} is currently ${order.status}.`);
    }
}

const order1 = new Order(1, 'Robin Jauhari', [
    { item: 'Nasi Goreng', quantity: 2, price: 25000 },
    { item: 'Es Teh', quantity: 1, price: 5000 }
]);

const printBill = new PrintBill();
const processOrder = new ProcessOrder();
const trackOrder = new TrackOrder();

console.log('--- Print Bill ---');
printBill.perform(order1);

console.log('--- Process Order ---');
processOrder.perform(order1);

console.log('--- Track Order ---');
trackOrder.perform(order1);
