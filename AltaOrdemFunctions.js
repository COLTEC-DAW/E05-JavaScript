// Ordenação

function ordenacao(array, criterio)
{
    for (var i = 0; i < array.length; i++)
    {
        for (var j = 0; j < (array.length - 1); j++)
        {
            let x = j+1;
            if(criterio(array[j], array[(x)]) == true)
            {
                var aux = array[j];
                array[j] = array[(x)];
                array[(x)] = aux;
            }
        }
    }
    return array;
}

var vetor = [90,2,7,1,5];
console.log(vetor);
console.log(ordenacao(vetor, function(x, y) {return x > y})); //Crescente
console.log(ordenacao(vetor, function(x, y) { return x < y})); //Descrescente

console.log(ordenacao(vetor, function(x, y)
{

    if ((x % 2 == 0) && (y % 2 == 0)){ return x < y; }
    else if ((x % 2 != 0) && (y % 2 != 0)) { return x > y; }
    else if (x % 2 == 0){ return true ;}
    else if (x % 2 != 0){ return false ;}
} ));



// Criptografia
function CifradeCesar(char, numberchange) 
{
    var index = char.charCodeAt(0);

    if (char == char.toLowerCase()) 
    {
        if ((index + numberchange) > 122) 
        {
            char = String.fromCharCode((index + numberchange) - 26);
        } else 
        {
            char = String.fromCharCode(index + numberchange);
        }
    } 
    else 
    {
        if ((index + numberchange) > 90) 
        {
            char = String.fromCharCode((index + numberchange) - 26);
        } else 
        {
            char = String.fromCharCode(index + numberchange);
        }
    }

    return char;
}

function cryptfunt(string, funcao, numberchange) 
{
    var aux = "";

    for (var i = 0; i < string.length; i++) 
    {
        aux += funcao(string[i], numberchange);
    }

    return aux;
}

console.log(cryptfunt("ABRACO", CifradeCesar, 4)); 




// Verificando um número
function check(number, criterion) 
{
    return criterion(number);
}

function impar(number) 
{
    return (number % 2 != 0);
}

function primo(number) 
{
    var cont = 0;
    
    for (var i = 2; i < number; i++) 
    {
        if (number % i == 0) 
        {
            cont++;
            break;
        }
    }

    // Se o número for primo, retorna true; caso contrário, retorna false
    return (cont == 0);
}

console.log(check(27, primo) ? "O número é PRIMO!" : "O número NÃO É IMPAR!");

console.log(check(8, impar) ? "O número é IMPAR!" : "O número NÃO É IMPAR!"); 



// Transformando String

function changeWord(string, transformation)
{

    var vetor = string.split('');

    for ( var i = 0; i < vetor.length; i++)
    {
        vetor[i] = transformation(vetor[i]);
    }

    return vetor.join('');
}

var vogais = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];

console.log(changeWord("bom dia meu amigo", function(frase) 
{ 
    if(vogais.includes(frase)) {return frase.toUpperCase(); }
    return frase;
} ))

console.log(changeWord("bom dia meu amigo", function(frase) 
{ 
    if(vogais.includes(frase)) {return frase.toLowerCase(); }
    return frase;
} ))

console.log(changeWord("bom dia meu amigo", function(frase) 
{ 
    if (!(vogais.includes(frase))) {return frase.toUpperCase(); } 
    return frase;
} ))

console.log(changeWord("bom dia meu amigo", function(frase) 
{ 
    if (!(vogais.includes(frase))) {return frase.toLowerCase(); }
    return frase;
} )) 


// Funções Matriciais
function novaMatriz(colums, matricialFunction)
{

    var matriz = [];

    for (var i = 0; i < colums; i++)
    {
        var linha = [];

        for (var j = 0; j < colums; j++)
        {

            linha.push(matricialFunction(i,j));
        }
        matriz.push(linha);
    }

    return matriz;
}

console.log(novaMatriz(2, function(i,j){ return i + j;}));

console.log(novaMatriz(3, function(i,j){ return i * j;}));

console.log(novaMatriz(4, function(i,j){ return i == j ? 1 : 0;}));

console.log(novaMatriz(5, function(i,j){ return i^2/(j+1);}));

console.log(novaMatriz(6, function(i,j){ return i > j ? 1 : (i < j ? 5 : 0);}));
