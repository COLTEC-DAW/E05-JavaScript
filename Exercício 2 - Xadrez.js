for(j = 0; j < 8; j++)
{
    for(i = 0; i < 8; i++)
    {
        //para cada linha
        if((i + j) % 2 == 0)
        {
            console.log("#");
        }
        else
        {
            console.log(" ");
        }
    }
    console.log("\n");
}