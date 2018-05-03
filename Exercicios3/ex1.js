function sorting(vet, func){
  var aux = 0;
  for(var i = 0; i<5; i++){
		for(var j = 0; j<4; j++){
			if(func(vet[j], vet[j + 1])){
				aux = vet[j];
				vet[j] = vet[j+1];
				vet[j+1] = aux;
			}
		}
	}
}

function maior(a, b){
  if(a > b)
    return true;
  else return false;
}

function menor(a, b){
  if(a < b)
    return true;
  else return false;
}


function cImpares(a, b){
  if(a % 2 == 1 && b % 2 == 1)
    if(a > b)
    return true;
    else return false;
  else if(a % 2 == 1)
    return true;
  else if(b % 2 == 1)
    return false;
  else if (a > b)
    return true;
  return false;
}
