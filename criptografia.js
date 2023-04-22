var minha_frase = "Uma frase para fim de testes muahahahahha"
var td = "abcdefghijklmnopqrstuvwxyz";

function cifraCesar(frase, key){
    
    var novo = [];
    var aux;
    var tmp = frase.toLowerCase();
    
    for(i = 0; i < tmp.length; i++){
        for(j = 0; j < td.length; j++){
            if(tmp[i] == td[j]){
                aux = j + key;
                if(aux >= td.length){
                    aux = aux - td.length;
                }
                novo[i] = td[aux];
                break;
            }
        }
    }
    return novo.join("");
}

function criptografia(frase, criterio){
    return criterio(frase, 3);
}

console.log(criptografia(minha_frase, cifraCesar));