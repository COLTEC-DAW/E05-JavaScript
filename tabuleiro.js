var document = Document;
function tabuleiro(){
    let tamanho = parseInt(document.getElementById("input_tabuleiro").value);
    let containertabuleiro = document.getElementById("tabuleiro");
    
    let desenhoTabuleiro = "";
    for (let i = 0; i < tamanho; i++) {
        desenhoTabuleiro += "<p>";
        
        if(i%2 == 0) desenhoTabuleiro += "# # # #";
        else desenhoTabuleiro += "&nbsp;# # # #";
        
        desenhoTabuleiro += "</p>"
    }

    containertabuleiro.innerHTML = desenhoTabuleiro;
}