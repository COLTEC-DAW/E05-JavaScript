function ehPalindromo(){
    let palavraUser = parseInt(document.getElementById("inputPalindromo").value);
    let stringCompara = "";
    let comprimento = palavraUser.length - 1;
    for(let i = 0; i <= comprimento; i++){
        stringCompara += palavraUser[comprimento - i];
    }
    if(stringCompara == palavraUser)
        return true;
}