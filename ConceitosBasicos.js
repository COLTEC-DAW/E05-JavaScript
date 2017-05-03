function triangulo () {
            var x = prompt("Digite a quantidade de linhas: ");

            for(i=1; i<=x; i++) {
                for(j=i; j>0; j--){
                
                console.log("#");
                }
                console.log("\n"); 
            }
}

function xadrez () {
    var car;
    var v=0;
    var g=0;
    var x = prompt("Digite a quantidade de linhas: ");
    var linha=""; 

    for (i=0; i<x; i++){
        if(i%2==0){
            while (v<8) {
                if (v%2==0) {
                    car = "#";
                }
                else {
                   car = " ";
                }
                linha = linha + car; 
                v++;
            }
            v=0;
            console.log(linha);
            console.log("\n");
            linha="";

        }

        else {
             while (g<8) {
                if (g%2!=0) {
                   car = "#";
                }
                else {
                    car = " ";
                }
                linha = linha + car; 
                g++;
            }
            console.log(linha);
            g=0;
            console.log("\n");
            linha="";

        }

        }

 }

 function palindromo () {
    var palavrar= "";
    var x = prompt("Qual palavra deseja saber se é um palindromo? ");
    var palavra = x.toLowerCase();

    for (i=palavra.length; i>0; i--) {
        palavrar= palavrar + palavra[i-1];
    }

    if(palavrar == palavra) {
        console.log("Essa palavra é um palindromo!!");
    }
    else {
        console.log("Essa palavra não é um palindromo ):");
    }

 }

 function progDiferente () {

     for(x=1; x<101; x++) {

     if(x%3==0 && x%5==0) {
         console.log("BuzzFizz");
         
     }
     if(x%3==0 && x%5!=0) {
         console.log("Fizz");
     }
     if(x%5==0 && x%3!=0) {
         console.log("Buzz");
     }
     }


 }


