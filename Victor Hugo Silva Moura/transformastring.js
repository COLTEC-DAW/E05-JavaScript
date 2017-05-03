function vogalbaixa(string){
    var vogaismin = ["a", "e", "i", "o", "u"];
    var vogaismais = ["A", "E", "I", "O", "U"];
        for(var j = 0; j < 5; j++){
            if(string == vogaismin[j] || string == vogaismais[j]){
                return string.toLowerCase();
            }
        }
    return string;
}

function vogalalta(string){
    var vogaismin = ["a", "e", "i", "o", "u"];
    var vogaismais = ["A", "E", "I", "O", "U"];
        for(var j = 0; j < 5; j++){
            if(string == vogaismin[j] || string == vogaismais[j]){
               return string.toUpperCase();
            }
        }
    return string;
}

function consoantebaixa(string){
    var vogaismin = ["a", "e", "i", "o", "u"];
    var vogaismais = ["A", "E", "I", "O", "U"];
        for(var j = 0; j < 5; j++){
            if(string == vogaismin[j] || string == vogaismais[j]){
                return string;
            }
        }
    return string.toLowerCase();
}

function consoantealta(string){
    var vogaismin = ["a", "e", "i", "o", "u"];
    var vogaismais = ["A", "E", "I", "O", "U"];
        for(var j = 0; j < 5; j++){
            if(string == vogaismin[j] || string == vogaismais[j]){
                return string;
            }
        }
    return string.toUpperCase();
}

function transform(string, criterio){
    string = string.split("");
    for(var i = 0; i < string.length; i++){
        if(string[i] != " ") string[i] = criterio(string[i]);
    }
    return string.join("");
}