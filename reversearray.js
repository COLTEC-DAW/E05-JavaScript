var document = Document;
function reversearray(frase){
    return frase.split('').reverse().join('');
}

function reversearraypage(){

    let frase = document.getElementById("input_reverse").value;
    let containerreverse = document.getElementById("reversearray");

    containerreverse.innerHTML += `A frase reversa: ${reversearray(frase)}`;
}