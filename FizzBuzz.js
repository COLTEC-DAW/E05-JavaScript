for (let index = 1; index < 101; index++) {
    let line = "";

    if(index % 3 == 0)
    line+= "Fizz";
    if(index % 5 == 0)
    line+= "Buzz";

    if(line == ""){
        console.log(index);
    }else
    console.log(line);
    
}
