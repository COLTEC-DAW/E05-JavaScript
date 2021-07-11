var max = function(a, b){
    if (a>b){
        return a;
    }else if (b>a){
        return b;
    }else{
        return null;
    }
}

var min = function(a, b){
    if (a<b){
        return a;
    }else if (b<a){
        return b;
    }else{
        return null;
    }
}

var x = prompt("(Maior/Menor) Digite um numero:");
var y = prompt("(Palindromo/Menor) Digite outro numero:");

if(max(x, y)!=null){
    document.write(max(x, y) + " é o maior número.<br>");
    document.write(min(x, y) + " é o menor número.<br>");
}else{
    document.write("Os dois números são iguais");
}