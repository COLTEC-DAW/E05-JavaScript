function mod2(number){
    return (number%2==0);
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