function maxemin () {

    function max(a,b){
        if (a>b) {
            return a;
        }
        else {
            return b;
        }
    }
    function min(a,b){
        if (a<b) {
            return a;
        }
        else {
            return b;
        }

    }

    var x = prompt("Digite o primeiro número: ");
    var y = prompt("Digite o segundo número: ");

    var maior=max(x,y);
    var menor=min(x,y);

    console.log(maior + " maior número");
    console.log(menor + " menor número");


}


function recursividade () {

    function mod2(a) {
        if(a%2==0) {
           return true;
        }
        else {
           return false; 
        }
    }

    var x = prompt("Digite um numero: ");
    var f= mod2(x);

    if (f==true) {
         console.log(x + " é divisível por dois (:");
    }
    else {
        console.log(x + " não é divisível por dois :(");
    }
}


function recursividade2 () {
    function modx(y,a) {
         if(a%y==0) {
           return true;
        }
        else {
           return false; 
        }
    }
         var x = prompt("Digite um numero para ser dividido: ");
         var y = prompt("Digite o numero pelo qual o anterior sera dividido: ");
         var f= modx(y,x);
         console.log(f);

        if (f==true) {
            console.log(x + " é divisível por " + y +" (:");
        }
        else {
            console.log(x + " não é divisível por " + y +" :(");
        }
}

function contarCarctrs () {

    function countChars(frase, c) {
        var repete=0;  
        var tam = frase.length; 
        console.log(tam);
        for(i=0; i<tam; i++) {
            if(frase[i]==c) {
                repete++;
            } 
         }
         return repete;
    }
    var frase = prompt("Digite a frase desejada: "); 
    var c = prompt("Digite qual letra deseja contar: ");
    var num = countChars(frase, c);

    console.log("A letra "+ c +" aparece " + num + " vezes na frase digitada");

}


