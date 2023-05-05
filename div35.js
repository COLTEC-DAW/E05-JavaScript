for(let i = 0; i < 100; i++){
    let line = '';

    if (i % 3 == 0){
        line+= "Fizz";
    }
    if (i % 5 == 0){
        line+= "Buzz";
    }

    if (line === ''){
        console.log(i);
    } else{
        console.log(line);
    }
    
}