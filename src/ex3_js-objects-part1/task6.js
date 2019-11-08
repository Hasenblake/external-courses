function deepCopyObject(oldObj) {
    const newObj = (oldObj instanceof Array) ? [] : {};
    Object.assign(newObj, oldObj);
    for (let key1 in newObj) {
        if (newObj.hasOwnProperty(key1)) {
            if (typeof newObj[key1] === 'object') {
                    newObj[key1] = deepCopyObject(oldObj[key1]);
            }
        }
    }
    return newObj;
}
module.exports = deepCopyObject;