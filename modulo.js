function mod(num, div) {
    // Se os números são iguais, é divisivel
    if(num === div) {
        return true;
    }
    // Se o número for menor que o divisor, não é divisivel
    else if(num < div) {
        return false;
    }
    // Se a resposta não foi encontrada chama mod novamente com num = num - div
    else {
        return mod(num - div, div);
    }
}

function mod2(num) {
        // Se é igual a 2, é divisivel
        if(num === 2) {
            return true;
        }
        // Se o número for menor que 2, não é 2isivel
        else if(num < 2) {
            return false;
        }
        // Se a resposta não foi encontrada chama mod2 novamente com num = num - 2
        else {
            return mod2(num - 2, 2);
        }
}

// Teste
console.log("1: " + mod2(4)); // true
console.log("2: " + mod2(7)); // false
console.log("3: " + mod(100, 10)); // true
console.log("4: " + mod(10, 3)) // false