function criptoCesar(str) {
    var mutatedStr = "";
    //65 to 90
    for (let index = 0; index < str.length; index++) {
        if (str.charCodeAt(index) >= 65 && str.charCodeAt(index) <= 90) {
            mutatedStr += String.fromCharCode(str.charCodeAt(index) + 20);
        } else {
            mutatedStr += str[index];
        }        
    }
    return mutatedStr;
}

function criptogram(str, criptoAlgorithm) {
    return criptoAlgorithm(str.toUpperCase());
}
criptogram("vocefoihackeado", criptoCesar);