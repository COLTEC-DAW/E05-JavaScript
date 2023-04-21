function criptografia(str, regra){
    return string.split('').map(regra).join('');
}

let string = "Hello world";

caesarCipher = (l) => String.fromCharCode(l.charCodeAt()+3);

let newString = criptografia(string, caesarCipher);

console.log(newString);