// Robin jauhari
// 231712550

class OrderFactory {
    createOrder(type, orderId, details) {
        switch(type === "DineIn") {
            case 'DineIn':
                return new DineInOrder(orderId, details);
            case 'TakeAway':
                return new TakeAwayOrder(orderId, details);
            default:
                throw new Error('Tipe pesanan tidak valid');
        }
    }
}

class DineIn {
    constructor(orderId, details) {
        this.type = "DineIn";
        this.orderId = orderId;
        this.details = details;
    }
}

class TakeAway {
    constructor(orderId, details) {
        this.type = "TakeAway";
        this.orderId = orderId;
        this.details = details;
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
        console.log(`${this.name} received new order: ${JSON.stringify(order)}`);
    }
}

class Cashier {
    constructor(name) {
        this.name = name;
    }

    notify(order) {
        console.log(`${this.name} received new order: ${JSON.stringify(order)}`);
    }
}

const factory = new OrderFactory();
const manager = new OrderManager();

const chef = new Chef("Chef (Robin)\n");
const cashier = new Cashier("Chasier Lisa\n");

manager.addObserver(chef);
manager.addObserver(cashier);

const order1 = factory.createOrder("Dinein", "001", {
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

