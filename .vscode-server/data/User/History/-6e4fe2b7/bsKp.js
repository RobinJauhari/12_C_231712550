// Robin jauhari
// 231712550

class ConnectionManager {
    constructor() {
        if (!ConnectionManager.instance) {
            ConnectionManager.instance = this;
            this.logs = []; 
        }
        return ConnectionManager.instance;
    }

    createConnection(message) {
        if (!message.type || !message.host) {
            throw new Error("Message must include 'type' and 'host' properties.");
        }
        const connection = { 
            type: message.type, 
            host: message.host, 
            connect: () => console.log(`Connecting to ${message.type} at ${message.host}...`) 
        };
        this.logs.push(connection); 
        return connection;
    }

    getConnection() {
        return this.logs; 
    }
}

const manager = new ConnectionManager();

manager.createConnection({ type: "MySQL", host: "localhost" });
manager.createConnection({ type: "PostgreSQL", host: "127.0.0.1" });

const connections = manager.getConnection();
connections.forEach(conn => conn.connect());

console.log(connections);
