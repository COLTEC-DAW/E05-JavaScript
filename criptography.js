function caesarCipher(str, shift) {
    var alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    let encryptedStr = '';
    var bool = 0;
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        for(let j = 0; j < alfabeto.length; j++){
            if(str[i] == alfabeto[j]){
                encryptedStr += alfabeto[(j + shift) % 26];
                bool = 1;
            }
        }
        if(bool == 0){
            encryptedStr += str[i];
        }
        bool = 0;
    }

    return encryptedStr;
}

const originalStr = 'Hello World!';

console.log(caesarCipher(originalStr, 3));
console.log(caesarCipher(originalStr, -3));
console.log(caesarCipher(originalStr, 26));
