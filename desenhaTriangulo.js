function desenhaTriangulo(){
    let numLinhas = parseInt(document.getElementById("inputTriangulo").value);
    for(let i = 1; i < numLinhas; i++){
    var altura = "";
        for(let j = 0; j < i; j++){
            altura += "#";
        }
        console.log("altura");
    }
}
