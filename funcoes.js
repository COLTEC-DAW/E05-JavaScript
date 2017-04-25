function min(a,b){
	if(a>b){
		return b;
	}
	else{
		return a;
	}
}
function max(a,b){
	if(a>b){
		return a;
	}
	else{
		return b;
	}
}

function mod2(n){
	if(n%2==0)
		return true;
	else
		return false;
}

function mod(n,mod){
	if(n%mod==0)
		return true;
	else
		return false;
}

function countChars(frase,c){
	var n=0;
	for(var i=0;i<frase.length;i++){
		if(frase[i] == c)
			n++;
	}
	return n;
}