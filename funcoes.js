function min(a,b){
    var menor;
    if(a<b){
        menor=a;
    }else{
        menor=b;
    }
    console.log(`O menor valor é: ${menor}`);
}

function max(a,b){
    var maior;
    if(a>b){
        maior=a;
    }else{
        maior=b;
    }
    console.log(`O maior valor é: ${maior}`);
}

min(9,19);
max(20,21);