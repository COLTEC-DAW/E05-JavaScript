function intAleatorio() {
    return Math.floor(Math.random() * 100);
}

function mod2 (num) {
    if(num >= 2) return mod2(num-2);
    else return num;
}

function modulo (num, mod) {
    if(num >= mod) return modulo(num-mod);
    else return num;
}

let num = intAleatorio();
let numMod = intAleatorio();

console.log(`mod2(${num}) = ${mod2(num)}`);
console.log(`modulo(${num}, ${numMod}) = ${modulo(num, numMod)}`);