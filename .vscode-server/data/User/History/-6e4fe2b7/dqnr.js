// Robin jauhari
// 231712550

class ConnectionManager {
    constructor() {
        if (ConnectionManager.instance) {
            return ConnectionManager.instance;
        }
        ConnectionManager.instance = this;
        this.connections = [];
    }

    createConnection(type, host) {
        const factory = new DatabaseFactory();
        const connection = factory.createDatabase(type, host);
        this.connections.push(connection);
        return connection;
    }

    getConnections() {
        return this.connections;
    }
}
class MySQL {
    constructor(host) {
        this.type = "MySQL";
        this.host = host;
    }

    connect() {
        console.log(`Connecting to ${this.type} to ${this.host}`);
    }
}
class PostgreSQL {
    constructor(host) {
        this.type = "PostgreSQL";
        this.host = host;
    }

    connect() {
        console.log(`Connecting to ${this.type} to ${this.host}`);
    }
}
class DatabaseFactory {
    createDatabase(type, host) {
        if (type === "MySQL") {
            return new MySQL(host);
        } else if (type === "PostgreSQL") {
            return new PostgreSQL(host);
        } else {
            throw new Error("Invalid database");
        }
    }
}

const manager = new ConnectionManager();
manager.createConnection("MySQL", "localhost");
manager.createConnection("PostgreSQL", "127.0.0.1");

const connections = manager.getConnections();
connections.forEach(conn => conn.connect());

console.log(connections);


