let fs = require('fs');
let content = fs.readFileSync('openthesaurus.txt', 'utf8');


let array = content.split(";", 10);
let readline = require('readline-sync');
let input = readline.question("What's your word? ");


console.log(array[array.indexOf(input)]);

