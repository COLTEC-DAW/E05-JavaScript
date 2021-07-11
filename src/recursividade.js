var mod = function(num, mod){
    if (num % mod == 0){ return true; }
    else { return false; }
}
var mod2 = function(num){
    if ( num % 2 == 0) { return true; }
    else { 
        console.log(mod(num, num % 2));
        return false;
    }
}
//main
var num = prompt("Digite o número que deseja saber se é divisível por 2: ", "Valor");
console.log(mod2(num));