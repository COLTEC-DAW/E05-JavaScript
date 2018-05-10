function par (num) {
    return num % 2 === 0;
}

function impar (num) {
    return num % 2 !== 0;
}

function primo (num) {
    var cont = 0;
    for (let index = 1; index <= num; index++) {
        if (num % index === 0) {
            cont++;
        }    
    }      
    return cont === 2;
}

function verify (num, algorithm) {
    return algorithm(num);
}

verify(47, primo);