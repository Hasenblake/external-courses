function strAndNumTypeCheck(arg){
    if (typeof arg === "string" || typeof(arg) === "number" && !isNaN(arg)) {
        return typeof arg;
    }
    return undefined;
}
module.exports = strAndNumTypeCheck;