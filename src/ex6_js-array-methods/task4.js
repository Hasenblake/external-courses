function filterAnalog(array, callback) {
    const newArr = [];
    for (let i = 0; i < array.length; i++){
        if (callback(array[i], i, array) === true){
            newArr.push(array[i]);
        }
    }
    return newArr;
}
module.exports = filterAnalog;
