function randomFromMinToMax(num1, num2){
    return  Math.round(Math.random()*(num2-num1) + num1);
}
module.exports = randomFromMinToMax;