export class Poem {
  constructor() {
    this.lineOne = [];
    this.lineTwo = [];
    this.lineThree = [];
    this.haikuArray = [];
    this.haiku = "";
  }

  // arguments should be strings
  fillLine(lineOneStr, lineTwoStr, lineThreeStr) {
    this.lineOne.push(lineOneStr);
    this.lineTwo.push(lineTwoStr);
    this.lineThree.push(lineThreeStr);
  }

  combineArrays() {
    this.haikuArray.push(...this.lineOne, ...this.lineTwo, ...this.lineThree);
  }

  combineStrings() {
    this.haiku = this.haikuArray.join(' ');
  }

  removePunctuation(punctuationString) {
    return punctuationString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  }
}