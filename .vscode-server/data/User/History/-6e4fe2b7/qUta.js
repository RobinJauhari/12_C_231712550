// Robin jauhari
// 231712550

class Database {
    constructor(type, host) {
        this.type = type;
        this.host = host;
    }

    connect() {
        console.log(`Connecting to ${this.type} database at ${this.host}`);
    }
}

class MySQLDatabase extends Database {
    constructor(host) {
        super('MySQL', host);
    }
}

class PostgreSQLDatabase extends Database {
    constructor(host) {
        super('PostgreSQL', host);
    }
}

// Database Factory
class DatabaseFactory {
    createDatabase(type, host) {
        switch(type) {
            case 'MySQL':
                return new MySQLDatabase(host);
            case 'PostgreSQL':
                return new PostgreSQLDatabase(host);
            default:
                throw new Error('Tipe database tidak didukung');
        }
    }
}

// Connection Manager dengan Singleton
class ConnectionManager {
    constructor() {
        if (ConnectionManager.instance) {
            return ConnectionManager.instance;
        }
        
        this.connections = [];
        this.databaseFactory = new DatabaseFactory();
        ConnectionManager.instance = this;
    }

    createConnection(type, host) {
        try {
            const database = this.databaseFactory.createDatabase(type, host);
            this.connections.push(database);
            return database;
        } catch (error) {
            console.error(error.message);
            return null;
        }
    }

    getConnections() {
        return this.connections;
    }
}

// Contoh Penggunaan
const manager = new ConnectionManager();
manager.createConnection("MySQL", "localhost");
manager.createConnection("PostgreSQL", "127.0.0.1");

const connections = manager.getConnections();
connections.forEach(conn => conn.connect());

console.log(connections);


