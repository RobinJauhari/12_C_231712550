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
        const 
        console.log(`Total Harga setelah Ppn: ${total.}`);
    }
}

class ProcessOrder extends OrderOperation {
    perform(order) {
        console.log(``)
    }
}



const order = new Order( 12550, "Robin", [
    { item: "Kopi Susu", quantity: 2, price: 10000 },
    { item: "Kue Lapis", quantity: 1, price: 4000}
]);
