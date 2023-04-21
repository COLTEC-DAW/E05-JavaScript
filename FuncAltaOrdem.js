/* ----- Ordenação -----*/

// Criterios de ordenação
function crescente(array, i, j) {
    return (array[i] > array[j]) ? true : false;
}

function decrescente(array, i, j) {
    return (array[i] < array[j]) ? true : false;
}

function crescenteImpar(array, i, j) {
    return ((array[i] > array[j]) && (array[i] % 2 != 0) && (array[j] % 2 != 0)) ? true : false;
}

function descrescentePar(array, i, j) {
    return ((array[i] < array[j]) && (array[i] % 2 == 0) && (array[j] % 2 == 0)) ? true : false;
}

// Troca a posição atual do array pela proxima posição
function swap(array, i, j) {
    let aux = array[i];
    array[i] = array[j];
    array[j] = aux;
}

// Função de ordenação que segue um criterio de ordenação
function bubbleSort(array, criterioOrdenacao) {
    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if(criterioOrdenacao(array, i, j)) {
                swap(array, i, j);
            }
        }
    }

    // Retorna array já ordenado
    return array;
}


/* ----- Criptografia -----*/
function criptografia(frase, criterioCriptografia) {
    let criptografado = "";

    // Transforma a frase em minusculo
    frase = frase.toLowerCase();
    for(let i = 0; i < frase.length; i++) {
        // Se não pertence ao alfabeto apenas adiciona à frase criptografada
        if(frase[i].charCodeAt(0) < "a".charCodeAt(0) || frase[i].charCodeAt(0) > "z".charCodeAt(0)) {
            criptografado += frase[i];
        } else {
            criptografado += criterioCriptografia(frase[i]);
        }
    }

    return criptografado;
}

function cifraDeCesar(letra, deslocamento=3) {
    let cod = letra.charCodeAt(0);

    cod += deslocamento;

    // Verifica se passou do "z"
    if(cod > 122) {
        let codA = "a".charCodeAt(0);
        let codZ = "z".charCodeAt(0);
        
        // Garante que o código está entre "a" e "z"
        cod = codA + (cod - codZ);
    }

    // retorna o código transformado em char
    return String.fromCharCode(cod);
}

/* ----- Verificação -----*/
function ehImpar(num) {
    return (num % 2 !== 0) ? true : false; 
}

function ehPrimo(num) {
    // Se for divisivel por qualquer numero diferente de 1 e ele mesmo, não é primo
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }

    return true;
}

function verificaNum(num,teste) {
    // Garante que o numero passado é um inteiro
    return teste(parseInt(num)) ? true : false;
}

/* ----- Transformações em uma String ----- */
function vogaisUpperCase(letra) {
    const vogais =["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    
    return vogais.includes(letra) ? letra.toUpperCase() : letra;
}

function vogaisLowerCase(letra) {
    const vogais =["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    
    return vogais.includes(letra) ? letra.toLowerCase() : letra;
}

function consoantesUpperCase(letra) {
    const vogais =["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    
    return vogais.includes(letra) ? letra : letra.toUpperCase();
}

function consoantesLowerCase(letra) {
    const vogais =["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    
    return vogais.includes(letra) ? letra : letra.toLowerCase();
}

function transformaString(string, transformacao) {
    let transformado = "";

    string = string.toLowerCase();
    for(let i = 0; i < string.length; i++) {
        if(string[i].charCodeAt(0) < "a".charCodeAt(0) || string[i].charCodeAt(0) > "z".charCodeAt(0)) {
            transformado += string[i];
        } else {
            transformado += transformacao(string[i]);
        }
    }

    return transformado;
}

/* ----- Funções Matriciais ----- */
function funcSum(i, j) {
    return i+j;
}

function funcSub(i, j) {
    return i-j;
}

function funcMulti(i, j) {
    return i*j;
}

function funcEqual(i, j) {
    return i == j ? 1 : 0;
}

function funcQuadDivMaisUm(i, j) {
    return (i*i) / (j+1);
}

function funcUmOuCinco(i, j) {
    return i > j ? 1 : (i < j ? 5 : 0);
}

function matrizBuilder(nLinhas, nColunas) {
    const matriz = new Array(nLinhas);
    
    for(let i = 0; i < matriz.length; i++) {
        matriz[i] = new Array(nColunas);
    }

    return matriz;
}

function criaMatriz(funcMatricial, nLinhas, nColunas) {
    let matriz = matrizBuilder(nLinhas, nColunas);

    for(let i = 0; i < nLinhas; i++) {
        for(let j = 0; j < nColunas; j++) {
            matriz[i][j] = funcMatricial(i, j);
        }
    }

    return matriz;
}

/* ----- Testes ----- */
// Ordenação
console.log("\n--- ORDENAÇÃO ---");
let arr = [4,2,1,5,2,1,6,9,13];
console.log("Crescente: " + bubbleSort(arr, crescente));
arr = [4,2,1,5,2,1,6,9,13]; // reset ordem original
console.log("Decrescente: " + bubbleSort(arr, decrescente));
arr = [4,2,1,5,2,1,6,9,13]; // reset ordem original
console.log("Crescente impar: " + bubbleSort(arr, crescenteImpar));
arr = [4,2,1,5,2,1,6,9,13]; // reset ordem original
console.log("Decrescente par: " + bubbleSort(arr, descrescentePar));

// Criptografia
console.log("\n--- CRIPTOGRAFIA ---");
console.log(criptografia("Teste da cifra de cesar (teste parenteses).", cifraDeCesar));

// Verificação
console.log("\n--- VERIFICA NÚMERO ---");
console.log(verificaNum("3", ehImpar)); // True
console.log(verificaNum(2, ehImpar)); // False
console.log(verificaNum(21, ehPrimo)); // False
console.log(verificaNum("13", ehPrimo)); // True

// Transforma string
console.log("\n--- TRANSFORMA STRING ---");
console.log(transformaString("Teste Vogais Upper Case (teste parenteses).", vogaisUpperCase));
console.log(transformaString("Teste Vogais LOwer CAsE (teste parenteses).", vogaisLowerCase));
console.log(transformaString("Teste Consoantes Upper Case (teste parenteses).", consoantesUpperCase));
console.log(transformaString("Teste Consoantes Lower Case (teste parenteses).", consoantesLowerCase));

// Função matricial
console.log("\n--- FUNÇÃO MATRICIAL ---");
console.log("Sum: " + criaMatriz(funcSum,3,2));
console.log("Sub: " + criaMatriz(funcSub,3,5));
console.log("Multi: " + criaMatriz(funcMulti,2,3));
console.log("Equal: " + criaMatriz(funcEqual,1,3));
console.log("QuadDivMaisUm: " + criaMatriz(funcQuadDivMaisUm,3,3));
console.log("UmOuCinco: " + criaMatriz(funcUmOuCinco,10,3));