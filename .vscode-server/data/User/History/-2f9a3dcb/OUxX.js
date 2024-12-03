class WeatherStation {
    constructor() {
        this.devices = [];
        this.temperature = 0;
    }
    addDevice(device) {

    }
    removeDevice(device) {

    }
    updateTemperature(temp) {

    }
}

class Device {
    constructor(name) {
        this.name = name;
    }

    notify(temp) {
        console.log(`${this.name} menerima suhu baru: ${temp}`);
    }
}