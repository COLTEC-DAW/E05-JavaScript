function DesenhandoUmTriangulo(){
 
    var tam = prompt("Digite o tamanho do triangulo:");

    for (var i = 0; i < tam; i++) {

        for (var j = 0; j <= i; j++)
            {
                console.log("#");
            }
        console.log("\n");
    }
}

DesenhandoUmTriangulo();