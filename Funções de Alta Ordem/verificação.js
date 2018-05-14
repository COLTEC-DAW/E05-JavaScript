var n = 5;

var par = function (n) {
    return (n % 2 == 0);
}

var primo = function (n) { 
    if(n == 2){       //   ¯\_(ツ)_/¯
        return true;
    }
    for (let i = 2; i < n; i++) {
        if(n % i == 0) {
            return false;
        }
        else{
            return true;
        }
    }
}

function verifica(criterio) {
    if (criterio) {
        return true
    }
    else{
        return false;
    }
}

console.log(verifica(par(n))); //false
console.log(verifica(primo(n))); //true