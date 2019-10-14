function toCamelCase(str){
    let newStr = str;
    for (let i =1 ; i < str.length ; i++) {
        if (newStr.charCodeAt(i-1) === 32){
            newStr = newStr.slice(0, i) +
                    newStr[i].toUpperCase() +
                    newStr.slice(i+1, str.length);
        }
    }
    newStr = newStr[0].toUpperCase() + newStr.slice(1, str.length);
    return newStr;
}
module.exports = toCamelCase;