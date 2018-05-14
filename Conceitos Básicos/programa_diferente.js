var Numero = 100;

function DivideTres(num) {
    if ((num % 3) ==  0) {
        return true;
    }
    return false;
}

function DivideCinco(num) {
    if ((num % 5) == 0) {
        return true;
    }
    return false;
}

function DivideTresCinco(tres, cinco) {
    if (tres && cinco) {
        return true;
    }
    return false;
}

function Comparador(num) {
    for (let i = 1; i <= num; i++){
        if (DivideTresCinco(DivideTres(i), DivideCinco(i))) {
            console.log("FizzBuzz");
        }
        else if (DivideTres(i)){
            console.log("Fizz")
        }
        else if (DivideCinco(i)){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }
}

Comparador(Numero);