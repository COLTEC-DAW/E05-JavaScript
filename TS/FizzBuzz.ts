for(let i = 1; i < 100; i++)
{
    let output: string = i.toString() + ": ";
    if(i % 3 == 0)
        output += "Fizz";
    if(i % 5 == 0)
        output += "Buzz";
    console.log(output);
}