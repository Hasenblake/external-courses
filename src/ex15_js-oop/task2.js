class Technics{
    constructor(name){
        this.techName = name;
        this.isOn = false;
    }
    turnOn(){
        this.isOn = true;
    }
}
class LowPowerTech extends Technics{
    constructor(name){
        super(name);
        this.power = (Math.random() * (1.5 - 0.1) + 0.1).toFixed(1);
    }
}
class HighPowerTech extends Technics{
    constructor(name){
        super(name);
        this.power = (Math.random() * (6 - 2) + 2).toFixed(1);
    }
}
class Room {
    constructor(){
        this.techCollection = [new HighPowerTech('Boiler'),
            new LowPowerTech('Dryer'), new HighPowerTech('Washer'), new LowPowerTech('Toaster')];
        this.techCollection[0].turnOn();
        this.techCollection[1].turnOn();
        this.techCollection[2].turnOn();
    }
    showTotalPower(){
        let totalPower = 0;
        for (let key of this.techCollection){
            if (key.isOn === true){
                totalPower += parseFloat(key.power);
            }
        }
        console.log('Total power: ' + totalPower.toFixed(1) + ' kV');

        return totalPower;
    };
    findName(name){
        for (let key of this.techCollection){
            if (key.techName === name){
                console.log(`${name} plugged into ${this.techCollection.indexOf(key)} socket`);
                return this.techCollection.indexOf(key);
            }
        }
        console.log(`${name}  was not found`);
        return -1;
    };
}


