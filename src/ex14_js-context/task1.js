const Calculator = new(function(){
    this.result = 0;
    this.makeResult = function(num){
        this.result = num;
    };
    this.add = function (num) {
        if (typeof(+num) === 'number' && !isNaN(num)){
            this.result += num;
        }
        return this;
    };
    this.subtract = function (num) {
        if (typeof(+num) === 'number' && !isNaN(num)){
            this.result *= num;
        }
    };
    this.multiply = function (num) {
        if (typeof(+num) === 'number' && !isNaN(num)){
            this.result *= num;
        }
        return this;
    };
    this.divide = function (num) {
        if (typeof(+num) === 'number' && !isNaN(num)){
            this.result /= num;
        }
    };
    this.getResult = function () {
        return this.result;
        };
    this.reset = function () {
        this.result = 0;
        return this;
    };
    this.setState = function (num) {
        if (typeof(+num) === 'number' && !isNaN(num)){
            this.result = num;
        }
        return this;
    };
    this.fetchData = function (callback) {
        setTimeout(callback, 100, 500);
    };
});


