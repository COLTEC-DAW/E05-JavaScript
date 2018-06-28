function countChars(string, char) {
    var count = 0;
    string.split("").forEach(c => {
        if (c === char) {
            count++;
        }
    });
    return count;
}

var qtde = countChars('minhastring', 'i');
console.log(qtde);