// Robin jauhari
// 231712550


class ConnectionManager {
    constructor() {
        if (!ConnectionManager.instance) {
            ConnectionManager.instance = this;
            this.logs = []; // Inisialisasi array untuk menyimpan koneksi
        }
        return ConnectionManager.instance;
    }

    createConnection(message) {
        // Memastikan message adalah objek dengan type dan host
        if (!message.type || !message.host) {
            throw new Error("Message must include 'type' and 'host' properties.");
        }
        // Menambahkan koneksi ke logs
        const connection = { 
            type: message.type, 
            host: message.host, 
            connect: () => console.log(`Connecting to ${message.type} at ${message.host}...`) 
        };
        this.logs.push(connection); // Menyimpan ke logs
        return connection;
    }

    getConnection() {
        return this.logs; // Mengembalikan daftar koneksi
    }
}

// Membuat instance tunggal dari ConnectionManager
const manager = new ConnectionManager();

// Menambahkan koneksi dengan menggunakan parameter message
manager.createConnection({ type: "MySQL", host: "localhost" });
manager.createConnection({ type: "PostgreSQL", host: "127.0.0.1" });

// Mendapatkan semua koneksi dan memanggil method connect
const connections = manager.getConnection();
connections.forEach(conn => conn.connect());

// Menampilkan semua koneksi
console.log(connections);