//Verifica se numero é impar
//Verifica se um numero é primo


function verificaNumeroImpar(numero) 
{
    if (numero % 2 == 0) 
    {
        console.log("O numero é par");
    }
    else 
    {
       console.log("O numero é impar");
    }
}


function verificaNumeroPrimo(numero) 
{
    var divisor = 2;
    var divisivel = false;

    while (divisor < numero) 
    {
        if (numero % divisor == 0) 
        {
            divisivel = true;
        }

        divisor++;
    }
    if (divisivel == false) 
    {
        console.log("O numero é primo");
    } 
    else
    {
        console.log("O numero não é primo");
    }
}

//pega numero do usuário no html
function mainVerifica()
{
    var numero = document.getElementById("input_verifica").value;
    verificaNumeroImpar(numero);
    verificaNumeroPrimo(numero);
}