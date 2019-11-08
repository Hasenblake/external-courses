function arrayOutput(arr){
    console.log("Число элементов: " + arr.length);
    console.log("Элементы:");
    for (let i = 0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
module.exports = arrayOutput;