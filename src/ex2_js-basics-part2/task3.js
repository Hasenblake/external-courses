function showArrayOfEvenCount(arr){
    let output = [null, null, null];
                //четный, нечетный, ноль
    for (let i = 0 ; i<arr.length; i++){
        if (typeof arr[i] !== 'number') {
            continue;
        }
        if (arr[i] !== 0) {
            if (arr[i] % 2 !== 0) {
                output[1]++;
            }
            else{
                output[0]++;
            }
        } else output[2]++;
    }
    return output;
}
module.exports = showArrayOfEvenCount;