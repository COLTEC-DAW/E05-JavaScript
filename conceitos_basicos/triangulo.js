var n_linhas = prompt ("Digite a quantidade de linhas");
for (i = 1; i <=n_linhas; i++) 
{
    for( j=0, hash="#" ; j<i ; j++ ) hash +="#";
    console.log(hash);
}