var num1 = prompt("Número:");
var mod1 = prompt("Modulo:");

function mod(number, modinicio)
{
    if(number >= modinicio){    return mod(number - modinicio, modinicio);  }

    if(number == 0) {    return true;    }

    else {   return false;  }
}

//resultado e chamada da funcao

if(mod(num1, mod1)== false)
{   console.log(" Não é Divisivel por " + mod1);    }

else if(mod(num1, mod1)== true)
{   console.log(" É Divisivel por " + mod1);    }
