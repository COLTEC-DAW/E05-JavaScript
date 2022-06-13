function fizzbuzz(){
    for(let i = 1; i <= 100; i++){
        let resto3 = i % 3;
        let resto5 = i % 5;
        if((resto3 == 0) && (resto5 == 0))
            console.log("FizzBuzz");
        else if(resto3 == 0)
            console.log("Fizz");
        else if(resto5 == 0)
            console.log("Buzz");
        else
            console.log(i);
    }   
}