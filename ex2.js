let num = parseInt(prompt("Digite o numero de linhas"))

let htag = "# # # #"

for(let i = 0; i < num; i++){
	if(i % 2 == 0)
        console.log(htag);
    else
        console.log(" " + htag);
}