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

  test('should create a poem object containing three arrays', () => {
    expect(reusablePoem.lineOne).toEqual([]);
    expect(reusablePoem.lineTwo).toEqual([]);
    expect(reusablePoem.lineThree).toEqual([]);
  });
  test('should fill each array of the poem object with an inputted value', () => {
    reusablePoem.fillLine("giraffes", "are", "rad");
    expect(reusablePoem.lineOne).toEqual("giraffes");
    expect(reusablePoem.lineTwo).toEqual("are");
    expect(reusablePoem.lineThree).toEqual("rad");
  });
  test('should verify that each array contains only letters', () => {
    reusablePoem.verifyLetters()
  });
});