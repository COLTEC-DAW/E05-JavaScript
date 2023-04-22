for (let i = 1; i <= 100; i++) {
            
    var resultadoT = i % 3;
    var resultadoC = i % 5;

    if (resultadoT == 0 && resultadoC == 0) {
        console.log('FizzBuzz')
    } 
    else if(resultadoC == 0)
    {
        console.log('Fizz')
    }
    else if(resultadoT == 0){
        console.log('Buzz')
    }
    else{
        console.log(i)
    }
}