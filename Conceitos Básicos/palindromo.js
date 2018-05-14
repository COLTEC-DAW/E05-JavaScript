var Palavra;
var Tamanho = Palavra.length - 1;

Palavra = prompt("Palavra: ");

function Comparador() {
    for (let i = 0; i < Palavra.length; i++) {
        if (Palavra.charAt(i) !== Palavra.charAt(Tamanho)){
            return false;
        }
    Tamanho--;
    }
    return true;
}

function Resposta (Comparador) {
    if (Comparador) {
        console.log("É palíndromo.");
    }
    else{
        console.log("Não é palíndromo.");
    }
}

Resposta(Comparador());