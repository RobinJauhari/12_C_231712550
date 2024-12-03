class Logger {
    constructor() {
        if (!Logger.instance) {
            Logger.instance = this;
            this.logs = [];
        }
        return Logger.instance;
    }

    log(message) {
        
    }
}