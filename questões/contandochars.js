function countChars(phrase, c){
    let count = phrase.split('').filter(l => l === c).length;
    console.log(count);
}

let phrase = "Essa frase deve repetir a letra 's' varias vezes";

countChars(phrase, 's');