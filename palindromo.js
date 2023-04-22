var palavra = prompt("Digite sua palavra - ");

var tam = palavra.length - 1;
var checa = true;

for(i = 0; i < palavra.length; i++){
    if(palavra[i] == palavra[tam]){
        tam--;
    }else{
        checa = false;
        break;
    }
}

if(checa == true){
    console.log("É um palíndromo! ");
}else{
    console.log("Não é um palíndromo...")
}