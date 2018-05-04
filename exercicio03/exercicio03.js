const input = document.getElementById("input");
const output = document.getElementById("output");
const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    let frase = input.value;
    frase = frase.replace(/\s+/g, '');
    frase = frase.toLowerCase();
    console.log(frase);
    let fraseIvertida = frase.split('').reverse().join('');
    if(frase.localeCompare(fraseIvertida)===0){
        output.innerHTML = "Sim, é um palindromo"
        output.style.color = "#0F0";
    } else{
        output.innerHTML = "Não, não é um palindromo"
        output.style.color = "#F00";
    }
})