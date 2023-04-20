var n_linhas = prompt ("Digite a quantidade de linhas");

for (i = 1, alt=true; i <=n_linhas; i++, alt=!alt) 
{
    var hash = "# # # # #"
    if (alt ==true) console.log(hash);
    else console.log (" "+hash);
}