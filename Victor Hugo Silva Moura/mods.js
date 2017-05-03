function mod2(num){
	if(num === 0) return true;
	else if(num < 0) return false;
	else return mod2(num-2);
}

function modn(num, mod){
	if(num === 0) return true;
	else if(num < 0) return false;
	else return modn(num-mod, mod);
}