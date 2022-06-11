var document = Document;
function countchars(frase, char){
    let contagem = 0;
    frase.toLowerCase();
    char.toLowerCase();
    for(let i = 0; i <= frase.length; i++){
        if(frase[i] == char){
            contagem++;
        }
    }
    return contagem;
}

function ccpag(){

    let frase = document.getElementById("inputcc").value;
    let char = document.getElementById("inputccchar").value;
    let containercc = document.getElementById("cc");

    containercc.innerHTML += `A frase ${frase} contém ` + countchars(frase, char) + ` do caracter "${char}".`;
}