const input = [1, true, "string", [1,2], null];

function arrayOutput(array){
    console.log("����� ���������: " + array.length);
    console.log("��������:");
    for (let i = 0; i<array.length; i++){
        console.log(array[i]);
    }
}
module.exports = arrayOutput;  