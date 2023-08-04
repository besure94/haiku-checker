import { Poem } from './../src/js/poem.js';

describe('Poem', () => {
  let reusablePoem;

  beforeEach(() => {
    reusablePoem = new Poem();
  });

  test('should create a poem object with three properties, with each one containing an empty string', () => {
    expect(reusablePoem.lineOne).toEqual("");
    expect(reusablePoem.lineTwo).toEqual("");
    expect(reusablePoem.lineThree).toEqual("");
  });
  test('should fill each property of the poem object with an inputted string', () => {
    reusablePoem.fillLine("giraffes", "are", "rad");
    expect(reusablePoem.lineOne).toEqual("giraffes");
    expect(reusablePoem.lineTwo).toEqual("are");
    expect(reusablePoem.lineThree).toEqual("rad");
  });
  test('should combine each string from the poem object into a single array', () => {
    reusablePoem.fillLine("giraffes", "are", "rad");
    reusablePoem.combineArrays();
    expect(reusablePoem.haikuArray).toEqual(["giraffes", "are", "rad"]);
  });
  test('should combine haikuArray from the poem object into a single string', () => {
    reusablePoem.fillLine("giraffes", "are", "rad");
    reusablePoem.combineArrays()
    reusablePoem.combineStrings();
    expect(reusablePoem.haiku).toEqual("giraffes are rad");
  });
  test('should remove punctuation from a string', () => {
    const result = reusablePoem.removePunctuation("giraffes are rad!");
    expect(result).toEqual("giraffes are rad");
  });
  test('should divide syllables between two same consonants in a string for each line', () => {
    const result = reusablePoem.countSyllables("butter better letter");
    expect(result).toEqual(6);
  });
  // test('should divide a syllable when a word ends in a consonant and -le', () => {
  //   const result = reusablePoem.countSyllables("table bundle able");
  //   expect(result).toEqual(6);
  // });
});