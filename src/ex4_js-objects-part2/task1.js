function propertyInProto(prop, obj) {
    if (prop in Object.getPrototypeOf(obj)) {
        return obj[prop];
    }
    return undefined;
}
module.exports = propertyInProto;