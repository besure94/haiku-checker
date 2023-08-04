# Template Repository

#### Use this template repository for starting new projects. Update with new technologies and packages when necessary.

#### By (Your Name Here)

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* Webpack
* Webpack-cli
* Node Package Manager
* .babelrc
* .eslintrc

## Description

## Setup/Installation Requirements

* Select the green "Use this template" button and select "create a new repository".
* In the terminal, go to your project folder and run the command $ npm install to install node_modules.
* Run the command $ npm run build to bundle together JS files.
* Enter the command $ npm run start to start a live development server.
* Enter the command $ npm run lint to check for errors.
* Enter the command $ npm run test to test business logic.

## Known Bugs

* _Any known issues_
* _should go here_

## License

1. Will take in three sentences as arrays from the user.
2. Will need a Poem object:
  * Will need three properties each storing an array.
  * Each property will represent one line of text.
  * Each line will be evaluated for its number of syllables.
3. Will need a method that will add the three lines together.
4. Will need a method that will evaluate each word for at least one vowel.
5. Will need a method that splits a word into two syllables if it contains two of the same consonant.
6. Will need a method that evaluates for a long or short vowel sound:


Objectives:

A haiku is a poem that consists of three lines. The first has five syllables, the second has seven, and the third has five. Start by creating an application that checks whether a poem is in fact a haiku. If you have time, build out your application so that it can randomly generate haikus.

This project provides an excellent opportunity for TDD with Jest.

Your logic should verify that the poem has three lines.
Your logic should verify English syllable rules (and exceptions) one at a time. A quick Google search will provide information on English syllable rules.
If you successfully complete a Haiku checker, continue to build out your application to randomly generate haikus.
Make sure to use class syntax and, as always, use TDD to develop your business logic before writing any user interface logic.


Source URL: https://www.juicyenglish.com/blog/how-to-divide-words-into-syllables

Seven rules to divide words into syllables
Rule # 1
A syllable is formed by at least one vowel (a, e, i, o, u).
For example: a, the, plant, ba-na-na, chil-dren, cam-er-a.

Exceptions:
     a) Silent e is not counted as a vowel in a syllable.
        For example: tape, like, love, ex-treme, take, blue.

     b) When two vowels carry one sound (diphthong), they cannot be divided.
        For example: coin, loud, bread, moon, sound, beau-ti-ful, a-void.

     c) The letter “y” is not strictly a vowel but behaves like one.
           For example: man-y, bi-cy-cle, i-vy.

Rule # 2
Divide the syllable between two same consonants.
For example: rab-bit, let-ter, buf-fet, des-sert, ber-ry.

Rule # 3
Vowel with long/short vowel sound...
     a) The consonant goes with the second vowel if the first vowel has a long vowel sound.
            For example: ba-sic, ro-bot, wa-ter.

     b) The consonant goes with the first vowel if it has a short vowel sound.
           For example: riv-er, mod-el, pan-el.

Exception:
Never split two consonants that make only one sound (ch, sh, ph, th, wh & gh) when pronounced together and aren't the same letter (diagraphs).
For example: teach-er, lash-es, graph-ic, pan-ther, bath-tub.

Rule# 4
Divide between two vowels that make two sounds.
 For example: di-et, di-aer-e-sis.

Exception:
Two vowels make one sound.
For example: coat, boat, meet.

Rule # 5
Use prefixes and suffixes to separate syllables.
For example: re-turn, un-u-su-al, pre-paid, end-less, pay-ing, hap-pi-ness, un-kind-ly.

Rule # 6
Compound nouns are always divided between the two words.
For example: some-thing, cup-cake, with-out,  how-ev-er, ba-by-sit-ter, class-room, break-fast, sun-flow-er.

Rule # 7
Divide before the consonant before an "-le" syllable and sounds like “-el”.
For example: a-ble, can-dle, fum-ble, ap-ple, ta-ble, cas-tle.

Exception:
Words which end with “ckle”.
For example: tick-le, tack-le.