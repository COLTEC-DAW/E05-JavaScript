function transformString(str, transformFunc) {
    let splitedString = str.split('');
    let transformedStr = '';
    for (let i = 0; i < str.length; i++) {
        transformedStr += transformFunc(splitedString[i]);
    }
    return transformedStr;
}

function vogaisToUpperCase(char) {
    const vogais = 'aeiouAEIOU';
    if (vogais.includes(char)) {
        return char.toUpperCase();
    }
    return char;
}

function vogaisToLowerCase(char) {
    const vogais = 'aeiouAEIOU';
    if (vogais.includes(char)) {
        return char.toLowerCase();
    }
    return char;
}

function consoantesToUpperCase(char) {
    const vogais = 'aeiouAEIOU';
    if (!vogais.includes(char)) {
        return char.toUpperCase();
    }
    return char;
}

function consoantesToLowerCase(char) {
    const vogais = 'aeiouAEIOU';
    if (!vogais.includes(char)) {
        return char.toLowerCase();
    }
    return char;
}

let str = "Hello World";

let newString = transformString(str, vogaisToUpperCase);
let newString1 = transformString(str, consoantesToUpperCase);

console.log(newString);
console.log(newString1);

newString = transformString(str, vogaisToLowerCase);
newString1 = transformString(str, consoantesToLowerCase);

console.log(newString);
console.log(newString1);