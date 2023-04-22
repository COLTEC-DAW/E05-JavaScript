let char = "# # # #"; //conjunto de caracteres que se repetem
let recuo; //recuo que varia de acordo com a linha

var linhas = prompt("Numero de linhas: "); // Numero de Linhas

for(let i = 0; i < linhas; i++){
    
    if(i % 2 === 0){
        //Linhas sem recuo são pares ou igual a zero
        recuo = "";
    }else{
        //Linhas com recuo são impares
        recuo = " ";
    }
    
    let chars = recuo + char; // Soma recuo e conjunto de caracteres
    console.log(chars);
}