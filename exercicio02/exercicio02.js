const input = document.getElementById("input");
const output = document.getElementById("output");
const btn = document.getElementById("btn");

btn.addEventListener('click', function(){
    output.innerHTML = "";
    const lim = parseInt(input.value);
    let resultado = "";
    for(let i =0;i<=lim;i++){
        if(i%2===0){
            resultado+="&nbsp#&nbsp#&nbsp#&nbsp#<br>";
        } else{
            resultado+="#&nbsp#&nbsp#&nbsp#&nbsp<br>";
        }
    }
    output.innerHTML = resultado;
});
