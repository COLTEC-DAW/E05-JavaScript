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

function xadrez (){

    var num = prompt("Digite o tamanho do xadrez");

    for (var i = 0; i < num; i++){

        for(var j = 0; j < num; j++){
            if (j % 2 == i % 2) {
                console.log("#");
            }
            else {
                console.log("");
            }
        }
        console.log('\n');
    }
} 

xadrez ();