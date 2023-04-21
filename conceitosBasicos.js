function decide_exercicio(){
    var exercicio=prompt("Qual exercício deseja executar?");
    switch(exercicio){
    case 'triangulo':imprime_triangulo();
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

decide_exercicio();