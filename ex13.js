function cifraCesar(caracter, troca) {
    var indice = caracter.charCodeAt(0);

    if (caracter == caracter.toLowerCase()) {
        if ((indice + troca) > 122) {
            caracter = String.fromCharCode((indice + troca) - 26);
        } else {
            caracter = String.fromCharCode(indice + troca);
        }
    } else {
        if ((indice + troca) > 90) {
            caracter = String.fromCharCode((indice + troca) - 26);
        } else {
            caracter = String.fromCharCode(indice + troca);
        }
    }

    return caracter;
}

function criptografaString(string, criteria, troca) {
    var tmp = "";

    for (var i = 0; i < string.length; i++) {
        tmp += criteria(string[i], troca);
    }

    return tmp;
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------

console.log(criptografaString("AtaqueAgora", cifraCesar, 4));