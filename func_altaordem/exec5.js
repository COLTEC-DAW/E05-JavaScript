function soma(i,j){return i+j;}

function multiplicacao(i,j){return i*j;}

function iguala(i,j){return i==j?1:0;}

function potencia(i,j){return (i*i)/(j+1);}

function maior(i,j){return i>j?1:(i<j?5:0);}
 
function imprimeMatriz(matriz,i,j){
	for(var x=0;x<i;x++){

    	for(var z=0;z<j;z++){
    		document.write(matriz[x][z]+" - ");
        }
        document.write("</br>");

    }

    document.write("</br>");
}
 
function criaMatriz(i,j,opcao){

	var matriz = [[],[]];

    for(var x=0;x<i;x++){

	    for(var z=0;z<j;z++){
    	    matriz[x][z] = opcao(x,z);
        }

    }

    imprimeMatriz(matriz,i,j);
    return matriz;
}
 
var mat1=criaMatriz(2,2,soma);
var mat2=criaMatriz(2,2,multiplicacao);
var mat3=criaMatriz(2,2,iguala);
var mat4=criaMatriz(2,2,potencia);
var mat5=criaMatriz(2,2,maior);