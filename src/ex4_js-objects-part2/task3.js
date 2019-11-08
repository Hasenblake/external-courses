function deleteFirstAndLastSpace(str){
    let newStr;
    for (let i =0 ; i < str.length ; i++) {
        if (str.charCodeAt(i) === 32){
            newStr = str.slice(0, i) + str.slice(i+1, str.length);
            break;
        }
    }
    for (let i = str.length ; i > 0 ; i--) {
        if (str.charCodeAt(i) === 32){
            newStr = newStr.slice(0, i) + newStr.slice(i+1, str.length);
            break;
        }
    }
    return newStr;
}
module.exports = deleteFirstAndLastSpace;
