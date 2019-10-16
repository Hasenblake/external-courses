const Calculator = (function () {
     let previous = 0, now = 0;
     return {
         add: function (num = 0) {
             previous = now;
             now += num;
             function f(num = 0) {
                 now += num ;
                 return f;
             }
             return f;
         },

         subtract: function(num = 0) {
             previous = now;
             now -= num;
             function f(num = 0) {
                 now -= num;
                 return f;
             }
             return f;
         },

         multiply: function(num = 0) {
             previous = now;
             now *= num;
             function f(num = 0) {
                 now *= num;
                 return f;
             }
             return f;
         },

         divide: function(num = 0) {
             previous = now;
             now /= num;
             function f(num = 0) {
                 now /= num;
                 return f;
             }
             return f;
         },

         reset: function(num = 0) {
             previous = 0;
             now = 0;
         },
         getResult: function(num = 0) {
             return now;
         }

     }
}());
module.exports = Calculator;