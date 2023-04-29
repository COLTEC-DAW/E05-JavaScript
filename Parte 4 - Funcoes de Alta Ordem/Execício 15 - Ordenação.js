var array = [1, 2, 3, 4, 5];

function bubbleSort(vetor, criterio) 
{
    var tamanho = vetor.length;
    for (var i = 0; i < tamanho - 1; i++) {
      for (var j = 0; j < tamanho - i - 1; j++) {
        if (criterio(vetor[j], vetor[j + 1])) {
          var temp = vetor[j];
          vetor[j] = vetor[j + 1];
          vetor[j + 1] = temp;
        }
      }
    }
    return vetor;
}

function crescente(a, b) {
    return a > b;
}

function decrescente(a, b) {
    return a < b;
}

function crescenteImpares(a, b) {
    if (a % 2 == 0 && b % 2 != 0) {
        return false;
    } else if (a % 2 != 0 && b % 2 == 0) {
        return true;
    } else {
        return a > b;
    }
}

function decrescenteImpares(a, b) {
    if (a % 2 == 0 && b % 2 != 0) {
        return true;
    } else if (a % 2 != 0 && b % 2 == 0) {
        return false;
    } else {
        return a < b;
    }
}

function crescentePares(vetor) {
    var pares = vetor.filter(function(elemento) {
        return elemento % 2 == 0;
    });
    return bubbleSort(pares, crescente);
}

function decrescentePares(vetor) {
    var pares = vetor.filter(function(elemento) {
        return elemento % 2 == 0;
    });
    return bubbleSort(pares, decrescente);
}

var vetor = [10, 4, 8, 2, 6, 7, 3, 1, 5, 9];
console.log("Vetor: ", vetor);

var vetorCrescente = bubbleSort(vetor.slice(), crescente);
console.log("Ordenado em ordem crescente: ", vetorCrescente);

var vetorDecrescente = bubbleSort(vetor.slice(), decrescente);
console.log("Ordenado em ordem decrescente: ", vetorDecrescente);

var vetorCrescenteImpares = bubbleSort(vetor.slice(), crescenteImpares);
console.log("Ordenado em ordem crescente, com ímpares antes dos pares: ", vetorCrescenteImpares);

var vetorDecrescenteImpares = bubbleSort(vetor.slice(), decrescenteImpares);
console.log("Ordenado em ordem decrescente, com pares antes dos ímpares: ", vetorDecrescenteImpares);

var vetorCrescentePares = crescentePares(vetor);
console.log("Ordenado em ordem crescente, apenas os pares: ", vetorCrescentePares);

var vetorDecrescentePares = decrescentePares(vetor);
console.log("Ordenado em ordem decrescente, apenas os pares: ", vetorDecrescentePares);
