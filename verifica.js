function par (num) {
    return num % 2 === 0;
}

function impar (num) {
    return num % 2 !== 0;
}

function primo (num) {
    var cont = 1;
    for (var i = 1; i <= num/2; i++) {
        if (num % i === 0) {
            cont++;
        }    
    }       
    return cont === 2;
}

function verify (num, algorithm) {
    return algorithm(num);
}

verify(47, primo); 