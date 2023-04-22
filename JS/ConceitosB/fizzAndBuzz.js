function fizzBuzz(){
    const numMax = 100;
    for(i = 1; i <= numMax; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz");
        } else if(i % 5 == 0){
            console.log("Buzz");
        } else if(i % 3 == 0){
            console.log("fizz");
        } else{
            console.log(i);
        }
    }
}

fizzBuzz();