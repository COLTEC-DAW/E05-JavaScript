//Ordenação
function ordernarCrescente(a,b){
    return (a > b) ? true:false;
}

function ordernarDecrescente(a,b){
    return (a < b) ? true:false;
}

function ordernarCrescenteImpar(a,b){
    return ((a > b) && (a%2 != 0)) ? true:false;
}

function ordernarDecrescenteImpar(a,b){
    return ((a > b) && (a%2 == 0)) ? true:false;
}

function bubbleSort(array, modoDeComparar){
    var length = array.length;
    for(var i = 0; i < length; i++){
        for( var j = 0; j < length; j++){
            if(modoDeComparar(array[j], array[j + 1])){
                var tmp = array[j];
                array[j] = array [j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    return array;
}

//Criptografia
function CifraDeCesar(item){
    var alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var i;

    for(i = 0; i < 26; i++){
        if(alfabeto[i] == item) { 
            break; 
        }
    }
    i += 3;
    if(i >25){
        i-=26;
    }

    return alfabeto[i];
}

function criptografar(texto, criterio){
    var encrypted = "";
    var aux = texto.split(' ');

    for(var i = 0; i < aux.length; i++){
        encrypted = encrypted + criterio(aux[i]);
    }
    return encrypted;
}

//Verificando um número
function ehImpar(num){
    if(num % 2 != 0){
        return true;
    }
    else{
        return false;
    }
}

function ehPar(num){
    if(num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

function ehPrimo(num){
    for(var i = 0; i < num; i++){
        if (num % i == 0){
            return false;
        }
    }
    return true;
}

function verificaNumero(num, criterio){
    if(criterio(num) == true){
        return true;
    }
    else{
        return false;
    }
}

//Transformações em uma String
function caixaAltaVogais(c){
    var Vogais = ["a","e","i","o","u"];
    var aux = c.toLowerCase();

    return (Vogais.includes(aux)) ? c.toUpperCase():c;
}
function caixaBaixaVogais(c){
    var Vogais = ["a","e","i","o","u"];
    var aux = c.toLowerCase();

    return (Vogais.includes(aux)) ? c.toLowerCase():c;
}

function caixaAltaConsoantes(c){
    var Consoantes = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
    var aux = c.toLowerCase();

    return (Consoantes.includes(aux)) ? c.toUpperCase():c;
}
function caixaBaixaConsoantes(c){
    var Consoantes = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
    var aux = c.toLowerCase();

    return (Consoantes.includes(aux)) ? c.toLowerCase():c;
}

function transformaString(texto, criterio){
    var vetor = texto.split('');
    vetor.toString();
    for(var i = 0; i <  vetor.length; i++){
        vetor[i] = criterio(vetor[i]);
    }
    return vetor.toString();
}

//Funções Matriciais
function valorSoma(a,b){
    return a + b;
}

function valorMult(a,b){
    return a * b;
}

function valorBin(a,b){
    return a == b ? 1:0;
}

function valorDiv(a,b){
    return a ^ 2 / (b + 1);
}

function criaMatriz(tamanho, formaDeValor){
    var matriz = [];
    for (var i = 0; i < tamanho; i++){
        matriz[i] = [];
        for(var j = 0; j < tamanho; j++){
            matriz[i][j] = formaDeValor(i,j);
        }
    }
    return matriz;
}