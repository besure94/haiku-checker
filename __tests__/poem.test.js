// 1. Will take in three sentences as arrays from the user.
// 2. Will need a Poem object:
//    * Will need three properties each storing an array.
//    * Each property will represent one line of text.
//    * Each line will be evaluated for its number of syllables.
// 3. Will need a method that will add the three lines together.
// 4. Will need a method that will evaluate each word for at least one vowel.
// 5. Will need a method that splits a word into two syllables if it contains two of the same consonant.
// 6. Will need a method that evaluates for a long or short vowel sound:
//

import { Poem } from './../src/js/poem.js';

describe('Poem', () => {
  let reusablePoem;

  beforeEach(() => {
    reusablePoem = new Poem()
  });

  test('should create a poem object with three properties, with each one containing an array', () => {
    expect(reusablePoem.lineOne).toEqual([]);
    expect(reusablePoem.lineTwo).toEqual([]);
    expect(reusablePoem.lineThree).toEqual([]);
  });
  test('should fill each array of the poem object with an inputted string', () => {
    // alternative expect statement could be expect(reusablePoem.lineOne).toEqual(["giraffes"]);
    reusablePoem.fillLine("giraffes", "are", "rad");
    expect(reusablePoem.lineOne[0]).toEqual("giraffes");
    expect(reusablePoem.lineTwo[0]).toEqual("are");
    expect(reusablePoem.lineThree[0]).toEqual("rad");
  });
  test('should combine each array from the poem object into a single array', () => {
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
});