function troc(vet, f) {
    do{
      var done = vet.length-1;
      for(i = 0; i < vet.length-1; i++) {
        if(f(vet[i], vet[i+1])) {
          var a = vet[i];
          vet[i] = vet[i+1];
          vet[i+1] = a;
        }
        else{
          done--;
        }
      }
    }while(done != 0);
    console.log(vet);
  }
  
  function crescente(a, b){
    return (a > b) ? true : false;
  }
  
  function descrescente(a, b){
    return (a < b) ? true : false;
  }
  
  troc([5, 4, 7, 2, 8, 1, 3, 6, 9], crescentePar);
