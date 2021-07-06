
function piramide (num){

    for (var i = 1; i <= num; i++){
        for (var j = 0; j < i; j++){
            process.stdout.write('#');
        }
        process.stdout.write('\n');
    }
}

piramide(6)

function xadrez (num){

    for (var i = 0; i < num; i++){
        
        for(var j = 0; j < num; j++){
            if (j % 2 == i % 2) {
                process.stdout.write('#');
            }
            else {
                process.stdout.write(' ');
            }
        }
        process.stdout.write('\n');
    }
}

xadrez(3)