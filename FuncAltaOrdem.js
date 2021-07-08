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

