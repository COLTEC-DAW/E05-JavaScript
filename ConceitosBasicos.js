// Conceitos Básicos

// Desenhando um triângulo
function triangulohashtag()
{

    var linhas = prompt("Por favor digite quantas linhas terá o seu triângulo: ");
    var triangulo = "#", i;
    for (i = 0; i < linhas; i++) 
    {
        if (i != 0)
        {
            triangulo += "#"
        }
        console.log(triangulo + "\n");
    }
}

// Tabuleiro de Xadrez
function xadrez()
{

    var linhas = prompt("Por favor digite quantas linhas terá o seu tabuleiro de xadrez: ");
    var i;
    for(i = 0; i <= linhas; i++)
    {
        if(i % 2 != 0)
        {
            console.log("# # # #\n");
        }
        else
        {
            console.log(" # # # #\n");
        }
    }
}

// Verificando Palíndromos
function palindromo()
{

    var palavra = prompt("Digite uma palavra para saber se é um palíndromo: ");
    var i, teste;
    for(i = 0; i < (palavra.length/2); i++)
    {
        if(palavra[i] != palavra[palavra.length - i - 1])
        {
            teste = false;
        }
        else
        {
            teste = true;
        }
    }
    if(teste == true)
    {
        alert("É um palíndromo.");
    }
    else
    {
        alert("Não é um palíndromo.");
    }
}

// Um programa diferente
function diferentprogram()
{
    var i;
    for(i = 1; i <= 100; i++)
    {
        if((i % 3 == 0) & (i % 5 == 0))
        {
            console.log("FizzBuzz");
        }
        else if(i % 3 == 0)
        {
            console.log("Fizz");
        }
        else if(i % 5 == 0)
        {
            console.log("Buzz");
        }
        else
        {
            console.log(i);
        }
    } 

}


