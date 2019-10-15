function countStringSymbols(str){
    const count = {};
    for (let i = 0; i < str.length; i++) {
        if (str[i] in count){
            count[str[i]]++;
        } else {
            count[str[i]] = 1;
        }
    }
    return count;
}
module.exports = countStringSymbols;