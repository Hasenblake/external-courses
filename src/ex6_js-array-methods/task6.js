function reduceAnalog(array, callback, initialValue) {
    const newArr = array;
    let previousValue;
    if (typeof initialValue !== 'undefined'){
        previousValue = initialValue;
    }
    for (let i = 0; i < newArr.length; i++){
        if (typeof previousValue === 'undefined'){
            previousValue = newArr[i];
        }
        else {
            previousValue = callback(previousValue, newArr[i], i, newArr);
        }
    }
    return previousValue;
}
module.exports = reduceAnalog;