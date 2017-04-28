function criaMatrizes (funcao)
{
    return funcao();
}

function funcao1 () //m[i,j] = i + j
{
    var matriz = [[],[]];

    for (var i=0; i<5; i++)
    {
        for (var j=0; j<5; j++)
        {
            matriz[[i],[j]] = i + j;
        }
    }

    return matriz;
}

function funcao2 () //[i,j] = i * j
{
    var matriz = [[],[]];

    for (var i=0; i<5; i++)
    {
        for (var j=0; j<5; j++)
        {
            matriz[[i],[j]] = i * j;
        }
    } 

    return matriz;
}

function funcao3 () //m[i,j] = i == j ? 1 : 0 
{
    var matriz = [[],[]];

    for (var i=0; i<5; i++)
    {
        for (var j=0; j<5; j++)
        {
            if (i == j)
                matriz[[i],[j]] = 1;
            else
                matriz[[i],[j]] = 0;
        }
    }   

    return matriz; 
}

function funcao4 () //[i,j] = i^2/(j+1)
{
    var matriz = [[],[]];

    for (var i=0; i<5; i++)
    {
        for (var j=0; j<5; j++)
        {
            matriz[[i],[j]] = Math.pow(i, 2)/(j+1);
        }
    }   

    return matriz; 
}

function funcao5 () //m[i,j] = i > j ? 1 : (i < j ? 5 : 0)
{
    var matriz = [[],[]];

    for (var i=0; i<5; i++)
    {
        for (var j=0; j<5; j++)
        {
            if (i > j)
                matriz[[i],[j]] = 1;
            else if (i < j)
                matriz[[i],[j]] = 5;
            else
                matriz[[i],[j]] = 0;
        }
    }   

    return matriz; 
}

console.log (criaMatrizes(funcao1));
console.log (criaMatrizes(funcao2));
console.log (criaMatrizes(funcao3));
console.log (criaMatrizes(funcao4));
console.log (criaMatrizes(funcao5));