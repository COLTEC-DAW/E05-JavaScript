function confere_palindromo(palindromo){
    var palindromo2 = palindromo.split("").reverse().join("");
    if(palindromo == palindromo2){
        console.log("É um palindromo!!");
    }else{
        console.log("Não é um palindromo!!");
    }
}
var palindromo = prompt('Digite um palindromo: ');
confere_palindromo(palindromo);

