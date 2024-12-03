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

const station = new WeatherStation();
const phone = new Device("Phone");
const tablet = new Device("Tablet");

station.addDevice(phone);
station.addDevice(tablet);
station.updateTemperature(25);
station.removeDevice(phone);
station.updateTemperature(30);