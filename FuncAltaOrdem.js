// Ordenação

function ordencao(vetor, criterio){

    for (var i = 0; i < vetor.length; i++){
        for (var j = 0; j < (vetor.length - 1); j++){
            if(criterio(vetor[j], vetor[(j+1)]) == false){
                var tmp = vetor[j];
                vetor[j] = vetor[(j+1)];
                vetor[(j+1)] = tmp;
            }
        }
    }

    return vetor;
}

var vt = [3,7,2,8,6,1,4,5];
console.log(vt);
console.log(ordencao(vt, function(a, b){ return a < b}));
console.log(ordencao(vt, function(a, b){ return a > b}));
console.log(ordencao(vt, function(a, b){

    if ((a % 2 == 0) && (b % 2 == 0)){ return a > b; }
    else if ((a % 2 != 0) && (b % 2 != 0)) { return a < b; }
    else if (a % 2 == 0){ return false ;}
    else if (a % 2 != 0){ return true ;}
}));


// Criptografia

function crypt(str, criterio){

    var vet = str.split('');
    console.log(vet);

    for ( var i = 0; i < vet.length; i++){
        vet[i] = criterio(vet[i]);
    }

    return vet.join('');
}

function cifraDeCezar(char){

    var chave = (Math.random() % 25) + 1;
    if ((char.toUpperCase().charCodeAt(0) + chave) <= 90){
        return String.fromCharCode((char.charCodeAt(0) + chave));
    }
    else { return String.fromCharCode((char.charCodeAt(0) + chave - 26)); }
}

console.log(crypt('Avavavav', cifraDeCezar));


// Verificando um número


function verifica(num, condicao){
    
    return condicao(num);
}

function primo (num){

    for ( var i = 2; i < num; i++){
        if (num % i == 0) { return false; }
    }
    return true;
}

console.log(verifica(16, function(num){return (num % 2 == 0)}));
console.log(verifica(31, primo));


// Transformações em uma String

function transformaString(str, transformacao){

    var vet = str.split('');

    for ( var i = 0; i < vet.length; i++){
        vet[i] = transformacao(vet[i]);
    }

    return vet.join('');
}

var vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

console.log(transformaString('MALUQUICE vei q saco to ha 3h nissaqui', function(char) { 
    if(vogais.includes(char)) {return char.toUpperCase();}
    return char;
} ))

console.log(transformaString('MALUQUICE vei q saco to ha 3h nissaqui', function(char) { 
    if(vogais.includes(char)){return char.toLowerCase();}
    return char;
} ))

console.log(transformaString('MALUQUICE vei q saco to ha 3h nissaqui', function(char) { 
    if (!(vogais.includes(char))){return char.toUpperCase();}
    return char;
} ))

console.log(transformaString('MALUQUICE vei q saco to ha 3h nissaqui', function(char) { 
    if (!(vogais.includes(char))){return char.toLowerCase();}
    return char;
} ))




// Funções Matriciais

function criaMatriz(tamAresta, funcaoMatricial){

    var matriz = [];

    for (var i = 0; i < tamAresta; i++){
        var novaLinha = [];

        for (var j = 0; j < tamAresta; j++){

            novaLinha.push(funcaoMatricial(i,j));
        }
        matriz.push(novaLinha);
    }

    return matriz;
}

console.log(criaMatriz(4, function(i,j){ return i + j;}));
console.log(criaMatriz(4, function(i,j){ return i * j;}));
console.log(criaMatriz(4, function(i,j){ return i == j ? 1 : 0;}));
console.log(criaMatriz(4, function(i,j){ return i^2/(j+1);}));
console.log(criaMatriz(4, function(i,j){ return i > j ? 1 : (i < j ? 5 : 0);}));


