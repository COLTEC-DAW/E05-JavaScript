var impressao = function(){
    var limite = 100;
    for (var i = 1; i <= limite; i++){
        if(i%3 == 0 & i%5 == 0){
            console.log("FizzBuzz");
        }
        else if (i%5 == 0){
            console.log("Buzz");
        } 
        else if (i%3 == 0){
            console.log("Fizz");
        }
        else {
            console.log(i);
        }
    }
}
//main
impressao();