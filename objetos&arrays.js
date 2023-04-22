// Atividade 1 - Intervalos
function range(min, max, i) {
    for (let j = min; j <= max; j+=2) {
        console.log(j)
    }
}

//Atividade 2 - Revertendo arrays
function reverseArray(array) {
    const reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

//Atividade 3 - Listas
function toList(array) {
    if (array.length === 0) {
        return null;
    }

    let list = {
        value: array[0],
        rest: null
    };

    let noAtual = list;
    for (let i = 1; i < array.length; i++) {
        const novoNo = {
            value: array[i],
            rest: null
        };

        noAtual.rest = novoNo;
        noAtual = newNode;
    }
    return list;
}

// Atividade 4 - Deep Equals
function deepEquals(obj1, obj2) {
    // Compara items
    if (obj1 === obj2) {
        return true
    }

    // Se algum for nulo ou não for objeto retorna falso
    if (obj1 === null || obj2 === null || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return false
    }

    // Compara valores dentro de arrays do objeto
    // Ex.: {a: [1, 2, 3]} 
    if (Array.isArray(obj1)) {
        if (obj1.length !== obj2.length) {
            return false
        }

        for (let i = 0; i < obj1.length; i++) {
            if (!deepEquals(obj1[i], obj2[i])) {
                return false
            }
        }
        return true
    }

    // Compara valores dentro de objetos do objeto
    // Ex.: {a: {b: 1}} 
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false
    }
    
    for (const key of keys1) {
        if (!keys2.includes(key) || !deepEquals(obj1[key], obj2[key])) {
            return false
        }
    }
    return true
}

range(1, 10, 2)
console.log("\n".repeat(2))

console.log(reverseArray([1, 2, 3]))
console.log("\n".repeat(2))

const array = [1, 2, 3]
console.log(toList(array))
console.log("\n".repeat(2))

const obj1 = {a: 1, b: [2, 3, 4], c: {c: 2}};
const obj2 = {a: 1, b: [2, 3, 4], c: {c: 2}};
const obj3 = {a: 1, b: [2, 3, 4], c: {c: 3}};
console.log(deepEquals(obj1, obj2));
console.log(deepEquals(obj1, obj3));
