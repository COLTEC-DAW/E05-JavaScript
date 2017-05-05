var entrada=prompt("contar até qual número?");
for (i=0; i<=entrada; i++){
    if (i%3==0 && i%5==0) console.log("Fizz Buzz");
    else if (i%3==0) console.log("Fizz");
    else if (i%5==0) console.log("Buzz");
    else console.log(i);
}