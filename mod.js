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
