const fs = require('fs');
const lh = require('lodash');

fs.readFile ('./gerald.txt','utf-8', (err,data) => {
  if (err) throw err

  const words = data.match(/\b\w+\b/g);
  const wordsCount = lh.countBy(words);
  console.log(wordsCount);
});

// I used a one .txt named gerald (it´s a fragment of the first book of The Witcher in spanish.)
// In the variable const words I used an metohd to extract all of caracters like - . , ; ... (/  \b  \w  +  \b  /g).


// I HOPE YOU ENJOYED THIS EXERCISE, LET'S GO TO NEXT ONE!!
