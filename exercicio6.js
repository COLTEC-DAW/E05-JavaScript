function mod2(number) {
    
    while (number >= 0 ) {       
            if(number == 0)
            console.log("É divisivel")
            
            else if(number == 1) 
            console.log("Não é divisivel")
            
            else
            mod2(number - 2)            
    }
    
}

var number = prompt("Digite um numero")
mod2 (number)