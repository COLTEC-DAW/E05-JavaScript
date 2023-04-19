var x = "Fizz";
var y = "Buzz";

function imprimir (){
    for (let i=1; i<=100; i++){
        if (i%3==0 && i%5==0){
            console.log(x+y);
        } else { 
            if (i%3==0){
                console.log(x);
            } else {
                if (i%5==0){
                    console.log(y);
                } else{
                    console.log(i);
                }
            }        
        }
    }
}

imprimir();