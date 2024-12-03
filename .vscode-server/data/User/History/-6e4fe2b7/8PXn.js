// Robin jauhari
// 231712550
class MySQL {
    constructor(host) {
        this.type = "MySQL";
        this.host = host;
    }

    connect() {
        console.log(`Connect`)
    }
}

const manager = new ConnectionManager();
manager.CreateConnection("MySQL", "localhost");
manager.CreateConnection("PostgreSQL", "127.0.0.1");

const connections = manager.getConnections();
connections.forEach(conn => conn.connect());

console.log(connections);
