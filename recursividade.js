var num1 = 82;
var num2 = 7;

function mod2(number){
    if((number % 2) == 0){
        return true;
    }else{
        return false;
    }   
}

function mod(num, modx){
    
    if(num >= modx){
        return mod(num - modx, modx);
    }
    if(num == 0){
        return true;
    }else{
        return false;
    }
}

console.log("Divisilvel por 2? - " + mod2(num1));
console.log("Divisilvel por " + num2 + "? - " + mod(num1, num2));