// Robin jauhari
// 231712550

const factory = new OrderFactory();
const manager = new OrderManager();

const chef = new Chef("Chef (NAMA KALIAN)\n");
manager.CreateConnection("MySQL", "localhost");
manager.CreateConnection("PostgreSQL", "127.0.0.1");
