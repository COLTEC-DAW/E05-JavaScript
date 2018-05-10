var criptografa = function(str, criterio){
    var array = str.split("");
    for(var i=0; i<array.length; i++){
        array[i] = criterio(array[i]);
    }
    return array.join('');
}

var cifra_de_cesar = function(char){
    if ((char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 87) || (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 118)){
        return String.fromCharCode(char.charCodeAt(0) + 3);
    }else if((char.charCodeAt(0) > 87 && char.charCodeAt(0) <= 90) || (char.charCodeAt(0) > 118 && char.charCodeAt(0) <= 122)){
        return String.fromCharCode(char.charCodeAt(0) - 23);
    }else{
        return char;
    }
}
var string = "XYZABC * xyzabc";
console.log(criptografa(string, cifra_de_cesar));
