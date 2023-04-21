const  words = ["radar","luz azul", "rever", "amanhã"];
const word_unspaced = word => word.split(' ').join('');
const checkpalindrome = word => word_unspaced(word) === word_unspaced(word.split('').reverse().join(''));
const results = words.map(checkpalindrome);
console.log(results);