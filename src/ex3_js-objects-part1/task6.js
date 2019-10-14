function deepCopyObject(oldObj) {
    const newObj = (oldObj instanceof Array) ? [] : {};
    Object.assign(newObj, oldObj);
    for (let key1 in newObj) {
        if (newObj.hasOwnProperty(key1)) {
            if (typeof newObj[key1] === 'object') {
                if (oldObj[key1] instanceof Array){
                    newObj[key1] = Object.assign([], oldObj[key1]);
                    for (let key2 in newObj[key1]){
                        if (typeof oldObj[key1][key2] === 'object') {
                            newObj[key1][key2] = deepCopyObject(oldObj[key1][key2]);
                        }
                    }
                }
                else {
                    newObj[key1] = deepCopyObject(oldObj[key1]);
                }
            }
        }
    }
    return newObj;
}
module.exports = deepCopyObject;