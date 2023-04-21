for(let comp = 1; comp <= 100; comp++){

    if(comp % 3 == 0 && comp % 5 == 0){

        console.log("FizzBuzz");

    } else if(comp % 3 == 0){

        console.log("Fizz");
        
    } else if(comp % 5 == 0){

        console.log("Buzz");

    } else {

        console.log(comp);

    }

}