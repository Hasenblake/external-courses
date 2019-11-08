function hasSubString(str, subStr){
    for (let i =0 ; i < str.length - subStr.length ; i++) {
        console.log(str.slice(i, i + subStr.length));
        if (str.slice(i, i + subStr.length) === subStr){
            return true;
        }
    }
    return false;
}
module.exports = hasSubString;