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
        console.log("tudo igual");
        return true;
    } 
    // se a quantidade de keys é diferente os objetos também são
    else{
        console.log("quantidade diferente de keys");
        return false;
    }
}

// Objetos para teste
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

console.log(deepEquals(obj1, obj2));