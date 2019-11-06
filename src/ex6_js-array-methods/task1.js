function sliceAnalog(array, begin = 0, end = array.length) {
    const newArr = [];
    if (begin < 0) {
        const newBegin = arr.length + begin;
    }
    if (end < 0) {
        const newEnd= arr.length + end;
    }
    for (let i = begin; i < end; i++){
        newArr.push(array[i]);
    }
    return newArr;
}
module.exports = sliceAnalog;