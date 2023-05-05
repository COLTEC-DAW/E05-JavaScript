function mod2(number){
    if(number >= 2){
        return mod2((number-2));
    } else if(number == 0){
        return true;
    } else {
        return false;
    }
}

function mod(num, modu){
    if(num >= modu){
        return mod((num-modu), modu);
    } else if(num == 0){
        return true;
    } else {
        return false;
    }
}

let num = parseInt(prompt("num"));
let modu = parseInt(prompt("mod"));

if (mod(num,modu)){
    console.log("É divisível");
} else {
    console.log("Não é divisível");
}
