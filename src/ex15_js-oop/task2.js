class Device{
    constructor(name){
        this.techName = name;
        this.isTurnOn = false;
    }
    turnOn(){
        this.isTurnOn = true;
    }
}

class LowPowerDevice extends Device{
    constructor(name){
        super(name);
        this.power = 0.5;
    }
}

class HighPowerDevice extends Device{
    constructor(name){
        super(name);
        this.power = 5;
    }
}

class Room {
    constructor(devices = [new HighPowerDevice('Boiler'),
                           new LowPowerDevice('Toaster'),
                           new LowPowerDevice('Dryer')]){
        this.deviceCollection = devices;
        if (arguments.length === 0) {
            this.deviceCollection[0].turnOn(0);
            this.deviceCollection[1].turnOn(1);
        }
    }

    showTotalPower(){
        let totalPower = 0;
        for (let key of this.deviceCollection){
            if (key.isTurnOn === true){
                totalPower += key.power;
            }
        }
        console.log('Total power: ' + totalPower + ' kV');
        return totalPower;
    };

    findName(name){
        for (let key of this.deviceCollection){
            if (key.techName === name){
                console.log(`${name} plugged into ${this.deviceCollection.indexOf(key)} socket`);
                return this.deviceCollection.indexOf(key);
            }
        }
        console.log(`${name}  was not found`);
        return -1;
    };
}
