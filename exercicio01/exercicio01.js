let current = 2;
const end = 6;

draTriangle();

function draTriangle(){
    while(current <= end){
        let output = "";
        for(let i = 0; i < current;i++){
            output+="#";
        }
        current++;
        console.log(output);
    }
}