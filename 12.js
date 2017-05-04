/* Critérios: */

// 0- Decrescente
// 1- Crescente
// 2- Crescente ímpares
// 3- Decrescente pares 

function bubblesort(array,metodo){
 var controle;
    switch(metodo){
        //Decrescente
        case 0: 
        do{
            controle=false;
            for(i=0;i<array.length;i++){
                if(array[i]<array[i+1]){
                    var temp = array[i];
                    array[i]=array[i+1];
                    array[i+1]=temp;
                    controle=true;
                }
            }
        }while(controle);
        return array;    
            break;
        //Crescente
        case 1: 
        do{
            controle=false;
            for(i=0;i<array.length;i++){
                if(array[i]>array[i+1]){
                    var temp = array[i];
                    array[i]=array[i+1];
                    array[i+1]=temp;
                    controle=true;
                }
            }
        }while(controle);
        return array; 
            break;
        //crescente Impar
        case 2:
        do{
            controle=false;
            //Crescente
            for(i=0;i<array.length;i++){
                if(array[i]>array[i+1]){
                    var temp = array[i];
                    array[i]=array[i+1];
                    array[i+1]=temp;
                    controle=true;
                }
            }
        }while(controle);
        //impar
        do{
            controle=false;
            for(i=0;i<array.length-1;i++){
                if(array[i]%2 == 0 && array[i+1]%2 != 0){
                    var temp = array[i];
                    array[i]=array[i+1];
                    array[i+1]=temp;
                    controle=true;
                }
            }
        }while(controle);
        return array; 
            break;
        case 3:
        do{
            controle=false;
            //Decrescente
            for(i=0;i<array.length;i++){
                if(array[i]<array[i+1]){
                    var temp = array[i];
                    array[i]=array[i+1];
                    array[i+1]=temp;
                    controle=true;
                }
            }
        }while(controle);
        //Pares
        do{
            controle=false;
            for(i=0;i<array.length;i++){
                if(array[i]%2!=0 && array[i+1]%2==0){
                    var temp = array[i];
                    array[i]=array[i+1];
                    array[i+1]=temp;
                    controle=true;
                }
            }
        }while(controle);
        return array; 
            break;
        default: console.log("Número não disponível.");
            break;
    }
}
console.log(bubblesort([1,3,2,20,6,5],2));