function fizzBuzz() {
    let fizz = 3;
    let buzz = 5;
    let tot = 100;

    for(i = 1; i <= tot; i++) {
        if((i % buzz) == 0 && (i % fizz) == 0) {
            console.log("FizzBuzz");
        }
        else if((i % fizz) == 0) {
            console.log("Fizz");
        } 
        else if((i % buzz) == 0) {
            console.log("Buzz");
        } 
        else {
            console.log(i);
        }

        
    }
    

}

fizzBuzz();