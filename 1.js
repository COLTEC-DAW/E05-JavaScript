var string = "";

var escolha = prompt("Insira o número de linhas");

for (var i=0; i<escolha; i++)
{
    for (var j=i; j>=0; j--)
    {
		string = string + "#";
    } 

	console.log (string);
	string = "";
}