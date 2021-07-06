
function piramide (num){

    for (var i = 1; i <= num; i++){
        for (var j = 0; j < i; j++){
            process.stdout.write('#');
        }
        process.stdout.write('\n');
    }
}

piramide(6)

