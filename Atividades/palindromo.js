isPalindromo = (word) => {
	let words = word.split('')
    words = words.filter(l => l !== ' ')
    let wordsReverse = words.map(x => x)
    wordsReverse.reverse()

    for(i = 0; i < words.length; i++){
        if(words[i].toLowerCase() === wordsReverse[i].toLowerCase()){
            continue
        }else{
            return false;
        }
    }

    return true;
} 