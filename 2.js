var string = "";

var escolha = prompt("Insira o número de linhas");

for (var i=0; i<escolha; i++)
{
    for (var j=0; j<8; j++)
    {
		if (i % 2 == 0)
        {
            if (j % 2 ==0)
            {
                string = string + "*";
            }

            else
            {
                string = string + " ";
            }
        }

        else
        {
            if (j % 2 ==0)
            {
                string = string + " ";
            }

            else
            {
                string = string + "*";
            }
        }
    } 

    console.log (string);
    string = "";
}