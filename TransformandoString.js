function transform(str, func) {
    return func(str);
}

var UpperVowels = function (str) {
    var final = ""
    var char;
    for(var i = 0; i < str.length; i++) {
        char = str[i];
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            char = char.toUpperCase();
        }
        final += char;
    }
    return final;
}

var LowerVowels = function (str) {
    var final = ""
    var char;
    for(var i = 0; i < str.length; i++) {
        char = str[i];
        if(char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
            char = char.toLowerCase();
        }
        final += char;
    }
    return final;
}

var UpperConsonants = function (str) {
    var final = ""
    var char;
    for(var i = 0; i < str.length; i++) {
        char = str[i];
        if(char != 'a' && char != 'e' && char != 'i' && char != 'o' && char != 'u') {
            char = char.toUpperCase();
        }
        final += char;
    }
    return final;
}

var LowerConsonants = function (str) {
    var final = ""
    var char;
    for(var i = 0; i < str.length; i++) {
        char = str[i];
        if(char != 'A' && char != 'E' && char != 'I' && char != 'O' && char != 'U') {
            char = char.toLowerCase();
        }
        final += char;
    }
    return final;
}

var frase = "Minha querida Frase de TestE"

console.log(transform(frase, LowerConsonants));
console.log(transform(frase, UpperConsonants));
console.log(transform(frase, LowerVowels));
console.log(transform(frase, UpperVowels));

