function addStringFieldToObject(obj,str) {
    let newObj = obj;
    if(!(str in obj)){
        newObj[str] = 'new';
    }
    return newObj;
}
module.exports = addStringFieldToObject;