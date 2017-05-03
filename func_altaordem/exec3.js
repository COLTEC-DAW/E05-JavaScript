function verificaImpar(num){return (!num%2==0);}

function verificaPrimo(num){
	var conf=0;

	for(var i=num;i>0;i--){
		if(num%i==0)
		conf++;
	}

	if(conf==2){
		return true;
	}

	else{
		return false;
	}

}

function verificaNumero(num, verificacao){
	return verificacao(num);
}

document.write(verificaNumero(9,verificaImpar)+"</br>");
document.write(verificaNumero(7,verificaPrimo));