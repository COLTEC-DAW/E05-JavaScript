// Retorna array com intervalo definido por ini e fim
function range(ini, fim) {
    let array = [];
    let pos = 0;

    // Preenche array com o intervalo especificado
    for(i = ini; i <= fim; i++) {
        array[pos] = i;
        pos++;
    }
    
    return array;
}

// Retorna array com intervalo definido por ini, fim e salto
function range2(ini, fim, salto) {
    let array = [];
    let pos = 0;

    // Preenche array com o intervalo e o salto especificado
    for(i = ini; i <= fim; i += salto) {
        array[pos] = i;
        pos++;
    }
    
    return array;
}

// Testes
console.log("teste 1: " + range(4, 10));
console.log("teste 2: " + range2(4, 10, 3));