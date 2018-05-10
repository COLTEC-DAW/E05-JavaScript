function triangulo(){
    var linhast = prompt("Digite o número de linhas");
    var tri="<br>";
    for (var i = 0; i < linhast; i++) {
        for(var j = 0; j < i+2; j++){
           tri+="#";
        }
        tri+="<br>";
        
    }
    document.getElementById("text").innerHTML = tri;
    console.log(tri);
};
function xadrez() {
    var linhasx = prompt("Digite o número de linhas");
    var xdz="<br>";
    for(var i = 0;i<linhasx;i++){
        for(var j =0; j<linhasx;j++){
            if(i%2 == j%2){
                xdz+="■ ";
            }else{
                xdz+="□ ";
            }
        }
        xdz+="<br>";
    }
    document.getElementById("text").innerHTML = xdz;
};
function palindromo(){
    var i=0, j=0;
    var palavra = prompt("Digite a palavra");
    for(i=0, j=(palavra.length)-1;i!=j;i++, j--){
        if(palavra[i]!=palavra[j]){
            alert("Não é palindromo");
            return;

        }
    }
    alert("É palindromo");
};

function fizzbuzz(){
    for(var i=1;i<=100;i++){
        if(i%3==0&&i%5==0){
            console.log("FizzBuzz");
        }else if(i%3==0){
            console.log("Fizz");
        }else if(i%5==0){
           console.log("Buzz");
        }else{
            console.log(i);
        }
    }
};
function min(a,b){
    if(a>b){
        return b;
    }else if(b>a){
        return a;
    }else{
        return a;
    }
}
function max(a,b){
    if(a>b){
        return a;
    }else if(b>a){
        return b;
    }else{
        return a;
    }
}

function mod2(number){
    if(number==0){
        return true;
    }else if(number<0){
        return false;
    }else{
        return mod2(number-2);
    }
}

function mod(number, mod){
    if(number==0){
        return true;
    }else if(number<0){
        return false;
    }else{
        return mod2(number-mod);
    }
}

function contChars(str, c){
    var qtd=0;
    for(var i=0;i<str.length;i++){
        if(str[i]==c){
            qtd++;
        }
    }
    return qtd;
}
function range(min, max, i){
    var array;
    min++;
    for(min;min<max;min+=i){
        array.push(min);
    }
    return array;
}

function reverseArray(array){
    var aux;
    for(var i=(array.length)-1;i>=0;i--){
        aux.push(array[i]);
    }
    return aux;
}


function toList(array){
    var lista = null;

    for(var i =0; i<array.length;i++){
        var nlista = {value: array[i], rest: null}
        nlista.rest = lista;
        lista = nlista; 
    }
    return list;
}
function deepEquals(obj1, obj2){
    if(Object.keys(obj1).length!=Object.keys(obj2).length){
        return false;
    }

    for (var i = 0; i < Object.keys(obj1).length; i++){
        var value1 = obj1[i];
        var value2 =obj2[i];
        console.log(value1);
        console.log(value2);
        
        if(value1!=value2){
            return false;
        }
        
    }
    return true;
}
deepEquals({ 100: 'a', 2: 'b', 7: 'c' },{ 100: 'a', 2: 'b', 7: 'x' });










