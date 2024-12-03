class Logger {
    constructor() {
        if (!Logger.instance) {
            Logger.instance = this;
            this.logs = [];
        }
        return Logger.instance;
    }

    log(message) {
        const timestamp = new Date().toISOString(); // Menambahkan timestamp
        this.logs.push(`[${timestamp}] ${message}`); // Menyimpan log dengan timestamp
        console.log(`[LOG]: ${message}`); // Menampilkan log di konsol (opsional)
    }

    getLogs() {
        return this.logs; // Mengembalikan array log
}

const logger1 = new Logger();
logger1.log("Aplikasi dimulai");
const logger2 = new Logger();
logger2.log("Pengguna login");

console.log(logger1 === logger2);
console.log(logger1.getLogs());
