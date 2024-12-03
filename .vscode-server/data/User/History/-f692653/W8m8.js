class OrderFactory {
    createOrder(type, orderId, details) {
        switch(type) {
            case 'DineIn':
                return new DineIn(orderId, details);
            case 'TakeAway':
                return new TakeAway(orderId, details);
            default:
                throw new Error('Tipe pesanan tidak valid');
        }
    }
}

class DineIn {
    constructor(orderId, details) {
        this.type = "DineIn";
        this.orderId = orderId;
        this.details = {
            table: details.table,
            items: details.items.join(', ')
        };
    }
}

class TakeAway {
    constructor(orderId, details) {
        this.type = "TakeAway";
        this.orderId = orderId;
        this.details = {
            customerName: details.customerName,
            items: details.items.join(', ')
        };
    }
}

class OrderManager {
    constructor() {
        this.orders = [];
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(order) {
        this.observers.forEach(observer => observer.notify(order));
    }

    createOrder(order) {
        this.orders.push(order);
        this.notifyObservers(order);
        return order;
    }

    getOrders() {
        return this.orders;
    }
}

class Chef {
    constructor(name) {
        this.name = name;
    }

    notify(order) {
        console.log(`${this.name} received new order: ${JSON.stringify(order, null, 2)}`);
    }
}

class Cashier {
    constructor(name) {
        this.name = name;
    }

    notify(order) {
        console.log(`${this.name} received new order: ${JSON.stringify(order, null, 2)}`);
    }
}

const factory = new OrderFactory();
const manager = new OrderManager();

const chef = new Chef("Chef (Robin)\n");
const cashier = new Cashier("Chasier Lisa\n");

manager.addObserver(chef);
manager.addObserver(cashier);

const order1 = factory.createOrder("DineIn", "001", {
    table: 5,
    items: ["Pasta", "Salad"],
});

const order2 = factory.createOrder("TakeAway", "002", {
    customerName: "John",
    items: ["Burger"],
});

manager.createOrder(order1);
manager.createOrder(order2);

const orders = manager.getOrders();
console.log(orders);