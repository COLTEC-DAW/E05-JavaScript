function mod2(number){

    let num = number - 2;
    let retorno;

    if(num >= 2){

        retorno = mod2(num);

    }
    else if (num < 2){

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
var bool = mod2(numUser);

if(bool == true){

    alert("O número "+ numUser +" é divisível por 2!");

}
else {

    alert("O número "+ numUser +" não é divisível por 2!");

}