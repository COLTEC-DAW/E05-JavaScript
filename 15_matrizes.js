function somaIJ(i, j) {return i+j;};

function produtoIJ(i, j) {return i*j;};

function igualdadeIJ(i, j) {return i==j ? 1 : 0;};

function Iquadrado_Sobre_Jmais1(i, j) {return i*i/(j+1);};

function ImaiorJeh1_ImenorJeh5_IigualJeh0(i, j) {return i>j ? 1 : (i<j ? 5 : 0);};

function criaMatriz(tam, criterio){
    var m = [[],[]];
    console.log("oi")
    for (var i=0; i<tam; i++){
        console.log("i " +i);
        for (var j=0; j<tam; j++){
            console.log("j "+j);
            m[i][j] = criterio(i,j);
        }
    }
    return m;
}