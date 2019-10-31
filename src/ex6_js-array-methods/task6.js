function reduceAnalog(array, callback, initialValue) {
    const newArr = array;
    let previousValue;
    if (initialValue !== undefined){
        previousValue = initialValue;
    }
    for (let i = 0; i < newArr.length; i++){
        if (previousValue === undefined){
            previousValue = newArr[i];
        }
        else {
            previousValue = callback(previousValue, newArr[i], i, newArr);
        }
    }
    return previousValue;
}
module.exports = reduceAnalog;