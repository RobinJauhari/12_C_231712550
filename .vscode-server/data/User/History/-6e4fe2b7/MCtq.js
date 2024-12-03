// Robin jauhari
// 231712550
class 

const manager = new ConnectionManager();
manager.CreateConnection("MySQL", "localhost");
manager.CreateConnection("PostgreSQL", "127.0.0.1");

const connections = manager.getConnections();
connections.array.forEach(conn => conn.connect());

console.log(connections);
