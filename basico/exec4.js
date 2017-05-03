var n;

for(n=1; n<=100; n++){
    if(n%3 == 0){
        document.write("Fizz");
    }
    else if(n%5 == 0){
        document.write("Buzz");
    }
    else if(n%3 == 0 && n%5 == 0){
        document.write("FizzBuzz");
    }
    else{
        document.write(n);
    }
    document.write("&nbsp");
}