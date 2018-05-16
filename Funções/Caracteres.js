
var frase = prompt("Digite sua frase : ")
var c = prompt("caractere desejado : ")


function countChars(frase,c){
	var cont=0;
	for(var i=0;i<frase.length;i++){   // conta quantas letras tem 
		if(frase[i]==c)                // Anda pelo array procurando a letra
			cont++;                    // cria cont para retornar as letras
    }
	return cont;
}

countChars(frase,c)
