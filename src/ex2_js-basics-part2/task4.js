const diffirentElements = [1,2,null, 'string'];
const similarElements = [1,1,1,1];


console.log('Ёлементы различны? :' + sMixed(diffirentElements));
console.log('Ёлементы различны? :' + isMixed(similarElements));

 function isMixed(arr) {
    for (let i = 0; i < arr.length-1; i++){
        if (arr[i] !== arr[i+1]){
            return true;
        }
    }
    return false;
}

module.exports = isMixed;  