function findMaxElement(arr) {
    let maxElement = arr[0];
    for(let i = 1; i<arr.length; i++){
        if (maxElement < arr[i]){
            maxElement = arr[i];
        }
    }
    return maxElement;
}
module.exports = findMaxElement;