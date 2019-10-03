function arrayOutput(array){
    console.log("Число элементов: " + array.length);
    console.log("Элементы:");
    for (let i = 0; i<array.length; i++){
        console.log(array[i]);
    }
}

module.exports = arrayOutput;