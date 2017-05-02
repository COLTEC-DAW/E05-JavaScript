function min(a,b){
    if(a<b){
        return a;
    }
    else if(a>b){
        return b;
    }
    else{
        return 0;
    }
}

function max(a,b){
    if(a>b){
        return a;
    }
    else if(a<b){
        return b;
    }
    else{
        return 0;
    }
}

var num1=prompt("Digite o numero 1");
var num2=prompt("Digite o numero 2:");
var resp1= min(num1,num2);
var resp2= max(num1,num2);

if(resp1 === resp2){
    console.log("São iguais");
}
else{
    console.log("Máximo: "+resp2);
    console.log("Minimo: "+resp1);
}