function deepCopyObject(oldObj) {
    const newObj = {};
    for (let key in oldObj) {
        if (oldObj.hasOwnProperty(key)) {
            if (typeof oldObj[key] === 'object') {
                if ('length' in oldObj[key]){
                    arrayCopy = function(objKey) {
                        const newArray = []
                        for (let i = 0; i < objKey.length; i++){
                            if (typeof objKey[i] === 'object') {
                                deepCopyObject(objKey[i])
                            }
                            newArray.push(objKey[i]);
                        }
                        return newArray;
                    }
                    newObj[key] = arrayCopy(oldObj[key]);
                }
                else {
                    newObj[key] = deepCopyObject(oldObj[key]);
                }
            }
            else{
                newObj[key] = oldObj[key];
            }
        }
    }
    return newObj;
}
module.exports = deepCopyObject;
