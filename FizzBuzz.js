var imprime = "";

for(let i = 1; i < 101; i++){
    if((i%3) == 0){
        imprime += "Fizz";
    }
    if((i%5) == 0){
        imprime += "Buzz";
    }

    if(imprime == "")
        console.log(i);
    else{
        console.log(imprime);
    }

    imprime = "";
}