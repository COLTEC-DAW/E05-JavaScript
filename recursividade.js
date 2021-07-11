var mod = function(numero, divisor){
    if(numero%divisor==0){
        return true;
    }else{
        return false;
    }
}

var num = prompt("(Recursividade) Digite um numero:");
var div = prompt("(Recursividade) Digite um divisor:");
if (mod(num, div)){
    document.write(num + " é divisivel por " + div + "<br>");
}else{
    document.write(num + " não é divisivel por " + div + "<br>");
}

