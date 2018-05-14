
var minhaString = "D Oljhlud Udsrvd Pduurp Vdowrx Vreuh r Fdfkruur Fdqvdgr"; //  65 a 90 || 97 a 122  //
var n = 23;

var cesar = function (n) {
    return n;
}

function toascii(minhaString, criterio) {
    var stringCifra;
    var asciiNumber;

    for (let i = 0; i < minhaString.length; i++) {
        asciiNumber = minhaString.charAt(i).charCodeAt();                           //numero da tabela ascii

        if (asciiNumber >= 65 && asciiNumber<= 90) {                                //se for Maiúscula
            if ((asciiNumber + criterio) > 90) {                                           //90 é a última letra maiúscula da tabela ascii, caso seja excedido volta pra 65 que é a primeira
                stringCifra = stringCifra + String.fromCharCode(criterio + asciiNumber - 26);   //adiciona o caracter na string final somando as posições da tabela ascii
            }
            else{
                stringCifra = stringCifra + String.fromCharCode(criterio + asciiNumber);
            }
        }
        else if (asciiNumber >= 97 && asciiNumber<= 122) {                                //se for Minúscula
            if ((asciiNumber + criterio) > 122) {                                           //122 é a última letra minúscula da tabela ascii, caso seja excedido volta pra 97 que é a primeira
                stringCifra = stringCifra + String.fromCharCode(criterio + asciiNumber - 26);   //adiciona o caracter na string final somando as posições da tabela ascii
            }
            else{
                stringCifra = stringCifra + String.fromCharCode(criterio + asciiNumber);
            }
        }
        else{
            stringCifra = stringCifra + String.fromCharCode(asciiNumber);
        }
    }
    return stringCifra;
}

console.log(toascii(minhaString, cesar(n)));