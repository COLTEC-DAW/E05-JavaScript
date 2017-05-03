function upperVogal(c) {
	var aux = c.toLowerCase();
    return (aux==='a'||aux==='e'||aux==='i'||aux==='o'||aux==='u')? c.toUpperCase():c;
}

function upperConsoante(c) {
	var aux = c.toLowerCase();
    return !(aux==='a'||aux==='e'||aux==='i'||aux==='o'||aux==='u')? c.toUpperCase():c;
}

function lowerVogal(c) {
	var aux = c.toLowerCase();
	return (aux==='a'||aux==='e'||aux==='i'||aux==='o'||aux==='u')? c.toLowerCase():c;
}

function lowerConsoante(c) {
	var aux = c.toLowerCase();
    return !(aux==='a'||aux==='e'||aux==='i'||aux==='o'||aux==='u')? c.toLowerCase():c;
}

function transformacao(c,metodo){
	var result = "";
    for(var i=0;i<c.length;i++){
    	result = result.concat(metodo(c[i]));
    }
    return result;
}


var string = "testando";
document.write(transformacao(string,upVogal) + "</br>");
document.write(transforma(string,upConsoante) + "</br>");


string = "TESTANDO";
document.write(transformacao(string,downVogal) + "</br>");
document.write(transformacao(string,downConsoante));