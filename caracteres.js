var palavra = prompt("Qual palavra deve ser analisada? ");
var letra= prompt("Qual letra deve ser procurada? ");

function countChars(palavra, letra){
    var arrayPalavra = palavra.split();
    var numero = 0;
    for(let i=0;i<palavra.length;i++){
        if(palavra[i]==letra){
            numero++;
        }
    }
    console.log("A letra" + letra + " aparece " + numero + " vezes na palavra " + palavra);
}

countChars(palavra, letra);