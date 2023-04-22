const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
function cifraCesar(string, skip){
    let cifra = '';
    let achou = false;
    string = string.toLowerCase();

    for(let i = 0; i < string.length; i++){
        for(let j = 0; j < alfabeto.length; j++){
            if(string[i] == alfabeto[j]){
                cifra += alfabeto[(j + skip) % 26];
                achou = true;
            }
        }
        if(achou == 0){
            cifra += string[i];
        }
        achou = 0;
    }
    return cifra;
}

const string = "Hello World!";
console.log(cifraCesar(string, 1));
console.log(cifraCesar(string, 0));
console.log(cifraCesar(string, 5));
