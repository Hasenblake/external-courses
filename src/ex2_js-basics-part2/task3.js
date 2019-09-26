const input = [1,3, -6, 8, null, 0, -5, 'strjng'];


function showEvenCount(arr){
    let output = [null, null, null]; //четный, нечетный, ноль
    for (let i = 0 ; i<arr.length; i++){
        if (typeof(arr[i]) !== 'number') {
            continue;
        }
        if (typeof(arr[i]) !== 'number' && arr[i] !== 0) {
            switch (arr[i] % 2) {
                case 0:
                    output[0]++;
                    break;
                case 1:
                    output[1]++;
                    break;
                case -1:
                    output[1]++;
                    break;
                default:
                    break;
            }
        } else output[2]++;
    }
    console.log(output);
};

module.exports = showEvenCount;