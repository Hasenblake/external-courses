function putWordToString(str1, str2, num){
    let newStr, wordsCount = -1;
    for (let i =0 ; i < str.length ; i++) {
        if (str.charCodeAt(i) === 32){
            wordsCount++;
        }
        if (str.charCodeAt(i) === 32 && wordsCount === num){
            newStr =`${str1.slice(0, i)} ${str2} ${str1.slice(i + 1, str.length)}`;
        }
    }
    return newStr;
}
module.exports = putWordToString;