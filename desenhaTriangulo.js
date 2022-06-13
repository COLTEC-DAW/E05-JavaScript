function desenhaTriangulo(){
    let numLinhas = parseInt(document.getElementById("inputTriangulo").value);
    for(let i = 1; i < numLinhas; i++){
        for(let j = 0; j < i; j++){
            console.log("#");
        }
        console.log("\n");
    }
}