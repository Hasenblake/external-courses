const Hangman = function (word) {
    this.letters = word.toLowerCase().split('');

    this.__startGame = function () {
        this.rightLetters = [];
        this.wrongLetters = new Set();
        this.errors = 0;
        for (let i = 0; i < this.letters.length; i++) {
            this.rightLetters[i] = "_";
        }
    };

    this.__startGame();

    this.toSolidString = function(arr) {
        let newWord = '';
        for (let key of arr){
            newWord += key.toString()
        }
        return newWord;
    };

    this.guess = function (letter) {
        let isRight;
        for (let i = 0; i < this.letters.length; i++) {
            if (this.letters.includes(letter.toLowerCase())){
                let number = this.letters.indexOf(letter.toLowerCase());
                this.rightLetters[number] = letter;
                this.letters[number] = null;
                isRight = true;
            }
        }
        if (isRight){
            if(this.letters.every((element) => element === null)){
                console.log(this.toSolidString(this.rightLetters) + ' | You won!');
            } else {
                console.log(this.toSolidString(this.rightLetters));
            }
        } else {
            if (!this.wrongLetters.has(letter.toLowerCase())){
                this.errors++;
            }
            this.wrongLetters.add(letter.toLowerCase());
            if (this.errors === 6){
                console.log('wrong letter, you lose | ' + this.toSolidString(this.letters));
            }
            if (this.errors > 6){
                console.log('You have already lost this game | ' + this.toSolidString(this.letters));
            }
            console.log('wrong letter, errors left ' + (6 - this.errors) + ' | ' + Array.from(this.wrongLetters));
        }
    };

    this.getGuessedString = function () {
        console.log(this.toSolidString(this.rightLetters));
    };

    this.getErrorsLeft = function () {
        console.log(6 - this.errors);
    };

    this.getWrongSymbols = function () {
        console.log(Array.from(this.wrongLetters));
    };

    this.getStatus = function () {
        console.log(this.toSolidString(this.rightLetters) + '| errors left ' + (6 - this.errors));
    };

    this.startAgain = function (newWord) {
        this.letters = newWord.split('');
        this.__startGame();
    };
};