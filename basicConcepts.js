function printTriangle(numberOfRows){
    for(let i = 0; i < numberOfRows; i++){
       let string = "";
       for(let j = 0; j < i + 2; j++){
            string += "#";
       }
       console.log(string);
    }
}

function printChessTable(numberOfRows){

    let coloredLine = "";
    let uncoloredLine = "";

    for(let i = 0; i < numberOfRows; i++){
        if(i % 2 == 0){
            coloredLine += "#";
            uncoloredLine += " ";
        }
        else{
            coloredLine += " ";
            uncoloredLine += "#";
        }
    }
    for(let i = 0; i < numberOfRows; i++){
       i % 2 == 0 ? console.log(coloredLine) : console.log(uncoloredLine);
    }
}

function verfyPalidrom(string){
    string = string.toLocaleLowerCase();
    while(string.includes(" ")){
        string = string.replace(" ", "")
    }

    for(let i = 0; i < string.length; i++){
        if(string.charAt(i) != string.charAt(string.length - 1 - i)){
           return false
        }
    }

    return true
}

function printNumbers(){
    for(let i = 1; i <= 100; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log(`${i} FizzBuzz`);
        }
        else if(i % 3 == 0){
            console.log(`${i} Fizz`);
        }
        else if(i % 5 == 0){
            console.log(`${i} Buzz`);
        }
        else console.log(i)
    }
}

