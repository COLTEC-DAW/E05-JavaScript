var max = prompt("Digite o valor maximo : ")
var min = prompt("Digite o valor minimo : ")

function range(max,min){
    var j=0
    var array = []
	
	    for(var i=min;i<max;i++){
            array.push(i);
		    j++;
      }
	        return array;
    }

range(max,min);