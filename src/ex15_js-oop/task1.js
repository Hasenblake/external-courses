let Sweet = function(name) {
    this.sweetName = name;
};
Sweet.prototype.setZeroWeight = function () {
    this.weight = 0;
};

let Candy = function(name) {
    Sweet.apply(this, arguments);
    this.weight = 20;
    Object.setPrototypeOf(this, new Sweet);
};
let SweetBar = function(name) {
    Sweet.apply(this, arguments);
    this.weight = 40;
    Object.setPrototypeOf(this, new Sweet);
};

function SweetBox(sweets = [new Candy('Lion'), new SweetBar('Snickers'), new Candy('Dove')]) {
    const sweetCollection = sweets;
    sweetCollection.sort((a, b) => a.weight - b.weight);
    this.showWeight = function(){
        let weight = sweetCollection.reduce((value, boxItem) => value + boxItem.weight, 0);
        let allWeights = "";
        console.log('Box weight: ' + weight + ' g');
        for (let sweet of sweetCollection){
            allWeights += sweet.sweetName +': '+ sweet.weight + ', ';
        }
        console.log('Weights: ' + allWeights);
        return weight;
    };

    this.findName = function(name){
        for (let key of sweetCollection){
            if (key.sweetName === name){
                console.log(`${name} have number ${sweetCollection.indexOf(key)}`);
                return sweetCollection.indexOf(key);
            }
        }
        console.log(`${name} was not found`);
        return -1;
    };

    this.eat = function(sweetNum){
        sweetCollection[sweetNum].setZeroWeight();
    };
}