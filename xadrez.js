var par = "# # # #";
var a = prompt();	

for(var i=0;i<a;i++){
    if ((i % 2) == 0){
    	console.log(par);
    }
    else{
    	console.log(" " + par);
    }
}