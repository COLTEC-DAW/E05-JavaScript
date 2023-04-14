var x = "#";
var y = " "
function xadrez(){
    for(let i=0; i<5; i++){
        if(i%2==0){
            console.log(x + y + x + y + x + y + x + y);
        } else{
            console.log(y + x + y + x + y + x + y + x);
        }
    }
}

xadrez();