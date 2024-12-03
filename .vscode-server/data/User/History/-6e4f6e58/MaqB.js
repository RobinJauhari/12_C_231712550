// Robin jauhari
// 231712550

class OrderFactory {
    createOrder(type, orderId, details) {
        switch(type === "dineIn") {
            case 'dinein':
                return new DineInOrder(orderId, details);
            case 'takeaway':
                return new TakeAwayOrder(orderId, details);
            default:
                throw new Error('Tipe pesanan tidak valid');
        }
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

