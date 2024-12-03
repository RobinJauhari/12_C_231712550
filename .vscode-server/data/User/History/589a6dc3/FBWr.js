// Class untuk Database MySQL
class MySQL {
    constructor(host) {
        this.type = "MySQL";
        this.host = host;
    }

    connect() {
        console.log(`Connected to ${this.type} database at ${this.host}`);
    }
}

// Class untuk Database PostgreSQL
class PostgreSQL {
    constructor(host) {
        this.type = "PostgreSQL";
        this.host = host;
    }

    connect() {
        console.log(`Connected to ${this.type} database at ${this.host}`);
    }
}

// Factory untuk membuat instance database
class DatabaseFactory {
    static createDatabase(type, host) {
        if (type === "MySQL") {
            return new MySQL(host);
        } else if (type === "PostgreSQL") {
            return new PostgreSQL(host);
        } else {
            throw new Error("Unsupported database type");
        }
    }
}

// Singleton Class untuk ConnectionManager
class ConnectionManager {
    constructor() {
        if (!ConnectionManager.instance) {
            ConnectionManager.instance = this;
            this.connections = []; // Menyimpan semua koneksi
        }
        return ConnectionManager.instance;
    }

    createConnection(type, host) {
        const connection = DatabaseFactory.createDatabase(type, host);
        this.connections.push(connection);
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
