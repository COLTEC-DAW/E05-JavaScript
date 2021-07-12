var cesar = function (str, senha) {
    if (senha < 0) {
        return cesar(str, senha + 26);
    }
    var resul = "";
    for (var i = 0; i < str.length; i++) {
        var c = str[i];

        if (c.match(/[a-z]/i)) {
            var code = str.charCodeAt(i);

            if (code >= 65 && code <= 90) {
                c = String.fromCharCode(((code - 65 + senha) % 26) + 65);

            }else if (code >= 97 && code <= 122) {
            c = String.fromCharCode(((code - 97 + senha) % 26) + 97);
            }
        }
        resul += c;
    }
    return resul;
}

document.write(cesar("abcdefghijklmnopqrstuvwxyz", 1) + "<br>");