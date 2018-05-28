function geraMatriz(i, j, criteria, tam){
    
        var x = new Array(tam);
        for (var controle = 0; controle < tam; controle++) {
            x[controle] = new Array(tam);
        }      
    
        for (controle = 0; controle < tam; controle++) {
            for (controle2 = 0; controle2 < tam; controle2++) {
                x[controle][controle2]=criteria(i, j);
            }
        }
        return x;
    }
    
    function soma(i, j) {
        return i+j;
    }
    
    function multiplicacao(i, j) {
        return i*j;
    }
    
    function operacao3(i, j) {
        return i == j ? 1 : 0;
    }
    
    function operacao4(i, j) {
        return i^2/(j+1);
    }
    
    function operacao5(i, j) {
        return i > j ? 1 : (i < j ? 5 : 0);
    }
    
    console.log(geraMatriz(12,13, multiplicacao, 3)); 