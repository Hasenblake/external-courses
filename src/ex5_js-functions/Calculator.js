const Calculator = (function () {
     let result = 0;
     return {
         add: function (num = 0) {
             result += num;
             function f(num = 0) {
                 result += num ;
                 return f;
             }
             return f;
         },

         subtract: function(num = 0) {
             result -= num;
             function f(num = 0) {
                 result -= num;
                 return f;
             }
             return f;
         },

         multiply: function(num = 0) {
             result *= num;
             function f(num = 0) {
                 result *= num;
                 return f;
             }
             return f;
         },

         divide: function(num = 0) {
             result /= num;
             function f(num = 0) {
                 result /= num;
                 return f;
             }
             return f;
         },

         reset: function(num = 0) {
             result = 0;
         },
         getResult: function(num = 0) {
             return result;
         }

     }
}());
module.exports = Calculator;