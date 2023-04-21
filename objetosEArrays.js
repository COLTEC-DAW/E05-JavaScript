function range(min, max){
    var resultado=new Array();
    for(let i=min;i<=max;i++){
        resultado.push(i);
    }
    return resultado;
}

function rangeI(min, max, i){
    var resultado=new Array();
    for(let j=min;j<=max;j=j+i){
        resultado.push(j);
    }

    return resultado;
}

function reverseArray(array){
    for (let i=0, j=array.length-1;i<array.length/2;i++, j--){
        var temp=array[i];
        array[i]=array[j];
        array[j]=temp;
    }

    return array;
}


function toList(array){
    var list={};
    var listAnt=null;

    for(let i=array.length-1;i>=0;i--){
        let list2={};

        list2.value=array[i];
        list2.rest=listAnt;

        listAnt=list2;
        list=list2;
    }

    return list;
}

function deepEquals(obj1, obj2){
    const props1=Object.keys(obj1);
    const props2=Object.keys(obj2);

    if(props1.length!==props2.length){
        return false;
    }else{
        for(let i=0;i<props1.length;i++){

            var resultado = props2.filter((valor)=>valor===props1[i]);

            if(resultado.length!==0){
                if(resultado==props1[i]){
                    continue;
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }
        return true;
    }
}

//testes
range(10,20);
rangeI(10,20,3);
reverseArray([6,5,4,3,2,1]);
toList([1,2,3]);
deepEquals(
    {nome:"Julia", 
    cargo:"estudante"}
    , {nome:"Joao", 
    cargo:"professor"}
);