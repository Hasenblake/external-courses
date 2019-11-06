function everyAnalog(array, callback) {
    for (let i = 0; i < array.length; i++){
        if (callback(array[i], i, array) !== true && array.length !== 0){
            return false;
        }
    }
    return true;
}
module.exports = everyAnalog;
