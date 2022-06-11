function range(min, max) 
{
    let array = [];
    for (let i = min; i <= max; i++) {
        array.push(i);
    }

    return array;
}
function range2(min, max, j){
    let array = [];
    for (let i = min; i <= max; i+=j) {
        array.push(i);
    }

    return array;
}

function rangeMain() 
{
    let min = parseInt(prompt("Enter min: "));
    let max = parseInt(prompt("Enter max: "));

    console.log(range(min, max));

    let min2 = parseInt(prompt("Enter min2: "));
    let max2 = parseInt(prompt("Enter max2: "));
    let i = parseInt(prompt("Enter i: "));
    console.log(range2(min2, max2, i));
}