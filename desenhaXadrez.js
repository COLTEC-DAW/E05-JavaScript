function desenhaXadrez(){
    let numLinhas = parseInt(document.getElementById("inputXadrez").value);
    let xadrez = true;
    for(let i = 0; i < numLinhas; i++){
        if(xadrez){
            console.log("# # # #\n");
            xadrez = false;
        }
        else if(!xadrez){
            console.log(" # # # #\n");
            xadrez = true;
        }
    }
}