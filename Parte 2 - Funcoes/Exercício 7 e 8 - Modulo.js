var num1 = prompt("Número:");

function mod2(number)
{
    if((number) % 2 == 0)
    {   return true;    }
    else {  return false;   }
}

//resultado e chamada da funcao

if((mod2(num1))==false)
{   console.log("o numero nao é divisivel por 2");  }

else if((mod2(num1))== true)
{   console.log("o numero nao é divisivel por 2");  }
