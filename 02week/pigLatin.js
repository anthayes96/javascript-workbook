'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  word = word.toLowerCase().trim()

  // Your code here
  // word[0]
  // if (word[0] === 'a' || 'i' || 'o' || 'u') {
  //   return word + 'yay';
  // }
 const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
 const firstLetter = word[0];
let vowelPosition = 0;

 if (vowels.includes(firstLetter)) {
  return word + 'yay';
} else {
  for(let i of word){
    if (vowels.includes(i)) {
     //  console.log(word.indexOf(i));
      vowelPosition = word.indexOf(i);
      break;
    }
  }
  //we want to remove up to the vowelPosition and return word + vowelPosition + ay
  return word.slice(vowelPosition) + word.slice(0, vowelPosition) + "ay"
}
  



  

}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
