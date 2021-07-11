for(i=1; i<=100; i++){
    if(i%3==0){
        if(i%5==0){
            document.write("FizzBuzz");
        }else{
            document.write("Fizz");
        }
    }else if(i%5==0){
        if(i%3==0){
            document.write("FizzBuzz");
        }else{
            document.write("Buzz");
        }
    }else{
        document.write(i);
    }
    document.write("<br>");
}