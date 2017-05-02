function ordenacao () {
    var vetor = [1,9,2,8,3,7,4,6,5];
    var op = prompt("Digite a forma de ordenação \n 1-Ordenação crescente \n 2-Ordenação Decrescente \n 3-Ordenação Crescente Impares \n 4-Ordenaçao Decrescente Par");
    switch(op){
        case "1":
        alert("Ordenação crescente escolhida!");
        console.log("oi");
        ordenacaocrescente(vetor);
        break;
        case "2": 
        alert("Ordenação Decrescente Escolhida!");
        ordenacaodecrescente(vetor);
        break;
        case "3":
        alert("Ordenação Crescente Impares");
        crescenteimpar(vetor);
        break;
        case "4":
        alert("Ordenaçao Decrescente Par");
        decrescentepar(vetor);
        break;
        default:
        alert("A opção digitada nao existe");

    }

    function ordenacaocrescente(vetor) {
         var swapped;
    do {
        swapped = false;
        for (var i=0; i < vetor.length-1; i++) {
            if (vetor[i] > vetor[i+1]) {
                var temp = vetor[i];
                vetor[i] = vetor[i+1];
                vetor[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    console.log(vetor);
}

    function ordenacaodecrescente(vetor) {

         var swapped;
    do {
        swapped = false;
        for (var i=0; i < vetor.length-1; i++) {
            if (vetor[i+1] > vetor[i]) {
                var temp = vetor[i+1];
                vetor[i+1] = vetor[i];
                vetor[i] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    console.log(vetor);
}


    function crescenteimpar(vetor) {
        var x = (vetor.length) -1;
       var vetorAux = [x];
       var index = 0;
       for( i = 0; i < vetor.length; i++){
           if(vetor[i]%2!=0){
               vetorAux[index] = vetor[i];
               index++;
           }
       }
       vetor = vetorAux;
   var swapped;
    do {
        swapped = false;
        for (var i=0; i < vetor.length-1; i++) {
            if (vetor[i] > vetor[i+1]) {
                var temp = vetor[i];
                vetor[i] = vetor[i+1];
                vetor[i+1] = temp;
                swapped = true;
        }
      }
    } while (swapped);
    console.log(vetor);
 }



    function decrescentepar(vetor) {
var x = (vetor.length) -1;
       var vetorAux = [x];
       var index = 0;
       for( i = 0; i < vetor.length; i++){
           if(vetor[i]%2==0){
               vetorAux[index] = vetor[i];
               index++;
           }
       }
       vetor = vetorAux;
        var swapped;
    do {
        swapped = false;
        for (var i=0; i < vetor.length-1; i++) {
            if (vetor[i+1] > vetor[i]) {
                var temp = vetor[i+1];
                vetor[i+1] = vetor[i];
                vetor[i] = temp;
                swapped = true;
            }
        }
      } while (swapped);
    console.log(vetor);
    }

}



//terminar
function criptografia () {

    function criptografar (string, x) {
        var stringc = string;

        for (i=0; i<string.length; i++) {
            stringc[i]= stringc[i]+x;
        }
        return stringc;
    }

    var string = "oi";
    x= 4;
    var criptografado = criptografar(string,x);
    console.log(criptografado);
}