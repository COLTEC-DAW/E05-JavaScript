var verifica = function(numero, param){
    numero = parseInt(numero);

    return param(numero);
}

var impar = function(num){
    return (num%2==1);
}

var primo = function(num){
    for(var i = 2; i < num; i++){
        if(num % i === 0) return false;
    }
    return num > 1;
}

document.write(verifica(5, impar) + " " + verifica(7, primo) + "<br>");
document.write(verifica(8, impar) + " " + verifica(6, primo) + "<br>");
