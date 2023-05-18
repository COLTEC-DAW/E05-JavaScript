var palindromo = prompt("Digite um palíndromo:");

var tampalindromo = palindromo.length;

var resultado = true;
//para a quantidade de linhas que o usuário quer
for(i = 0; tampalindromo > i; i++)
{
    //para cada letra
    if(palindromo[i] != palindromo[tampalindromo-1])
    { 
        resultado = false;
        break; 
    }
    else
    { tampalindromo--;}
}
if(resultado == true){   console.log("É um palíndromo. ");   }

else {  console.log("Não é um palíndromo. ");   }
