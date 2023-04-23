var tam = prompt("Digite o tamanho do seu triângulo - ");
var velha = " ";

    for(i = 0; i < tam; i++){
        for(j = 0; j <= i; j++){
            velha += "#"
        }
        velha += "\n";
    }

console.log(velha);