var numLinhas = prompt("Digite o número de linhas: ");

for(let comp = 1; comp <= numLinhas; comp++){

    if(comp % 2 == 0){

        document.write("&nbsp");

    }

    document.write("# # # #");

    document.write("<br>");

}