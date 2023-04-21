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

// Função que retorna o array passado como parâmetro invertido
function reverseArray(array) {
    let reverse = [];
    let pos = 0;

    // Preenche array invertido
    for(i = array.length - 1; i >= 0; i--) {
        reverse[pos] = array[i];
        pos++;
    }

    return reverse;
}

// Função que transforma um array em uma lista
function toList(array) {
    // Valor do fim da lista
    let list = null;

    // Preenche lista a partir do final do array
    for (i = array.length - 1; i >= 0; i--) {
        list = {rest: list, value: array[i]};
    }

    return list;
}

// Retorna true se os objetos forem iguais e falso se forem iguais
function deepEquals(obj1, obj2) {
    // Verifica se um deles é nulo
    if(obj1 === null || obj2 === null) {
        // Ambos são nulos
        if(obj1 === obj2) {
            return true;
        } 
        // Só um é nulo
        else {
            return false;
        }
    }
    
    // Se o tipo é diferente os objetos são diferentes
    if(typeof obj1 !== typeof obj2) {
        return false;
    }

    // Lista de keys
    let keysObj1 = Object.keys(obj1);
    let keysObj2 = Object.keys(obj2);

    // Se eles tem uma mesma quantidade de keys compara key por key
    if(keysObj1.length === keysObj2.length) {
        for(i = 0; i < keysObj1.length; i++) {
            let key = keysObj1[i];

            // Se não tiver alguma das propriedades presentes no 1 retorna false
            if(!obj2.hasOwnProperty(key)) {
                return false;
            }
        }

        // Se chegou até aqui é tudo igual
        return true;
    } 
    // se a quantidade de keys é diferente os objetos também são
    else{
        return false;
    }
}

/* Testes */
// Range
console.log("4 a 10: " + range(4, 10));
console.log("4 a 10 de 3 em 3: " + range2(4, 10, 3));

// reverseArray
let array1 = [1,2,3,4,5,6,7,8,9,10];
console.log(reverseArray(array1));

// ToList
let array2 = [1,2,3,4,5,6,7,8,9,10];
console.log(toList(array2));

// DeepEquals
var obj1 = {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      state: "NY",
      country: "USA"
    },
    pets: ["dog", "cat", "fish"]
};
  
var obj2 = {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      state: "NY",
      country: "USA"
    },
    pets: ["dog", "cat", "fish"]
};

console.log(deepEquals(obj1, obj2) ? "Objetos são iguais" : "Objetos são diferentes");