let str = "arara";

// cria vetor a partir da string dada pelo usuario -> split
let rev = str.split("");
// inverte a ordem dos elementos do vetor-> reverse
rev = rev.reverse();
// junto elementos do vetor em uma string -> join
rev = rev.join("");

for(i=0, test = true; i < str.length;i++)
{
    if (str[i] != rev[i])
    {
        test = false;
        console.log("\"" + str +"\""+" não é um palíndromo");
        break;
    }
}
if (test == true) console.log("\"" + str+"\""+" é um palíndromo");