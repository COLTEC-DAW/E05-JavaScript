function verifica(action, num){
	if(action(num)==true){
		return true
	}
	else{
		return false
	}
}


function impar(x){
	if(x%2 == 1){
		return true;
	}
	else{
		return false;
	}
}
