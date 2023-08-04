export class Poem {
  constructor() {
    this.lineOne = "";
    this.lineTwo = "";
    this.lineThree = "";
    this.haikuArray = [];
    this.haiku = "";
    this.syllableCount = {"lineOne": 0, "lineTwo": 0, "lineThree": 0};
    this.vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    this.consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n','p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
  }

  // arguments should be strings
  fillLine(lineOneStr, lineTwoStr, lineThreeStr) {
    this.lineOne = this.removePunctuation(lineOneStr);
    this.lineTwo = this.removePunctuation(lineTwoStr);
    this.lineThree = this.removePunctuation(lineThreeStr);
  }

  combineArrays() {
    this.haikuArray.push(this.lineOne, this.lineTwo, this.lineThree);
  }

  combineStrings() {
    this.haiku = this.haikuArray.join(' ');
  }

  removePunctuation(punctuationString) {
    return punctuationString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  }

  // line should be a string of one or more words
  // Split line into an array of individual words.
  countSyllables(line) {
    const wordArray = line.split(" ");
    // loop through each word in the array
    let numberOfSyllables = 0;
    const consonants = this.consonants;
    wordArray.forEach(function(word) {
      // split each word into individual letters
      const letters = word.split("");
      // if the number of letters is 3 or less, it is 1 syllable
      if (letters.length <= 3) {
        numberOfSyllables += 1;
      } else {
        // loop through the letters and check if two consecutive letters match
        let secondSyllableCounter = 1;
        for (let i = 0; i < word.length; i++) {
          if (letters[i] === letters[i + 1] && consonants.includes(letters[i])) {
            secondSyllableCounter += 1;
          }
        }
        numberOfSyllables += secondSyllableCounter;
      }
    });
    return numberOfSyllables;
  }
}