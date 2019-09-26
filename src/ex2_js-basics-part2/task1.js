const input = 20;

function typeCheck(input){
    if (typeof(input) === "string" || typeof(input) === "number") {
        return typeof(input);
      }
    return null;
}

module.exports = typeCheck;