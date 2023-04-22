function modNum(number, mod){

    let num = number - mod;
    let retorno;

    if(num >= mod){

        retorno = modNum(num, mod);

    }
    else if (num < mod){

        if(num == 0){

            return true

        }
        else {

            return false;

        }
        
    }

    return retorno;

}

var numUser = prompt("Digite um número: ");
var modUser = prompt("Digite um número para verificar a divisibilidade: ");
var bool = modNum(numUser, modUser);

if(bool == true){

    alert("O número "+ numUser +" é divisível por "+ modUser +"!");

}
else {

    alert("O número "+ numUser +" não é divisível por "+ modUser +"!");

}