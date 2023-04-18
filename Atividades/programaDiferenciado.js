const dividiPorTres = (number) => number % 3 == 0 
const dividiPorCinco = (number) => number % 5 == 0 

let diferenciado = () => {
    for(i = 1; i <= 100; i++){
        if(dividiPorTres(i) && dividiPorCinco(i)){
            console.log('FizzBuzz')
        }else if(dividiPorTres(i)){
            console.log('Fizz')
        }else if(dividiPorCinco(i)){
            console.log('Buzz')
        }else{
            console.log(i)
        }
    }
}