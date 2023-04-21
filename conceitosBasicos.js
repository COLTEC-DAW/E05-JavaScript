function decide_exercicio(){
    var exercicio=prompt("Qual exercício deseja executar?");
    switch(exercicio){
    case 'triangulo':imprime_triangulo();
    break;
    case 'xadrez':imprime_jogo_xadrez();
    break;
    }
}

function  imprime_triangulo(){
    const numLinhas = prompt("Digite a quantidade de linhas que deseja no triângulo");
    var i=0, j=0;
    var string="";
    for(i=0;i<numLinhas;i++){
        string="";
        for(j=0;j<=i;j++){
            string+="#";
        }
        console.log(string);
    }
}

function imprime_jogo_xadrez(){
    const numLinhas = prompt("Digite a quantidade de linhas que deseja no tabuleiro de xadrez");
    var i=0, j=0;
    var string="";
    for(i=0;i<numLinhas;i++){
        string="";
        if(i%2===0){
            for(j=0;j<4;j++){
                string+="#";
                string+=" ";
            }
        }else{
            for(j=0;j<4;j++){
                string+=" ";
                string+="#";
            }
        }
        console.log(string);
    }
}

decide_exercicio();