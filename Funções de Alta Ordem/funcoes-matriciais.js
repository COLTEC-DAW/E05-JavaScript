function soma(i,j){
	return i+j;
}
function mult(i,j){
	return i*j;
}
function igual(i,j){
	return i == j ? 1 : 0;
}
function expr(i,j){
	return (i*i)/(j+1);
}
function cond(i,j){
	return i > j ? 1 : (i < j ? 5 : 0);
}

function geradorMatriz(a,b,funcao){
	var matriz=[[],[]];

	for(var i=0;i<a;i++){
		for(j=0;j<b;j++){
			matriz[i][j] = funcao(i,j);
		}
	}
	return matriz;
}

// Comandos de teste da função

function imprimeMatriz(mat,a,b){
	var linha="";
	for(var i=0;i<a;i++){
		for(var j=0;j<b;j++){
			linha += mat[i][j] + " ";			
		}
		console.log(linha);
		linha="";
	}
}

console.log(geradorMatriz(2,2,soma));
imprimeMatriz(geradorMatriz(2,2,soma),2,2);

console.log(geradorMatriz(2,2,mult));
imprimeMatriz(geradorMatriz(2,2,mult),2,2);

console.log(geradorMatriz(2,2,igual));
imprimeMatriz(geradorMatriz(2,2,igual),2,2);

console.log(geradorMatriz(2,2,expr));
imprimeMatriz(geradorMatriz(2,2,expr),2,2);

console.log(geradorMatriz(2,2,cond));
imprimeMatriz(geradorMatriz(2,2,cond),2,2);