for(var i = 0; i <= 100; i++){
    if(i%3 == 0 && i%5 ==0){
        console.log(i);
        console.log("FizzBuzz");
    }else if(i%3 == 0){
        console.log(i);
        console.log("Fizz");
    }else if(i%5 ==0){
        console.log(i);
        console.log("Buzz");
    }
}