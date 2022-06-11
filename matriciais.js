function somaMatriz(i, j)
{
    return i + j;
}

function produtoMatriz(i, j) 
{
    return i * j;
}

function binarioMatriz(i, j)
{
    return i == j ? 1 : 0;
}

function elevarMatriz(i, j) 
{
    return i ^ 2 / (j + 1);
}

function contaMatriz(i, j) 
{
    return i > j ? 1 : (i < j ? 5 : 0);
}

function funcaoMatricial(tam, calculo)
{
    var matriz = [];
    for(var i = 0; i < tam; i++) 
    {
        matriz[i] = [];
        for(var j = 0; j < tam; j++) 
        {
            matriz[i][j] = calculo(i, j);
        }
    }
    
    return matriz;
}

function mainMatriciais()
{
    console.log('Soma Matriz:');
    console.log(funcaoMatricial(5, somaMatriz));
    console.log('\nProduto Matriz:');
    console.log(funcaoMatricial(5, produtoMatriz));
    console.log('\nBinario Matriz:');
    console.log(funcaoMatricial(5, binarioMatriz));
    console.log('\nElevar Matriz:');
    console.log(funcaoMatricial(5, elevarMatriz));
    console.log('\nConta Matriz:');
    console.log(funcaoMatricial(5, contaMatriz));

}
