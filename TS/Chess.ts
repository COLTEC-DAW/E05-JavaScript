let width: number = parseInt(prompt("Largura :"));
let height: number = parseInt(prompt("Altura :"));

for(let i = 0; i < height; i++)
{
    let output: string = "";
    for(let j = 0; j < width; j++)
    {
        if(i % 2 == 0)
            output += " #";
        else
            output += "# ";
    }
    console.log(output);
}
