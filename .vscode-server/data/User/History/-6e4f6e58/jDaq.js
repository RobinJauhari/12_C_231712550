// Robin jauhari
// 231712550

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
const order2 = factory.createOrder
