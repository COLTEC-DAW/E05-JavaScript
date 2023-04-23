var c = 0;
var msg = "";

for(i = 1; i <= 100; i++){
    
    var a = i.toString();
    for(j = 0; j < a.length; j++){
        c += a[j];
    }
    
    if((c % 3) == 0){
        msg += "Fizz"
    }
    
    if ((c % 5) == 0){
        msg += "Buzz";
    }
    
    console.log(i + msg);

    c = 0;
    msg = " ";
}