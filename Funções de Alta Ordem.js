//! FINALIZAR
console.log("Ordenação\n")
function bubbleSort(vet, criterio) 
{
    concluido = 0
    aux = 0
    while (concluido == 0) 
    {
        if (condition)
        {
            
        }
    }
    // Ordenação
    // Implemente uma função que faça a ordenação de um vetor. O critério de ordenação deverá ser enviado por parâmetro, na forma de função. A ordenação deverá seguir o algoritmo bubble sort.
    
    // Teste a ordenação criando critérios de ordenação crescente, descrente, crescente ímpares, decrescente pares.    
}
console.log("\n")


console.log("Encriptação\n")
function crypt(frase, criterio)
{
    vet = frase.split('');
    chave = Math.floor(Math.random() * 27);

    
    for ( var i = 0; i < vet.length; i++)
    {
        vet[i] = criterio(vet[i], chave);
    }
    return (vet.join())
}

function cifraCezar(caractere, chave)
{
    if (caractere.toUpperCase().charCodeAt(0) + chave <= 90) 
    {
        return String.fromCharCode(caractere.charCodeAt(0) + chave)
    }else return String.fromCharCode(caractere.charCodeAt(0) + chave - 26)
}

texto = "Enzozozo"
console.log("Texto a ser encriptado: " +  texto)
console.log("Texo encriptado: " + crypt(texto, cifraCezar))
console.log("\n")


console.log("Verificação de número\n")

function testaNum(num, condicao) {return condicao(num)}

function ePrimo(num) 
{
    for (i = 2; i < num; i++)
    {
        if (num % i == 0) return false
    }
    return true
}
function eImpar(num) 
{
    if (num % 2 == 0) return false
    else return true
}

num = 6

//primo ou não
if (testaNum(num, ePrimo)) console.log("o número " + num + " é primo")
else console.log ("o número " + num + "não é primo")

//pra ou ímpar
if (testaNum(num, eImpar)) console.log("o número " + num + " é impar")
else console.log("o número " + num + " é par")


//!COMEÇAR
function stringTransform()
{
// Transformações em uma String
// Implemente uma função que faça transformações nos caracteres de uma string. A transformação a ser realizada deverá ser enviada por parâmetro, na forma de função.

// Teste a função passando como parâmetro as seguintes transformações:

// Caixa alta nas vogais
// Caixa alta nas consoantes
// Caixa baixa nas vogais
// Caixa baixa nas consoantes
}

//!COMEÇAR
function criaMatriz()
{

}
// Funções Matriciais
// Implemente uma função que crie matrizes com base em uma função matricial com base nos índices da matriz. A função matricial deverá ser enviada por parâmetro, na forma de função.

// Teste o exercício passando como parâmetro as seguintes funções matriciais:

// m[i,j] = i + j
// [i,j] = i * j
// m[i,j] = i == j ? 1 : 0
// [i,j] = i^2/(j+1)
// m[i,j] = i > j ? 1 : (i < j ? 5 : 0)