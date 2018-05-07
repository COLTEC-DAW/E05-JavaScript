function mod2 (number) {
	if (number >= 2){
		return mod2(number-2);
	}
	else if(number == 1){
		return false;
	}
	else if(number == 0){
		return true;
	}
}

function modx(number, mod) {
	if (number >= mod){
		return modx(number-mod, mod);
	}
	else if(number == 0){
		return true;
	}
	else if(number < mod){
		return false;
	}
}

