var document = Document;
function mod2Pagina(){

    let containerMod= document.getElementById("mod");
    let numero = document.getElementById("inputmod").value;
    numero = parseInt(numero);
    if ((numero % 2) != 0){
        containerMod.innerHTML = "false";
        return false;
    }
    containerMod.innerHTML = "true";
    return true;
}
function mod2(num){
    return num % 2 == 0 ? true : false; 
}
function mod(num, mod){
    return num % mod == 0 ? true : false;
}