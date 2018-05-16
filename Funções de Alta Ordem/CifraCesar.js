function criptografia(string, criterio) {
    return criterio(string);
}

function CifraCesar(string) {
    var alfabeto = "abcdefghijklmnopqrstuvwxyz"; 
    var res = alfabeto.split("");
    var novastring = [];
    for (var i = 0; i < string.length; i++) {
        for (var j = 0; j <= 26; j++) {
            if (j == 26) {
                novastring.push('c');
                break;
            }
            else if (j == 25) {
                novastring.push('b');
                break;
            }
            else if (j == 24) {
                novastring.push('a');
                break;
            }
            else if (res[j] == string[i]) {
               // cifra = letra + 3 shift right
                novastring.push(res[j + 3]);   
                break;

            }
        }

    }
    return novastring.toString();

}
    //console.log(criptografia("dellareti", CifraCesar));

