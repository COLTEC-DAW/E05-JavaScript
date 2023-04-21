const rep = prompt("Informe quantas linhas o tabuleiro terá: ");

for (i = 1; i <= rep; i++) {
    let tab = "# # # #";
    
    if( i % 2 == 0){
        console.log(' ' + tab);
    }
    else{
        console.log(tab);
    }
}