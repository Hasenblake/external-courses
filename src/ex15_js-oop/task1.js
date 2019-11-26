let Sweet = function(name) {
    this.sweetName = name;
};
Sweet.prototype.getEaten = function () {
    this.weight = 0;
};

let Candy = function(name) {
    Sweet.apply(this, arguments);
    this.weight = Math.round(Math.random() * (25 - 15) + 15);
};
Candy.prototype = Object.create(Sweet.prototype);
let SweetBar = function(name) {
    Sweet.apply(this, arguments);
    this.weight = Math.round(Math.random() * (40 - 30) + 30);
};
SweetBar.prototype = Object.create(Sweet.prototype);

function SweetBox() {
    const sweetCollection = [new Candy('Lion'), new SweetBar('Snickers'), new Candy('Dove')];
    sweetCollection.sort((a, b) => {
        return a.weight - b.weight;
    });
    this.showWeight = function(){
        let weight = sweetCollection.reduce((value, boxItem) => value + boxItem.weight, 0);
        console.log('Box weight: ' + weight + ' g');
        console.log(sweetCollection[0].sweetName +': '+ sweetCollection[0].weight + ' '+
        sweetCollection[1].sweetName +': '+ sweetCollection[1].weight +' ' +
        sweetCollection[2].sweetName +': '+ sweetCollection[2].weight);
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
        sweetCollection[sweetNum].getEaten();
    };
}
