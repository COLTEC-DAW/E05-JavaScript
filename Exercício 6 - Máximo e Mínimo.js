
var num1 = prompt("Número 1:");
var num2 = prompt("Número 2:");

//calcula minimo
function calculaMinimo(num1, num2)
{
    if(num1 > num2) {   return num2;  }
    else {   return num1;    }
}

//calcula maximo
function calculaMaximo(num1, num2)
{
    if(num1 > num2) {   return num1;    }
    else {  return num2;   }
}

//resultado e chamada da funcao
console.log("Menor número: "+ calculaMinimo(num1, num2));
console.log("Maior número: "+ calculaMaximo(num1, num2));