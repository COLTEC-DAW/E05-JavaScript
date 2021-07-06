
function piramide (num){

    for (var i = 1; i <= num; i++){
        for (var j = 0; j < i; j++){
            process.stdout.write('#');
        }
        process.stdout.write('\n');
    }
}

piramide(6)

function xadrez (num){

    for (var i = 0; i < num; i++){
        
        for(var j = 0; j < num; j++){
            if (j % 2 == i % 2) {
                process.stdout.write('#');
            }
            else {
                process.stdout.write(' ');
            }
        }
        process.stdout.write('\n');
    }
}

xadrez(10)

function palindromo (palavra){

    var vetor = palavra.split('');

    for (var i = 0; i < (vetor.length/2); i++ ){
        if (vetor[i] != vetor[(vetor.length - i - 1)]){
            return false;
        }
    }

    return true;
}

console.log(palindromo('socorrammesubinoonibusemmarrocos'));


function contadorEstranho(){

    for(var i = 0; i < 100; i++){

        if ((i % 3 == 0) && (i % 5 != 0)){

            console.log('Fizz');

        }
        else if ((i % 5 == 0) && (i % 3 != 0)){

            console.log('Buzz');
        }
        else if ((i % 5 == 0) && (i % 3 == 0)){

            console.log('FizzBuzz');
        }
        else{

            console.log(i);
        }
    }
}

contadorEstranho();