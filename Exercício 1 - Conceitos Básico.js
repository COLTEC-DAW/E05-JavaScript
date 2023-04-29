var qntdelinhas = prompt("Digite um tamanho p/ o triangulo ser criado:");

var numporlinha=2;

//para a quantidade de linhas que o usuário quer
for(i = 0; qntdelinhas > i; i++)
{
    //para cada linha
    for(j = 0; j < numporlinha; j++)
    {
        console.log("#");
    }
    console.log("\n");
    numporlinha++;
}
