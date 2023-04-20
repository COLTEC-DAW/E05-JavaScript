let msg: string = "Jemaf e a lenda de DAW";

function encrypt(message: string, method: Function): string
{
    let output: string = "";
    for(let i = 0; i < message.length; i++)
    {
        output = output.concat(method(message[i]))
        console.log(output);
    }

    return output;
}

console.log(msg);
console.log(encrypt(msg, (char: string) => {
    let ascii = char.charCodeAt(0)
    console.log(char);
    
    if((ascii > 64 && ascii <= 90))
    {
        ascii += 3;
        if(ascii > 90)
            ascii = ascii % 90 + 64;
    }
    else if(ascii > 96 && ascii <= 122)
    {
        ascii += 3;
        if(ascii > 122)
            ascii = ascii % 122 + 96;
    }
    console.log(String.fromCharCode(ascii))
    return String.fromCharCode(ascii);
}));