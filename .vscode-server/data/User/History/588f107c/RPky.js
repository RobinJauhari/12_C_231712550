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
        console.log(`ID Pesanan: ${this.id}`);
        
    }
}