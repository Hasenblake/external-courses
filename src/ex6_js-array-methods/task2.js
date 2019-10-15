function someAnalog(array, callback) {
    for (let i = 0; i < array.length; i++){
        if (callback(array[i], i, array) === true){
            return true;
        }
    }
    return false;
}
module.exports = someAnalog;