function propertyInProto(prop, obj) {
    if (prop in obj.__proto__) {
        return obj[prop];
    }
}
module.exports = propertyInProto;