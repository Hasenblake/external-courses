function sliceToNumber(str, num){
    if (num < str.length){
        return `${str.slice(0, num-3)} '...'`
    }
    return str;
}
module.exports = sliceToNumber;