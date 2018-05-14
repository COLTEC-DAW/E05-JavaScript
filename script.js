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
console.log(min(8, 4));



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
console.log(mod2(101));



function mod(number, mod_){
    if(number==0){
        return true;
    }else if(number<0){
        return false;
    }else{
        return mod(number-mod_, mod_);
    }
}
console.log(mod(90,3));



function contChars(str, c){
    var qtd=0;
    for(var i=0;i<str.length;i++){
        if(str[i]==c){
            qtd++;
        }
    }
    return qtd;
}
console.log(contChars("aaabbbaaa",'b'));



function range(min, max, i){
    var array = [];
    min++;
    for(min;min<max;min+=i){
        array.push(min);
    }
    return array;
}
console.log (range(2, 10, 3));



function reverseArray(array){
    var aux = [];
    for(var i=(array.length)-1;i>=0;i--){
        aux.push(array[i]);
    }
    return aux;
}
console.log(reverseArray([1,2,3,4,5,6,7,8]));



function toList(array){
    var lista=null;

    for(var i =0; i<array.length;i++){
        var nlista = {value: array[i], rest: null}
        nlista.rest = lista;
        lista = nlista; 
    }
    return lista;
}
console.log(toList([1,2,3]));



function deepEquals(obj1, obj2){
    if(Object.keys(obj1).length!=Object.keys(obj2).length){
        return false;
    }
    for (var i = 0; i < Object.keys(obj1).length; i++){
        if(Object.keys(obj1)[i]!=Object.keys(obj2)[i]){
            return false;
        }

    }
    return true;
}
console.log (deepEquals({ 100: 'a', 2: 'b', 7: 'c' , 8:'d'},{ 100: 'a', 2: 'b', 7: 'x', 8: 'y' }));

/*   F u n ç õ e s      d e      A l t a    O r d e m */


/* ordenação */
var vet = [2, 7, 5, 3, 7 ,2 ,1,8];
var maiorque = function(a, b){
    if(a>b){
        return true;
    }else{
        return false;
    }
}
var menorque = function(a, b){
    if(a<b){
        return true;
    }else{
        return false;
    }
}
function bubblesort(v, test) {
    for(var i=0;i<v.length;i++){
        for(var j=0;j<v.length;j++){
            if(test(v[j], v[i])){
                var aux=v[j];
                v[j]=v[i];
                v[i]=aux;
            }
        }
    }
    return v;
}
console.log(bubblesort(vet, menorque));

/*criptografia*/
function criptografia(str, criterio){
    for(i=0;i<str.length;i++){
        str[i]=criterio(str[i]);
    }
    return str;
}
console.log(criptografia( "mateus", function(a){
    var deslocamento = 1;
    var alfa="abcdefgaihklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ";
    if(alfa.indexOf(a)+deslocamento<=25){
        return  alfa[alfa.indexOf(a)+deslocamento];
    }else{
        return  alfa[alfa.indexOf(a)+deslocamento-25];
    }

}));