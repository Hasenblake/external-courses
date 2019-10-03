function strAndNumTypeCheck(arg){
    if (typeof arg === "string" || typeof(arg) === "number") {
        return typeof arg;
      }
    return undefined;
}

module.exports = strAndNumTypeCheck;