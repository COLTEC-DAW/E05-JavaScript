// Desenhando Triangulo

function triangulo(nLinhas){
    for(var i=1;i<=nLinhas;i++){
        var aux = "";
        for(var j=0; j<i; j++){
            aux += "#";
        }
        console.log(aux);
    }
}

// Tabuleiro de Xadrez

function xadrez (num){

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

// Verificando Palíndromos

function Palindromo(num) {
    var ehPalindromo = true;
    var Num;
    Num = num.replace(/\s+/g, '').split('');

    for (var i = 0, j = (Num.length - 1); i < Num.length; i++, j--) {
        if (Num[i] != Num[j]) {
            ehPalindromo = false;
            break;
        }
    }

    return ehPalindromo;
}