const MAXIMO = 100; 

for(let i = 0; i <= MAXIMO; i++){
    
    if (  Number.isInteger( i / 3) &&  Number.isInteger( i / 5)){
        console.log(i + "  FizzBuzz");
    }
    else if( Number.isInteger( i / 3)){
        console.log(i + "  Fizz");
    } 
    else if (Number.isInteger( i / 5)){
        console.log(i + "  Buzz");
    }  
    else{
        console.log(i);
    }
}