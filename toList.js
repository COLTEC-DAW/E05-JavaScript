class CelulaLista {
    constructor(info, prox) {
        this.info = info;
        this.prox = prox;
    }
}

function toList (array, i = 0) {
    if (i < array.length - 1) {
        return new CelulaLista(array[i], toList(array, i + 1));
    }
    else return new CelulaLista(array[i], null);
}

function printList (celula) {
    console.log(`\tinfo: ${celula.info}\tproximo: ${celula.prox}`);
    
    if (celula.prox != null) printList(celula.prox);
}

function arrayAleatorio (tamanho, array = [], i = 0) {
    if (i < tamanho) {
        array.push(intAleatorio());
        return arrayAleatorio(tamanho, array, i + 1);
    }
    else return array;
}

function intAleatorio() {
    return Math.floor(Math.random() * 100);
}

let tamanho = prompt("Tamanho do array: ");
let array = arrayAleatorio (tamanho);
console.log(`array: ${array}\nlista: `);
printList(toList(array));